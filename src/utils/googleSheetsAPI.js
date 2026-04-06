import credentials from '../credentials.json.json';

// Generate JWT token from service account credentials
const generateJWT = async () => {
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = now + 3600; // 1 hour expiration

  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: expiresAt,
    iat: now
  };

  // Base64 encode header and payload
  const headerEncoded = btoa(JSON.stringify(header)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  const payloadEncoded = btoa(JSON.stringify(payload)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  const signatureInput = `${headerEncoded}.${payloadEncoded}`;

  // Sign with the private key using Web Crypto API
  return await signJWT(signatureInput, credentials.private_key);
};

// Sign JWT using Web Crypto API
const signJWT = async (message, privateKey) => {
  // Parse the private key
  const keyData = privateKey
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\n/g, '');

  const binaryString = atob(keyData);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Import the key
  const key = await window.crypto.subtle.importKey(
    'pkcs8',
    bytes.buffer,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256'
    },
    false,
    ['sign']
  );

  // Sign the message
  const encodedMessage = new TextEncoder().encode(message);
  const signature = await window.crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    encodedMessage
  );

  // Convert signature to base64url
  const signatureArray = Array.from(new Uint8Array(signature));
  const signatureBase64 = btoa(String.fromCharCode(...signatureArray))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return `${message}.${signatureBase64}`;
};

// Get access token using JWT
const getAccessToken = async (jwt) => {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
};

// Fetch data from Google Sheets API
export const fetchEventsFromGoogleSheets = async () => {
  try {
    // Generate JWT and get access token
    const jwt = await generateJWT();
    const accessToken = await getAccessToken(jwt);

    // Sheet ID and configuration
    const spreadsheetId = '1GNh4uf1qzxuz0rVWryfiXj95ksZ9pTCYPF58t2ipEMs';
    const sheetName = 'Sheet1'; // Change this if your sheet has a different name
    const range = `${sheetName}!A2:G`; // No encoding needed, API handles it

    console.log(`Fetching events from: ${spreadsheetId}`);
    console.log(`Range: ${range}`);
    console.log(`Using service account: ${credentials.client_email}`);

    // Fetch data from Google Sheets API
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`API Response Status: ${response.status}`);
      console.error(`Error Details:`, errorData);
      
      // Provide helpful error message
      if (response.status === 400 && errorData.error?.message?.includes('Unable to parse range')) {
        throw new Error(
          `Sheet error: The sheet name might be incorrect (currently using "${sheetName}"). ` +
          `Make sure the sheet name matches exactly (case-sensitive) in the file googleSheetsAPI.js`
        );
      } else if (response.status === 403) {
        throw new Error(
          `Permission denied: The service account (${credentials.client_email}) ` +
          `doesn't have access to this spreadsheet. ` +
          `Please share the spreadsheet with this email address.`
        );
      }
      
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values || [];

    console.log(`Successfully fetched ${rows.length} rows from Google Sheets`);

    // Parse the rows into event objects
    const parsedEvents = rows
      .filter(row => row && row.length > 0 && row[0]?.trim()) // Filter empty rows
      .map((row, index) => {
        // Column mapping: Title(0), Date(1), Location(2), Category(3), Description(4), image_url(5), Status(6)
        // Note: Dropdown values from validation ranges will be returned as plain text
        const eventObj = {
          id: index + 1,
          title: (row[0] || 'Untitled Event').toString().trim(),
          date: (row[1] || 'TBA').toString().trim(),
          location: (row[2] || 'TBA').toString().trim(),
          category: (row[3] || 'conference').toString().toLowerCase().trim(),
          description: (row[4] || 'No description provided').toString().trim(),
          imageUrl: (row[5] || '').toString().trim() || null,
          status: (row[6] || 'Upcoming').toString().trim(),
          detailedInfo: {
            overview: (row[4] || 'No overview available').toString().trim(),
            whatItDoes: [(row[4] || 'Event details available on registration').toString().trim()],
            whyItMatters: 'This is an important BAE Foundation event',
            impactHighlights: ['Join us for an inspiring event', 'Network with like-minded individuals']
          }
        };
        
        return eventObj;
      });

    return parsedEvents;
  } catch (error) {
    console.error('Error fetching events from Google Sheets:', error);
    throw error;
  }
};

// Parse CSV row handling quoted fields (fallback method if API fails)
export const parseCSVRow = (row) => {
  const result = [];
  let current = '';
  let insideQuotes = false;
  
  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    const nextChar = row[i + 1];
    
    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
};
