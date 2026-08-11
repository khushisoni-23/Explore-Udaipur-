import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [openFaqs, setOpenFaqs] = useState([]);
  const [revealedFaqs, setRevealedFaqs] = useState([]);
  const [formStatus, setFormStatus] = useState({ state: '', message: '' });

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-up');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    
    fadeEls.forEach(el => revealObserver.observe(el));

    const staggerChildren = (containerSelector, childSelector, delayStep) => {
      const containers = document.querySelectorAll(containerSelector);
      containers.forEach(container => {
        const children = container.querySelectorAll(childSelector);
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * delayStep}s`;
        });
      });
    };

    staggerChildren('.details-grid', '.detail-card', 0.1);
    staggerChildren('.faq-accordion', '.faq-item', 0.08);

    return () => revealObserver.disconnect();
  }, []);

  const handleFaqClick = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
    );
    setRevealedFaqs((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ state: 'sending', message: 'Sending...' });
    
    setTimeout(() => {
      setFormStatus({ state: 'success', message: 'Thank you! Your message has been sent successfully.' });
      e.target.reset();
      
      setTimeout(() => {
        setFormStatus({ state: '', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-tag">
            <span className="htag-line"></span>
            WE ARE HERE TO HELP
            <span className="htag-line"></span>
          </p>
          <h1 className="contact-h1">Get in <span className="gold">Touch</span></h1>
          <p className="hero-copy">Have questions about your Udaipur trip? Need recommendations? Reach out to us.</p>
        </div>
      </section>

      <main>
        <section className="section section-details fade-up">
          <div className="details-grid">
            <article className="detail-card fade-up">
              <div className="detail-icon"><i className="fas fa-map-marker-alt"></i></div>
              <h3>Visit Us</h3>
              <p>City Palace Complex, Lake Pichola<br/>Udaipur, Rajasthan 313001<br/>India</p>
              <div className="detail-bar"></div>
            </article>
            
            <article className="detail-card fade-up">
              <div className="detail-icon"><i className="fas fa-envelope"></i></div>
              <h3>Email Us</h3>
              <p><a href="mailto:hello@exploreudaipur.in">hello@exploreudaipur.in</a><br/><a href="mailto:support@exploreudaipur.in">support@exploreudaipur.in</a></p>
              <div className="detail-bar"></div>
            </article>
            
            <article className="detail-card fade-up">
              <div className="detail-icon"><i className="fas fa-phone-alt" style={{ transform: 'scaleX(-1)' }}></i></div>
              <h3>Call Us</h3>
              <p><a href="tel:+919876543210">+91 98765 43210</a><br/><a href="tel:+912942410219">0294-2410219 (Tourist Info)</a></p>
              <div className="detail-bar"></div>
            </article>
          </div>
        </section>

        <section className="section section-contact fade-up">
          <div className="contact-container">
            
            <div className="contact-form-col">
              <div className="form-header">
                <p className="section-label">SEND A MESSAGE</p>
                <h2 className="form-h2">We'd love to hear from you.</h2>
                <p className="form-subtext">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <form id="contactForm" className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <div className="select-wrapper">
                    <select id="subject" name="subject" required defaultValue="">
                      <option value="" disabled>Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="planning">Trip Planning Help</option>
                      <option value="feedback">Website Feedback</option>
                      <option value="partnership">Partnerships</option>
                    </select>
                    <i className="fas fa-chevron-down select-icon"></i>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn" 
                  disabled={formStatus.state === 'sending'}
                  style={{ opacity: formStatus.state === 'sending' ? 0.8 : 1 }}
                >
                  {formStatus.state === 'sending' ? (
                    <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane"></i> Send Message</>
                  )}
                </button>
                
                {formStatus.message && (
                  <div className={`form-status ${formStatus.state === 'success' ? 'success' : ''}`}>
                    {formStatus.state === 'success' ? formStatus.message : ''}
                  </div>
                )}
              </form>
            </div>
            
            <div className="contact-map-col">
              <div className="map-wrapper">
                <iframe src="https://maps.google.com/maps?q=Udaipur,%20Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of Udaipur"></iframe>
              </div>
            </div>
            
          </div>
        </section>

        <section className="section section-faq fade-up">
          <div className="faq-header">
            <p className="section-label">COMMON QUESTIONS</p>
            <h2 className="section-h2-centered">Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-accordion">
            {[
              { q: 'What is the best time to visit Udaipur?', a: 'The best time to visit Udaipur is during the winter months, from October to March. The weather is pleasant and comfortable for sightseeing. September is also a great time if you want to see the lakes full after the monsoon season.' },
              { q: 'Do I need an inner line permit to visit Udaipur?', a: 'No, neither Indian nationals nor foreign tourists require any special inner line permits to visit Udaipur. Standard visas apply for international travelers arriving in India.' },
              { q: 'How many days are sufficient for a Udaipur trip?', a: 'A minimum of 3 to 4 days is recommended to comfortably explore the major palaces, lakes, temples, and enjoy local experiences like a boat ride on Lake Pichola and the Bagore Ki Haveli cultural show.' },
              { q: 'Is Udaipur safe for solo travelers?', a: 'Yes, Udaipur is generally considered very safe for solo travelers, including women. The locals are welcoming and tourist-friendly, though standard travel precautions should always be taken.' }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item fade-up ${openFaqs.includes(idx) ? 'active' : ''} ${revealedFaqs.includes(idx) ? 'revealed' : ''}`}>
                <div className="faq-question" onClick={() => handleFaqClick(idx)}>
                  <h3>{faq.q}</h3>
                  <span className="faq-icon"><i className="fas fa-chevron-down"></i></span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;
