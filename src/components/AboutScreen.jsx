import React from "react";
import "./AboutScreen.css";
import founderImg from "../assets/founder_img.png";
import { FiUser, FiStar, FiHome } from "react-icons/fi";

export default function AboutScreen() {
  return (
    <main className="rebuild-page">
      {/* Header */}
      <section className="rebuild-header">
        <h1>Founder's Messsage</h1>

        <div className="rebuild-content">
          <div className="content-left">
            <p className="intro">
              Every meaningful change begins with a heart that cares, a heart
              that dares to see beyond itself and act for others. <br />
              <br />
              <strong>The Before Anyone Else Foundation</strong> was born from
              that belief, that humanity’s truest strength lies in service,
              compassion, and the courage to make a difference where it matters
              most. We exist to remind the world that leadership is not about
              power, but about purpose. It’s about showing up, with empathy,
              with excellence, and with an unshakable commitment to what is
              right.
              <br />
              <br />
              Our vision is simple yet profound: to build a culture where people
              lead with integrity, think with innovation, and serve with
              humanity. We believe that true impact is not measured by how much
              we achieve, but by how deeply we touch lives and awaken potential
              in others.
              <br />
              <br />
              Volunteerism is the heartbeat of our foundation, ordinary people
              doing extraordinary things because they believe that change begins
              with them. It is through these selfless acts that we see hope take
              form, that we see communities transform, and that we reaffirm our
              shared humanity.
              <br />
              <br />
              At the core of everything we do is{" "}
              <strong>excellence with conscience</strong> a commitment to do
              good, and to do it well. We hold ourselves to the highest
              standards, not because it is expected, but because it is who we
              are. Every step we take, every initiative we lead, is guided by
              ethics, empathy, and innovation the values that define us.
              <br />
              <br />
              <strong>
                The world is in constant motion, yet our purpose remains still
                to serve before self, to inspire before indifference, and to act
                before anyone else.
              </strong>
              <br />
              <br />
              Let us continue to lead with heart, think with vision, and serve
              with integrity. For when we place humanity at the center of our
              actions, we not only build a better future we become the very
              change we seek.
            </p>
          </div>

          <div className="content-right">
            <img src={founderImg} alt="Founder Image" className="rebuild-img" />
            <div className="founder-chips">
              <div className="chip">
                <FiUser className="chip-icon" />
                <span>Mr. Derrick Puplampu</span>
              </div>
              <div className="chip">
                <FiStar className="chip-icon" />
                <span>Founder & Executive Director</span>
              </div>
              <div className="chip">
                <FiHome className="chip-icon" />
                <span>Before Anyone Else Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="rebuild-section" id="about-us">
        <h2>About Us</h2>
        <p>
          <strong>Before Anyone Else (B.A.E) Foundation</strong> is a registered
          multinational, impact-oriented NGO dedicated to holistic development
          and service. Conceived in <strong>September 2016</strong> and
          officially launched on <strong>2 April 2017</strong> at Rainbow
          Christian Center (Tema, Ghana), we exist to restore dignity, foster
          excellence, and empower lives—especially among underprivileged and
          marginalised communities.
        </p>
      </section>

      {/* Who We Are */}
      <section className="rebuild-section" aria-labelledby="who-we-are">
        <h3 id="who-we-are">Who We Are</h3>
        <p>
          We stand as the{" "}
          <strong>
            Centre for Excellence, Ethical-Transformational Leadership,
            Innovation, and Sustainable Impact
          </strong>
          . These four pillars define our identity and fuel our work across
          Africa and beyond.
        </p>
        <ul>
          <li>
            <strong>Excellence</strong> — doing good, and doing it well.
          </li>
          <li>
            <strong>Ethical-Transformational Leadership</strong> — purpose
            before power; service before self.
          </li>
          <li>
            <strong>Innovation</strong> — practical, scalable solutions to real
            needs.
          </li>
          <li>
            <strong>Sustainable Impact</strong> — people-centred, measurable
            change.
          </li>
        </ul>
      </section>

      {/* Mission & Vision */}
      <section className="rebuild-section" aria-labelledby="mission-vision">
        <h3 id="mission-vision">Mission & Vision</h3>
        <p>
          <strong>Mission:</strong> To serve as agents of change—championing
          compassion, justice, and ethical leadership—by integrating actionable
          practices that address socio-economic needs and environmental
          challenges, nurturing hope, dignity, and quality of life.
        </p>
        <p>
          <strong>Vision:</strong> A world lived out through{" "}
          <strong>acts of kindness, service, and transformative leadership</strong>
          , where every person, regardless of background, has the opportunity to
          thrive.
        </p>
      </section>

      {/* Our Core Values */}
      <section className="rebuild-section" aria-labelledby="values">
        <h3 id="values">Our Core Values</h3>
        <ul>
          <li>
            <strong>Integrity & Compassion</strong> — serving before self and
            standing for what is right.
          </li>
          <li>
            <strong>Excellence with Conscience</strong> — high standards
            anchored in empathy and ethics.
          </li>
          <li>
            <strong>Innovation & Stewardship</strong> — creative, responsible
            use of resources for lasting change.
          </li>
          <li>
            <strong>Inclusivity & Dignity</strong> — every life has worth; every
            voice deserves a future.
          </li>
        </ul>
      </section>

      {/* Our Story */}
      <section className="rebuild-section" aria-labelledby="our-story">
        <h3 id="our-story">Our Story</h3>
        <p>
          The movement began as <strong>Teens in Christ (T-I-C)</strong>—a small
          but passionate youth community determined to live with meaning and
          inspire ethical leadership. In 2016, that spark matured into a clearly
          defined mandate and a new name: <strong>Before Anyone Else</strong>—a
          call to <em>put others first</em>, act early, and lead where it
          matters most.
        </p>
        <ul>
          <li>
            <strong>2017:</strong> Official launch in Tema, Ghana; programs in
            youth leadership, education, and community development commence.
          </li>
          <li>
            <strong>2024:</strong> First international chapter inaugurated in{" "}
            <strong>The Gambia</strong> as part of our Legacy & Expansion
            Program.
          </li>
        </ul>
      </section>

      {/* Aligned to the Global Goals */}
      <section className="rebuild-section" aria-labelledby="sdgs-focus">
        <h3 id="sdgs-focus">Aligned to the Global Goals</h3>
        <p>
          The Foundation aligns with the{" "}
          <strong>United Nations Sustainable Development Goals (SDGs)</strong>,
          advancing integrated solutions that address root causes of poverty,
          inequality, and environmental degradation.
        </p>
        <ul>
          <li>
            <strong>Youth Empowerment & Leadership Development</strong>
          </li>
          <li>
            <strong>Education Equity & Community Health</strong>
          </li>
          <li>
            <strong>Gender-Focused Advocacy</strong>
          </li>
          <li>
            <strong>Innovation Training & Climate Education</strong>
          </li>
          <li>
            <strong>Policy Research & People-Centred Development</strong>
          </li>
        </ul>
      </section>

      {/* How We Move */}
      <section className="rebuild-section" aria-labelledby="cta">
        <h3 id="cta">How We Move</h3>
        <p>
          We translate faith and values into{" "}
          <strong>practical, measurable, sustainable action</strong>—raising
          ethical leaders, strengthening vulnerable populations, and building
          resilient communities through people-centred development.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-info">
            <h2>Frequently asked questions</h2>
            <p>
              Answers to common questions about our mission, work, and programs.
            </p>
          </div>
        </div>

        <div className="faq-items">
          <details open>
            <summary>How are donations used?</summary>
            <p>
              Every cedi goes directly toward our programs and initiatives,
              with a focus on maximizing impact. A small portion covers
              essential operations.
            </p>
          </details>

          <details>
            <summary>Can I choose a specific program to support?</summary>
            <p>
              Yes, you can select from our list of ongoing causes when donating
              or contact our team for targeted contributions.
            </p>
          </details>

          <details>
            <summary>Is my donation tax-deductible?</summary>
            <p>
              Absolutely. We provide receipts for all contributions that can be
              used for tax deduction purposes.
            </p>
          </details>

          <details>
            <summary>
              How can I stay updated on the impact of my donation?
            </summary>
            <p>
              You'll receive regular updates and stories from the field showing
              how your generosity is making a difference.
            </p>
          </details>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Together, We Can Make a Difference</h2>
          <p>
            Your support empowers us to provide essential resources and build
            brighter futures.
          </p>
          <div className="cta-buttons">
            <button className="donate">Donate Now</button>
            <button className="volunteer">Become a Volunteer</button>
          </div>
          <div className="cta-footer">
            <p>Total people involved for vulnerable families and individuals</p>
          </div>
        </div>
      </section>
    </main>
  );
}
