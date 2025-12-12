import React, { useRef, useEffect } from "react";
import { FaPlay, FaArrowRight, FaDonate } from "react-icons/fa";
import { FaRegBuilding, FaRegUserCircle } from "react-icons/fa";
import { useCountUp, useCountUpFromString } from "../hooks/useCountUp";
import "./HomeScreen.css";
import heroImage from "../assets/hero.jpg";
import testimonialimage from "../assets/school_boy_smiling.jpg";
import initiative1 from "../assets/initiatives/initiative-1.png";
import initiative2 from "../assets/initiatives/initiative-2.png";
import initiative3 from "../assets/initiatives/initiative-3.png";
import initiative4 from "../assets/initiatives/initiative-4.png";
import initiative5 from "../assets/initiatives/initiative-5.png";
import initiative6 from "../assets/initiatives/initiative-6.png";
import legacySpots from "../assets/initiatives/initiative-8.png";
import volunteer from "../assets/volunteer.jpg";
import impactChild from "../assets/boy-rising-hand-class_23-2150814449.jpg";
import impactStudents from "../assets/study-group-african-people_23-2149156390.jpg";
import impactWomen from "../assets/african-woman-teaching-children-class.jpg";
import teamImg from "../assets/team/team-1.png";
import establishmentImg from "../assets/9_years_establishment.jpg";
import partnersImg from "../assets/10_partners.jpg";
import beneficiariesImg from "../assets/12k_beneficiaries.jpg";
import volunteersImg from "../assets/50_registered_volunteers.jpg";
import sdg1 from "../assets/sdg goals/sdg_1.png";
import sdg2 from "../assets/sdg goals/sdg_2.png";
import sdg3 from "../assets/sdg goals/sdg_3.png";
import sdg4 from "../assets/sdg goals/sdg_4.png";
import sdg5 from "../assets/sdg goals/sdg_5.png";
import sdg9 from "../assets/sdg goals/sdg_9.png";
import sdg10 from "../assets/sdg goals/sdg_10.png";
import sdg13 from "../assets/sdg goals/sdg_13.png";
import sdg15 from "../assets/sdg goals/sdg_15.png";
import sdg17 from "../assets/sdg goals/sdg-17.png";
import logo1 from "../assets/logo-1.png";
import educationImg from "../assets/african-kids-enjoying-life_23-2151438340.jpg";
import greenStepImg from "../assets/E Policy Day2-26.jpg";
import hygieneOutreachImg from "../assets/HHo-89.jpg";
import healthImg from "../assets/SAFE-HEALING-SPACES-RESOURCES-FOR-BLACK-WOMEN-1-1024x681.jpg";
import reelVideo from "../assets/reel-video.mp4";

