import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/gallery.css';

const galleryImages = [
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.54.45_AM-5ca815dd-72e7-4001-8121-058dc19022b8.png',
    category: 'palaces',
    title: 'City Palace'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.55.03_AM-35b64acb-0653-49c8-8a90-9cf4f59865e4.png',
    category: 'lakes',
    title: 'Lake Pichola'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.56.47_AM-699986cb-562e-49e9-81b7-bc892feca5b1.png',
    category: 'temples',
    title: 'Jagdish Temple'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.59.00_AM-a540c65a-325d-4cc1-b07e-90b2035042af.png',
    category: 'heritage',
    title: 'Heritage Walk'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_11.37.55_AM-d3f9a479-9cce-4461-8a2d-3c780abc336b.png',
    category: 'nature',
    title: 'Monsoon Palace'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_11.38.29_AM-cc511671-be58-4a3e-9009-c1ba42802d66.png',
    category: 'sunset',
    title: 'Sunset View'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_11.38.54_AM-c7c0fcc7-ed6b-4fe8-a92a-67cdea2b88d4.png',
    category: 'palaces',
    title: 'Lake Palace'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_11.39.19_AM-ee61fc9a-8839-459b-8b0e-8d1caa297cae.png',
    category: 'lakes',
    title: 'Fateh Sagar'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_11.40.00_AM-2732dadd-546d-4d4f-b935-0521284ae427.png',
    category: 'temples',
    title: 'Eklingji Temple'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_11.40.19_AM-51e89389-60bf-497b-9b3d-adb6914711d8.png',
    category: 'heritage',
    title: 'Old City'
  },
  {
    src: '/gallery-images/image-0c76ff67-5b46-429b-8cf9-7cc91acc36cd.png',
    category: 'nature',
    title: 'Sajjangarh'
  },
  {
    src: '/gallery-images/image-0ed2645e-1f8e-4360-a51d-007a74ce68d2.png',
    category: 'sunset',
    title: 'Golden Hour'
  },
  {
    src: '/gallery-images/image-268461e8-72a4-44cd-945f-1e4d23d964e8.png',
    category: 'palaces',
    title: 'City Palace View'
  },
  {
    src: '/gallery-images/image-2b4ac175-b0e8-40fe-b741-47b1a5284839.png',
    category: 'lakes',
    title: 'Boat Ride'
  },
  {
    src: '/gallery-images/image-626b7bf8-c058-440d-9f35-71b2fb654a6b.png',
    category: 'temples',
    title: 'Temple Architecture'
  },
  {
    src: '/gallery-images/image-6637ddef-d517-4a32-a67c-d8d6b37b1419.png',
    category: 'heritage',
    title: 'Haveli'
  },
  {
    src: '/gallery-images/image-9c5a36a9-32da-454e-a1e2-bb5ce10944c6.png',
    category: 'nature',
    title: 'Greenery'
  },
  {
    src: '/gallery-images/image-aa353224-7d44-4072-b36e-284673567431.png',
    category: 'sunset',
    title: 'Lake Sunset'
  },
  {
    src: '/gallery-images/image-babda508-5d8b-4e4f-af7a-d73c5d83fb27.png',
    category: 'palaces',
    title: 'Palace Detail'
  },
  {
    src: '/gallery-images/image-cb894b6a-45d5-4c56-9f6e-7a559cf4ba11.png',
    category: 'lakes',
    title: 'Lake Reflection'
  },
  {
    src: '/gallery-images/image-eb41340b-22eb-4ffa-9fa0-681134792fd1.png',
    category: 'temples',
    title: 'Sacred Temple'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.14.32_AM-fb299a29-a20d-4098-8dc9-31fb493c45bb.png',
    category: 'heritage',
    title: 'Street View'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.14.52_AM-6ecf817c-c735-48b9-9a43-5abd0f2d0f9d.png',
    category: 'nature',
    title: 'Hill View'
  },
  {
    src: '/gallery-images/WhatsApp_Image_2026-08-01_at_10.56.47_AM-699986cb-562e-49e9-81b7-bc892feca5b1.png',
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
