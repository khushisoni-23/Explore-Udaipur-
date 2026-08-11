import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileNavRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileNavOpen) return;

    const handleClickOutside = (event) => {
      const nav = mobileNavRef.current;
      const hamburger = hamburgerRef.current;
      if (nav && !nav.contains(event.target) && hamburger && !hamburger.contains(event.target)) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileNavOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Places', path: '/places' },
    { name: 'Food & Cuisine', path: '/food' },
    { name: 'Culture', path: '/culture' },
    { name: 'Hidden Gems', path: '/hidden-gems' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header id="mainHeader" className={isScrolled ? 'scrolled' : ''}>
        <Link to="/" className="logo"><span>Explore</span> Udaipur</Link>
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/places#plan" className="nav-btn">Plan Your Trip</Link>
        <div className="hamburger" id="hamburger" ref={hamburgerRef} onClick={() => setIsMobileNavOpen(prev => !prev)} aria-label="Toggle navigation" aria-expanded={isMobileNavOpen}>
          <i className="fas fa-bars"></i>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`} id="mobileNav" ref={mobileNavRef}>
        <span className="close-mobile" id="closeMobile" onClick={() => setIsMobileNavOpen(false)}>
          <i className="fas fa-times"></i>
        </span>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li><Link to="/places#plan" className="nav-btn-mobile" onClick={() => setIsMobileNavOpen(false)}>Plan Your Trip</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