export default function HomeScreen() {
  const videoRef = useRef(null);

  // Intersection Observer for video autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log("Video autoplay failed:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of video is visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Count-up animations for impact cards
  const years = useCountUp(9, 2000);
  const beneficiaries = useCountUpFromString("12K+", 2000);
  const initiatives = useCountUp(7, 2000);
  const campaigns = useCountUpFromString("16+", 2000);
  const volunteers = useCountUpFromString("50+", 2000);
  const partners = useCountUpFromString("10+", 2000);

  // Count-up animations for stats sections
  const schoolsReached = useCountUp(2, 2000);
  const studentsImpacted = useCountUpFromString("150+", 2000);
  const schoolsPartnered = useCountUpFromString("100+", 2000);
  const scholarships = useCountUpFromString("800+", 2000);
  const medicalKits = useCountUpFromString("20K+", 2000);
  const clinicsOperated = useCountUpFromString("800K+", 2000);

  return (
    <main className="es-root" aria-label="BAE Foundation fundraising hero">
      {/* Hero container - two column layout */}
      <section className="es-hero" aria-labelledby="hero-heading">
        {/* Left column */}
        <aside className="es-left" aria-label="Intro column">
          <div className="es-donor-row" aria-hidden="false">
            <img
              src={volunteer}
              alt="donor avatars preview"
              className="es-donor-avatars"
            />
            <span className="es-donor-label">
              50+ Active international volunteers
            </span>
          </div>

          <h1 id="hero-heading" className="es-title">
            Empowering
            <br />
            the next
            <br />
            generation
          </h1>

          <p className="es-description">
            Together, we can make a real impact in communities around the world.
            Help us bring hope and support.
          </p>

          <div className="es-cta">
            <button className="es-btn-primary" aria-label="Donate Now">
              <span>Donate Now</span>
              <FaArrowRight className="es-btn-icon" aria-hidden="true" />
            </button>

            <button className="es-btn-ghost" aria-label="Learn More">
              Learn More
            </button>
          </div>
        </aside>

        {/* Right column - hero image panel */}
        <section className="es-right" aria-label="Hero image and CTA">
          <div
            className="es-right-panel"
            role="img"
            aria-label="Volunteers holding donation signs"
          >
            <img
              src={heroImage}
              alt="Children smiling"
              className="es-hero-image"
            />

            {/* Quote bubble */}
            <div
              className="es-quote"
              role="group"
              aria-label="Testimonial quote"
              tabIndex="0"
            >
              <img
                src={testimonialimage}
                alt="testimonial avatar"
                className="es-quote-avatar"
              />
              <span className="es-quote-text">
                "Because of this organization, science finally came alive to me."
              </span>
            </div>

            {/* Bottom-left pill */}
            <div className="es-pill" aria-hidden="true">
              Real lives changed by your support
            </div>

            {/* Team card at bottom-right */}
            <article
              className="es-team-card"
              aria-label="Dedicated team information"
              tabIndex="0"
            >
              <h4 className="es-team-title">Good News Bible School</h4>
              <p className="es-team-desc">
                Engaging the students of Good News Bible School in basic electronics.
              </p>

            </article>
          </div>
        </section>
      </section>

      {/* Initiatives Section */}
      <section className="es-partners" aria-label="Our Initiatives">
        <h3 className="es-partners-title">Initiatives that change lives.</h3>
        <div className="es-initiative-carousel">
          <div className="es-initiative-track">
            {/* First set of images */}
            <div className="es-initiative-item">
              <img
                src={initiative1}
                alt="Initiative 1"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative2}
                alt="Initiative 2"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative3}
                alt="Initiative 3"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative4}
                alt="Initiative 4"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative5}
                alt="Initiative 5"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative6}
                alt="Initiative 6"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={legacySpots}
                alt="Legacy Spots Initiative"
                className="es-initiative-image"
              />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="es-initiative-item">
              <img
                src={initiative1}
                alt="Initiative 1"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative2}
                alt="Initiative 2"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative3}
                alt="Initiative 3"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative4}
                alt="Initiative 4"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative5}
                alt="Initiative 5"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={initiative6}
                alt="Initiative 6"
                className="es-initiative-image"
              />
            </div>
            <div className="es-initiative-item">
              <img
                src={legacySpots}
                alt="Legacy Spots Initiative"
                className="es-initiative-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Programs Section */}
      <section className="impact-section">
        {/* Heading */}
        <h2 className="impact-title">Explore our impact trail</h2>
        <p className="impact-subtitle">
          Real change begins when compassion turns into action — and together,
          we create ripples of impact that reach farther than we can see.
        </p>

        {/* Cards */}
        <div className="impact-cards">
          {/* Card 1 - Years Since Establishment */}
          <div className="impact-card orange">
            <div className="card-background-image">
              <img
                src={establishmentImg}
                alt="Foundation establishment"
                className="background-img"
              />
            </div>
            <div className="card-content">
              <h3 className="metric-main" ref={years.ref}>
                {years.count} Years
              </h3>
              <p className="metric-title">Since Establishment</p>
              <p className="metric-text">
                Nearly a decade of dedicated service to communities in need
                across Ghana and beyond.
              </p>
            </div>
            <div className="card-image">
              <div className="card-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Card 2 - Beneficiaries */}
          <div className="impact-card black">
            <div className="card-background-image">
              <img
                src={beneficiariesImg}
                alt="Beneficiaries supported"
                className="background-img"
              />
            </div>
            <div className="card-content">
              <h3 className="metric-main" ref={beneficiaries.ref}>
                {beneficiaries.count}
              </h3>
              <p className="metric-title">Beneficiaries</p>
              <p className="metric-text">
                Thousands of lives touched through our comprehensive support
                programs and initiatives.
              </p>
            </div>
            <div className="card-image">
              <div className="card-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Card 3 - Initiatives Launched */}
          <div className="impact-card yellow">
            <div className="card-background-image">
              <img
                src={impactWomen}
                alt="Initiatives in action"
                className="background-img"
              />
            </div>
            <div className="card-content">
              <h3 className="metric-main" ref={initiatives.ref}>
                {initiatives.count} Initiatives
              </h3>
              <p className="metric-title">Successfully Launched</p>
              <p className="metric-text">
                Strategic programs designed to address key challenges in
                education, health, and poverty alleviation.
              </p>
            </div>
            <div className="card-image">
              <div className="card-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Card 4 - Successful Campaigns */}
          <div className="impact-card black">
            <div className="card-background-image">
              <img
                src={impactChild}
                alt="Successful campaigns"
                className="background-img"
              />
            </div>
            <div className="card-content">
              <h3 className="metric-main" ref={campaigns.ref}>
                {campaigns.count}
              </h3>
              <p className="metric-title">Successful Campaigns</p>
              <p className="metric-text">
                Impactful campaigns that have raised awareness and resources for
                vulnerable communities.
              </p>
            </div>
            <div className="card-image">
              <div className="card-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Card 5 - Registered Volunteers */}
          <div className="impact-card yellow">
            <div className="card-background-image">
              <img
                src={volunteersImg}
                alt="Registered volunteers"
                className="background-img"
              />
            </div>
            <div className="card-content">
              <h3 className="metric-main" ref={volunteers.ref}>
                {volunteers.count}
              </h3>
              <p className="metric-title">Registered Volunteers</p>
              <p className="metric-text">
                Dedicated individuals committed to making a difference in their
                communities through service.
              </p>
            </div>
            <div className="card-image">
              <div className="card-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* Card 6 - Partners */}
          <div className="impact-card orange">
            <div className="card-background-image">
              <img
                src={partnersImg}
                alt="Partnership collaborations"
                className="background-img"
              />
            </div>
            <div className="card-content">
              <h3 className="metric-main" ref={partners.ref}>
                {partners.count}
              </h3>
              <p className="metric-title">Partners</p>
              <p className="metric-text">
                Strategic partnerships with organizations and institutions to
                maximize our collective impact.
              </p>
            </div>
            <div className="card-image">
              <div className="card-icon">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims and Objectives Section */}

      <section className="donation-section">
        {/* Header */}
        <h2 className="donation-title">Aims and Objectives</h2>
        <p className="donation-subtitle">
          Before Anyone Else Foundation's aims and objectives are set to support
          the Sustainable Development Goals (SDGs) 1, 2, 3, 4, 5, 9, 10, 13, 15
          and 17
        </p>

        {/* Circular Infographic */}
        <div className="sdg-infographic-container">
          {/* Center Content */}
          <div className="sdg-center">
            <div className="sdg-center-content">
              <h3 className="sdg-center-title">10 SDGs</h3>
              <p className="sdg-center-subtitle">Supporting Global Goals</p>
            </div>
          </div>

          {/* Circular Cards */}
          <div className="donation-cards">
            {/* SDG 1 - No Poverty */}
            <div
              className="donation-card"
              data-position="1"
              data-description="We work to end poverty in all its forms by providing economic opportunities, skills training, and support to vulnerable communities across Ghana."
            >
              <div className="card-inner">
                <img src={sdg1} alt="SDG 1" className="donation-image" />
                <h3 className="donation-card-title">No Poverty</h3>
              </div>
            </div>

            {/* SDG 2 - Zero Hunger */}
            <div
              className="donation-card"
              data-position="2"
              data-description="Our mission includes ensuring food security and improved nutrition through sustainable agriculture practices and food distribution programs."
            >
              <div className="card-inner">
                <img src={sdg2} alt="SDG 2" className="donation-image" />
                <h3 className="donation-card-title">Zero Hunger</h3>
              </div>
            </div>

            {/* SDG 3 - Good Health and Well-being */}
            <div
              className="donation-card"
              data-position="3"
              data-description="We promote healthy lives and well-being for all by improving access to healthcare services and health education in underserved communities."
            >
              <div className="card-inner">
                <img src={sdg3} alt="SDG 3" className="donation-image" />
                <h3 className="donation-card-title">
                  Good Health and Well-being
                </h3>
              </div>
            </div>

            {/* SDG 4 - Quality Education */}
            <div
              className="donation-card"
              data-position="4"
              data-description="We ensure inclusive and equitable quality education by building schools, training teachers, and providing educational resources to children and adults."
            >
              <div className="card-inner">
                <img src={sdg4} alt="SDG 4" className="donation-image" />
                <h3 className="donation-card-title">Quality Education</h3>
              </div>
            </div>

            {/* SDG 5 - Gender Equality */}
            <div
              className="donation-card"
              data-position="5"
              data-description="We promote gender equality and empower all women and girls through equal opportunities, leadership training, and advocacy against gender-based discrimination."
            >
              <div className="card-inner">
                <img src={sdg5} alt="SDG 5" className="donation-image" />
                <h3 className="donation-card-title">Gender Equality</h3>
              </div>
            </div>

            {/* SDG 9 - Industry, Innovation and Infrastructure */}
            <div
              className="donation-card"
              data-position="6"
              data-description="We build resilient infrastructure and foster innovation by supporting technological advancement and sustainable industrialization in local communities."
            >
              <div className="card-inner">
                <img src={sdg9} alt="SDG 9" className="donation-image" />
                <h3 className="donation-card-title">
                  Industry, Innovation and Infrastructure
                </h3>
              </div>
            </div>

            {/* SDG 10 - Reduced Inequalities */}
            <div
              className="donation-card"
              data-position="7"
              data-description="We work to reduce inequalities within and among communities by promoting social inclusion, economic empowerment, and equal opportunities for all regardless of background."
            >
              <div className="card-inner">
                <img src={sdg10} alt="SDG 10" className="donation-image" />
                <h3 className="donation-card-title">Reduced Inequalities</h3>
              </div>
            </div>

            {/* SDG 13 - Climate Action */}
            <div
              className="donation-card"
              data-position="8"
              data-description="We take urgent action to combat climate change and its impacts through environmental education, sustainable practices, and community-based climate resilience programs."
            >
              <div className="card-inner">
                <img src={sdg13} alt="SDG 13" className="donation-image" />
                <h3 className="donation-card-title">Climate Action</h3>
              </div>
            </div>

            {/* SDG 15 - Life on Land */}
            <div
              className="donation-card"
              data-position="9"
              data-description="We protect, restore and promote sustainable use of terrestrial ecosystems through reforestation projects, biodiversity conservation, and environmental awareness campaigns."
            >
              <div className="card-inner">
                <img src={sdg15} alt="SDG 15" className="donation-image" />
                <h3 className="donation-card-title">Life on Land</h3>
              </div>
            </div>

            {/* SDG 17 - Partnerships for the Goals */}
            <div
              className="donation-card"
              data-position="10"
              data-description="We strengthen partnerships and collaborate with organizations, governments, and communities to achieve sustainable development through shared resources and collective action."
            >
              <div className="card-inner">
                <img src={sdg17} alt="SDG 17" className="donation-image" />
                <h3 className="donation-card-title">
                  Partnerships for the Goals
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 1: Green Step Environmental Awareness ---------- */}
      <section className="impact-section">
        <div className="section-header">
          <h1 className="section-title">Results that Inspire Change</h1>
          <p className="section-subtitle">
            Through dedicated initiatives and community-driven action, we
            continue to deliver results and lasting change for a more equitable
            and hopeful future.
          </p>
        </div>

        <div className="section-grid">
          <div className="image-wrapper">
            <img
              src={greenStepImg}
              alt="Green Step Environmental Awareness Project at St. Peter's Secondary School"
              className="impact-img"
            />
          </div>

          <div className="text-content">
            <span className="tag">Nakaaba Policy Initiative</span>
            <h2>Inspiring Proactive Youth Leaders for a Sustainable Future</h2>
            <p>
              BEFORE ANYONE ELSE FOUNDATION – The Gambia continued the momentum
              with our second engagement at St. Peter's Secondary School,
              sparking insightful conversations on sustainability, environmental
              policy, and student-led initiatives to keep their surroundings
              clean and resourceful.
            </p>

            <div className="stats-row">
              <div className="stat-box">
                <FaRegBuilding className="stat-icon yellow-icon" />
                <div>
                  <p>
                    {" "}
                    <strong>10</strong> Schools Reached
                  </p>
                </div>
              </div>
              <div className="stat-box">
                <FaRegUserCircle className="stat-icon yellow-icon" />
                <div>
                  <p>
                    {" "}
                    <strong>1000+</strong> Students Impacted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 2: Personal and Hand Hygiene Outreach ---------- */}
      <section className="impact-section">
        <div className="section-grid">
          <div className="text-content">
            <span className="tag">Health & Hygiene Initiative</span>
            <h2>Building Healthier Futures Through Hand Hygiene Education</h2>
            <p>
              We conducted a Personal and Hand Hygiene Outreach in Ho, Volta
              Region, engaging over 120 students from Ho Technical Basic School
              and PCG-RIIS Basic School. We donated hygiene kits, buckets, soap,
              and sanitizers, and extended the initiative to the Presbyterian
              Church – RIIS Congregation to encourage ongoing healthy hygiene
              practices.
            </p>

            <div className="stats-row">
              <div className="stat-box">
                <FaRegBuilding className="stat-icon yellow-icon" />
                <div>
                  <p>
                    <strong>2</strong> Schools Reached
                  </p>
                </div>
              </div>
              <div className="stat-box">
                <FaRegUserCircle className="stat-icon yellow-icon" />
                <div>
                  <p>
                    <strong>120+</strong> Students Impacted
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-wrapper">
            <img
              src={hygieneOutreachImg}
              alt="Personal and Hand Hygiene Outreach in Ho, Volta Region"
              className="impact-img"
            />
          </div>
        </div>
      </section>

      {/* Logo Meaning Section */}
      <section className="logo-meaning-section">
        <div className="logo-section-header">
          <h1 className="logo-section-title">Our Identity in Colour</h1>
          <p className="logo-section-subtitle">
            The colours in our emblem speak the language of our cause.
          </p>
        </div>

        <div className="content">
          {/* Logo and Heading */}
          <div className="logo-center">
            <img src={logo1} alt="Our Logo" className="logo-image" />
            <h2 className="logo-title">Our Logo</h2>
          </div>

          {/* Color meanings */}
          <div className="meanings-grid">
            {[
              { color: "Red", text: "Red stands for LOVE & PASSION" },
              { color: "Orange", text: "Orange stands for HOSPITALITY" },
              {
                color: "Yellow",
                text: "Yellow stands for OPTIMISM & JOY TO THE LEAST",
              },
              { color: "Blue", text: "Blue stands for SYMPATHY AND HARMONY" },
              {
                color: "Green",
                text: "Green stands for US SPARKING UP THE HOPES OF THE LESS PRIVILEGED",
              },
              {
                color: "Purple",
                text: "Purple stands for DEVOTION TO SERVING",
              },
            ].map((item, index) => (
              <div className={`meaning-card ${item.color.toLowerCase()}`} key={index}>
                <h3 className={`color-name ${item.color.toLowerCase()}`}>
                  {item.color}
                </h3>
                <p className="color-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Section 3: Call to Action ---------- */}
      <section className="home-projects-cta">
        <div className="home-cta-content">
          <h2>Want to Support Our Initiatives?</h2>
          <p>
            Your contribution can help us expand these life-changing initiatives
            and reach even more communities in need.
          </p>
          <div className="home-cta-buttons">
            <button className="donate">Donate Now</button>
            <button className="volunteer">Volunteer</button>
          </div>
        </div>

        <div className="volunteer-right">
          <video
            ref={videoRef}
            src={reelVideo}
            className="volunteer-video"
            muted
            loop
            playsInline
          />
          <a
            href="https://www.instagram.com/reel/DJl0h53qIxY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="floating-text top"
          >
            Watch our story reel ⏵
          </a>
          <div className="floating-text bottom">
            🌍Service • People • Projects • Impact🌍
          </div>
        </div>
      </section>
    </main>
  );
}
