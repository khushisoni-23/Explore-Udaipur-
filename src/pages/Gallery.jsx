import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/gallery.css';

const galleryImages = [
  {
    src: 'udr.1.jpeg',
    category: 'palaces',
  },
  {
    src: '/udr.2.jpeg',
    category: 'lakes',
   
  },
  {
    src: '/jagdish temple udaipur.jpeg',
    category: 'temples',
    title: 'Jagdish Temple'
  },
  {
    src: 'udr.3.jpeg',
    category: 'heritage',
    title: 'Heritage Walk'
  },
 
  {
    src: '/gallery-custom-5.jpg',
    category: 'sunset',
    title: 'Sunset View'
  },
  {
    src:'udr.4.jpeg',
    category: 'palaces',
    title: 'Lake Palace'
  },
  {
    src: '/gallery-custom-7.jpg',
    category: 'lakes',
    title: 'Fateh Sagar'
  },
  {
    src: 'udr.6.jpeg',
    category: 'temples',
    title: 'Eklingji Temple'
  },
  {
    src: '/img2.2.jpeg',
    category: 'heritage',
    title: 'Old City'
  },
  {
    src: 'udr.7.jpeg',
    category: 'nature',
    title: 'Sajjangarh'
  },
  {
    src: 'udr.8.jpeg',
    category: 'sunset',
    title: 'Golden Hour'
  },
  {
    src: '/img1.1.jpeg',
    category: 'palaces',
    title: 'City Palace View'
  },
  {
    src: '/lake.jpeg',
    category: 'lakes',
    title: 'Boat Ride'
  },
  {
    src: '/udr.9.jpeg',
    category: 'temples',
    title: 'Temple Architecture'
  },
  {
    src: 'udr.10.jpeg',
    category: 'heritage',
    title: 'Haveli'
  },
  {
    src: 'udr.11.jpeg',
    category: 'nature',
    title: 'Greenery'
  },
  {
    src: '/gallery-custom-17.jpg',
    category: 'sunset',
    title: 'Lake Sunset'
  },
  {
    src: 'udr.13.jpeg',
    category: 'palaces',
    title: 'Palace Detail'
  },
  {
    src: 'udr.14.jpeg',
    category: 'lakes',
    title: 'Lake Reflection'
  },
  {
    src: 'udr.20.jpeg',
    category: 'temples',
    title: 'Sacred Temple'
  },
  {
    src: 'udr.16.jpeg',
    category: 'heritage',
    title: 'Street View'
  },
  {
    src: 'udr.17.jpeg',
    category: 'nature',
    title: 'Hill View'
  },
  {
    src: 'udr.18.jpeg ',
    category: 'sunset',
    title: 'Evening Glow'
  }
];

const Gallery = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const filteredImages = currentFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentFilter);

  useEffect(() => {
    // Fade-in on scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [currentFilter]);

  // Lightbox keydown handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'ArrowRight') showNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxIndex]);

  const showPrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const showNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  return (
    <>
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Gallery</h1>
          <p className="hero-subtitle">Discover the timeless beauty of Udaipur through unforgettable moments.</p>
          <div className="gold-divider"></div>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-container">
          {['all', 'palaces', 'lakes', 'temples', 'heritage', 'nature', 'sunset'].map(filter => (
            <button 
              key={filter}
              className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
              onClick={() => setCurrentFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="masonry-gallery" id="masonryGallery">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setLightboxIndex(index)}
            >
              <img src={image.src} alt={image.title} loading="lazy" />
              <div className="gallery-overlay">
                <i className="fas fa-eye"></i>
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={`lightbox ${lightboxIndex !== null ? 'active' : ''}`} id="lightbox" onClick={(e) => {
        if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-overlay')) {
          setLightboxIndex(null);
        }
      }}>
        <div className="lightbox-overlay"></div>
        <button className="lightbox-close" onClick={() => setLightboxIndex(null)}><i className="fas fa-times"></i></button>
        <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrevImage(); }}><i className="fas fa-chevron-left"></i></button>
        <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); showNextImage(); }}><i className="fas fa-chevron-right"></i></button>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          {lightboxIndex !== null && (
            <>
              <img src={filteredImages[lightboxIndex].src} alt={filteredImages[lightboxIndex].title} className="lightbox-image" />
              <div className="lightbox-info">
                <i className="fas fa-eye"></i>
                <span>View</span>
              </div>
            </>
          )}
        </div>
      </div>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Capture Memories That Last a Lifetime</h2>
          <p className="cta-text">Explore the royal beauty of Udaipur and create unforgettable experiences.</p>
          <Link to="/places#plan" className="cta-button">Plan Your Journey</Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;
