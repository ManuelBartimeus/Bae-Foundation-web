import React, { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin, FiExternalLink, FiFilter } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { fetchEventsFromGoogleSheets } from '../utils/googleSheetsAPI';
import './Events.css';

export default function Events({ onNavigate }) {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event categories for filtering
  const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'conference', name: 'Conferences' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'outreach', name: 'Outreach' },
    { id: 'training', name: 'Training' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'milestone', name: 'Milestone'}
  ];

  // Fetch data from Google Sheets using service account credentials
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        setLoading(true);
        const parsedEvents = await fetchEventsFromGoogleSheets();

        setEvents(parsedEvents);
        setFilteredEvents(parsedEvents);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        const errorMsg = err.message.includes('Permission denied') 
          ? `${err.message}` 
          : err.message.includes('Sheet error')
          ? `${err.message}`
          : 'Unable to load events from Google Sheets. Please check your credentials and sheet access.';
        
        setError(errorMsg);
        
        // Set fallback empty state
        setEvents([]);
        setFilteredEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  // Filter events based on search and category
  useEffect(() => {
    let filtered = events;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(event => event.category === activeFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredEvents(filtered);
  }, [events, activeFilter, searchTerm]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'upcoming': return '#1520a6';
      case 'ongoing': return '#28a745';
      case 'completed': return '#6c757d';
      default: return '#1520a6';
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }).replace(',', '');
    } catch {
      return dateString;
    }
  };

  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="events-header">
        <h1>Upcoming Events</h1>
        <p>
          Join us for inspiring events, conferences, and community gatherings 
          that bring together innovators, leaders, and changemakers from around the world.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="events-filter">
        <div className="filter-container">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {eventCategories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="events-grid">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading events...</p>
          </div>
        ) : error ? (
          <div className="error-state">
            <h3>Unable to Load Events</h3>
            <p>{error}</p>
          </div>
        ) : (
          <div className="events-container">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="event-card">
                  {event.imageUrl && (
                    <div className="event-image">
                      <img src={event.imageUrl} alt={event.title} />
                    </div>
                  )}
                  
                  <div className="event-header-section">
                    <div className="event-date-badge">
                      <span className="event-month">{formatDate(event.date).split(' ')[0]}</span>
                      <span className="event-day">{formatDate(event.date).split(' ')[1]}</span>
                    </div>
                    <div className="event-status" style={{ backgroundColor: getStatusColor(event.status) }}>
                      {event.status}
                    </div>
                  </div>
                  
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    
                    <div className="event-details">
                      <div className="detail-item">
                        <FiCalendar className="detail-icon" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="detail-item">
                        <FiMapPin className="detail-icon" />
                        <span>{event.location}</span>
                      </div>
                      <div className="detail-item">
                        <span>{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="event-link" 
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Details <FiExternalLink />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-events">
                <h3>No events found</h3>
                <p>Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="events-cta">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Join our community of changemakers at our upcoming events and be part 
            of the movement for sustainable development and social impact.
          </p>
          <div className="cta-buttons">
            <button className="register" onClick={() => onNavigate && onNavigate('contact')}>Register for an Event</button>
            <button className="partner" onClick={() => onNavigate && onNavigate('contact')}>Sponsor an Event</button>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <h2>{selectedEvent.title}</h2>
                <span className="modal-category">
                  {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)} Event
                </span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="modal-section-content">
                  <h3>Event Details</h3>
                  <div className="event-details-grid">
                    <div className="detail-row">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{selectedEvent.location}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Category:</span>
                      <span className="detail-value">{selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value">{selectedEvent.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <div className="modal-section-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <div className="modal-section-content">
                  <h3>Overview</h3>
                  <p>{selectedEvent.detailedInfo.overview}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-register-btn" onClick={() => onNavigate && onNavigate('contact')}>
                Register Now
              </button>
              <button className="modal-close-btn" onClick={() => setSelectedEvent(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
