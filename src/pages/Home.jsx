import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    // Floating particles
    const container = document.getElementById("particles-container");
    if (container && container.children.length === 0) {
      const count = 18;
      for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "particle";

        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 15 + 12;

        p.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${left}%;
          bottom: -20px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          opacity: 0;
        `;

        container.appendChild(p);
      }
    }

    // Counter animation
    const animateCount = (el, target, suffix = '') => {
      let start = 0;
      const duration = 2000;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const statNums = document.querySelectorAll(".stat-num");
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent;
          if (text.includes("7")) animateCount(el, 7, "+");
          if (text.includes("500")) animateCount(el, 500, "+");
          statsObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => statsObserver.observe(el));

    // Scroll reveal (lightweight)
    const revealElements = document.querySelectorAll(".highlight-card, .explore-card");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.08}s`;
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      revealObserver.observe(el);
    });

    // Inject CSS for revealed state if not already there
    if (!document.getElementById("reveal-style")) {
      const style = document.createElement("style");
      style.id = "reveal-style";
      style.textContent = `
        .revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.7s ease, transform 0.7s ease !important;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      statsObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  // Handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsVideoModalOpen(false);
    };
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoModalOpen]);

  return (
    <>
      <div id="particles-container"></div>

      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-decor decor-top-left"></div>
        <div className="hero-decor decor-top-right"></div>
        <div className="hero-decor decor-bottom-left"></div>
        <div className="hero-decor decor-bottom-right"></div>

        <div className="hero-content">
          <p className="hero-tagline"><i className="fas fa-crown"></i>&nbsp; The Royal City of Lakes &nbsp;<i className="fas fa-crown"></i></p>
          <h1 className="hero-title">EXPLORE<span className="hero-title-gold"> UDAIPUR</span></h1>
          <p className="hero-subtitle">Where royal heritage meets natural beauty</p>
          <p className="hero-desc">Discover the charm, culture and eternal calmness of <em>Udaipur</em> — the Venice of the East.</p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">7+</span>
              <span className="stat-label">Majestic Lakes</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">Years of History</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">∞</span>
              <span className="stat-label">Memories to Make</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/places" className="btn-primary">
              <i className="fas fa-compass"></i> Explore Places
            </Link>
            <button className="btn-secondary" id="watchBtn" onClick={() => setIsVideoModalOpen(true)}>
              <i className="fas fa-play"></i> Watch Video
            </button>
          </div>

          <div className="scroll-indicator">
            <span>Scroll to Discover</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div id="videoModal" className="modal open" onClick={(e) => {
          if (e.target.className.includes("modal")) setIsVideoModalOpen(false);
        }}>
          <div className="modal-content">
            <span className="close" id="closeModal" onClick={() => setIsVideoModalOpen(false)}>&times;</span>
            <iframe id="videoFrame"
              src="https://www.youtube.com/embed/dvWbJvNrM1U"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
