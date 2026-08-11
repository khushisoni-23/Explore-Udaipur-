import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo"><span>Explore</span> Udaipur</Link>
          <p>A royal journey through the City of Lakes — where history, nature and culture blend into an unforgettable experience.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/places"><i className="fas fa-chevron-right"></i> Places</Link></li>
            <li><Link to="/food"><i className="fas fa-chevron-right"></i> Food &amp; Cuisine</Link></li>
            <li><Link to="/culture"><i className="fas fa-chevron-right"></i> Culture</Link></li>
            <li><Link to="/hidden-gems"><i className="fas fa-chevron-right"></i> Hidden Gems</Link></li>
            <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p><i className="fas fa-map-marker-alt"></i> Udaipur, Rajasthan, India</p>
          <p><i className="fas fa-envelope"></i> hello@exploreudaipur.in</p>
          <p><i className="fas fa-phone"></i> +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with <span className="heart">&#10084;</span> by <strong>Khushi</strong> &nbsp;|&nbsp; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
