import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/culture.css';

const Culture = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
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

    const elements = document.querySelectorAll('.culture-card, .festival-item, .icon-item');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero culture-hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-script">~ The Soul of Mewar ~</span>
          <h1 className="hero-title">Explore the Culture of Udaipur</h1>
          <div className="divider-container">
            <span className="gold-line"></span>
            <span className="hero-subtitle">Heritage · Traditions · Art · Royal Legacy</span>
            <span className="gold-line"></span>
          </div>
          <a href="#arts" className="badge-button" onClick={(e) => scrollToSection('arts', e)}>
            <span className="badge-star">&#10022;</span>
            EXPLORE OUR CULTURE
            <span className="badge-star">&#10022;</span>
          </a>
        </div>
      </section>

      <section id="arts">
        <div className="section-header">
          <span className="section-subtitle">A Living Legacy</span>
          <h2 className="section-title">Traditional Arts &amp; Crafts</h2>
          <div className="header-divider"></div>
        </div>

        <div className="cards-grid">
          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQm08aKTvItep0cxJX1O3aj5_2QtTcIOpGgA&s" alt="Miniature Paintings" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Miniature Paintings</h3>
              <p className="card-desc">Intricate, jewel-toned artworks that capture regal stories and epic tales from Mewar's royal courts.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47RO6Yhg2EUJ5n_9RsudqSOvZNbslw6ATVQ&s" alt="Handicrafts" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Handicrafts</h3>
              <p className="card-desc">Beautifully crafted souvenirs, woodwork, and embroidered textiles made by the skilled local artisans of Udaipur.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://c9admin.cottage9.com/uploads/2323/unnamed-6.jpg" alt="Pottery" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Pottery</h3>
              <p className="card-desc">Traditional terracotta and blue pottery connecting generations to the earthy, ancient roots of Rajasthan.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="traditional attire.png" alt="Traditional Attire" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Traditional Attire</h3>
              <p className="card-desc">Vibrant lehengas, bandhani prints, and royal turbans reflecting the grandeur and pride of Mewari culture.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="dances" style={{ background: '#f5f0e8' }}>
        <div className="section-header">
          <span className="section-subtitle">Rhythm &amp; Grace</span>
          <h2 className="section-title">Folk Dances of Rajasthan</h2>
          <div className="header-divider"></div>
        </div>

        <div className="cards-grid-3">
          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://media.themirrority.com/uploads/article/thumbnail_1/115.jpg" alt="Ghoomar" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Ghoomar</h3>
              <p className="card-desc">The most iconic dance of Rajasthan — a graceful, swirling performance in vibrant ghagras, symbolising feminine joy and festivity.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://media.assettype.com/outlooktraveller/import/public/uploads/filemanager/images/Kalbeliyas-2_632d572a9c7e0.jpg" alt="Kalbeliya" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Kalbeliya</h3>
              <p className="card-desc">A mesmerising, UNESCO-recognised dance form performed by the Kalbeliya community, full of energy and serpentine movements.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://i.pinimg.com/736x/d5/74/be/d574be3ed03dbb590aad5101c9d3afde.jpg" alt="Bhavai" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Bhavai</h3>
              <p className="card-desc">A breathtaking dance of skill and balance where performers spin with stacked earthen pots on their heads.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="festivals" className="festivals-section">
        <div className="section-header">
          <span className="section-subtitle">Celebrations &amp; Colours</span>
          <h2 className="section-title">Festivals of Mewar</h2>
          <div className="header-divider"></div>
        </div>

        <div className="festivals-inner">
          <div className="festival-list">
            <div className="festival-item">
              <div className="festival-img-wrap">
                <img src="https://cdn1.tripoto.com/media/filter/tst/img/2052077/Image/1679215453_udaipur_mewar_festival.jpg" alt="Mewar Festival" loading="lazy" />
              </div>
              <div className="festival-info">
                <div className="festival-name">Mewar Festival</div>
                <p className="festival-desc">A grand celebration welcoming spring, featuring colourful processions, folk performances, and fireworks over Lake Pichola.</p>
              </div>
            </div>

            <div className="festival-item">
              <div className="festival-img-wrap">
                <img src="https://i.pinimg.com/736x/4f/7e/ff/4f7eff8c28f54a2ec0266b4be938e7e8.jpg" alt="Gangaur Festival" loading="lazy" />
              </div>
              <div className="festival-info">
                <div className="festival-name">Gangaur Festival</div>
                <p className="festival-desc">Dedicated to Goddess Gauri — women carry beautifully adorned idols through the old city in a royal procession.</p>
              </div>
            </div>

            <div className="festival-item">
              <div className="festival-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPPIl0HdSWtYYJ59I6sn-zKJbKyfUcG8ieQ&s" alt="Diwali" loading="lazy" />
              </div>
              <div className="festival-info">
                <div className="festival-name">Diwali</div>
                <p className="festival-desc">The festival of lights illuminates Udaipur's palaces and lakes, creating a magical mirror of fire and reflection.</p>
              </div>
            </div>

            <div className="festival-item">
              <div className="festival-img-wrap">
                <img src="https://shilpgram.in/Images/Shilpgram-Festival-2025-thum/Shilpgram-Festival-2025-Day-02-Photos-08.jpg" alt="Shilpgram Festival" loading="lazy" />
              </div>
              <div className="festival-info">
                <div className="festival-name">Shilpgram Festival</div>
                <p className="festival-desc">A vibrant showcase of rural arts and crafts where artisans from across Rajasthan display their finest work.</p>
              </div>
            </div>

            <div className="festival-item">
              <div className="festival-img-wrap">
                <img src="https://www.pateltoursntravels.com/blog/wp-content/uploads/2025/02/Holi-Celebration-Udaipur.webp" alt="Holi" loading="lazy" />
              </div>
              <div className="festival-info">
                <div className="festival-name">Holi</div>
                <p className="festival-desc">Festival of colours celebrated with extraordinary enthusiasm — royal families play Holi in the traditional Mewari style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" style={{ background: '#f5f0e8' }}>
        <div className="section-header">
          <span className="section-subtitle">Immersive Journeys</span>
          <h2 className="section-title">Cultural Experiences</h2>
          <div className="header-divider"></div>
        </div>

        <div className="cards-grid">
          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoPNCUHooP-5UMydwcgg2UrF1GL1RnNFfkg&s" alt="Heritage Walk" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Heritage Walks</h3>
              <p className="card-desc">Discover hidden monuments, ornate havelis, and centuries-old markets with expert guided heritage walks.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7MJRwxI6VdV3BKR4jZJgh8vhAKTBZRQv_w&s" alt="Folk Music" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Folk Music Night</h3>
              <p className="card-desc">Enjoy soulful Mewari music — sarangi, dhol, and khartal — performed under a starlit sky by local folk artists.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQja6Maq665RKfViN2YFmzfKAuOAeasVvKc5Q&s" alt="Traditional Dining" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Traditional Dining</h3>
              <p className="card-desc">Savour authentic Mewari cuisine served in heritage palaces — an unforgettable royal dining experience.</p>
            </div>
          </div>

          <div className="culture-card">
            <div className="card-img-wrap">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSet2eTfo3p11OKvzrFUlOU7o2bZBzqLXhUUA&s" alt="Art Workshop" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Art &amp; Craft Workshops</h3>
              <p className="card-desc">Learn miniature painting, block printing, and pottery directly from master artisans in hands-on workshops.</p>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <Link to="/places" className="action-btn">
            Explore All Experiences <span className="btn-arrow">&rarr;</span>
          </Link>
        </div>
      </section>

      <section id="importance" className="culture-banner-section">
        <div className="culture-banner">
          <h2>Why Culture Matters?</h2>
          <p>Udaipur's culture is a living heritage that inspires and unites generations. By preserving its traditions, arts, and royal legacy, we keep the timeless soul of Mewar alive for the world to experience and cherish.</p>
          <div className="icons-row">
            <div className="icon-item">
              <span className="icon-emoji">🌿</span>
              <span className="icon-label">Preserves Heritage</span>
            </div>
            <div className="icon-item">
              <span className="icon-emoji">🪔</span>
              <span className="icon-label">Strengthens Identity</span>
            </div>
            <div className="icon-item">
              <span className="icon-emoji">👨‍👩‍👧</span>
              <span className="icon-label">Inspires Generations</span>
            </div>
            <div className="icon-item">
              <span className="icon-emoji">🏰</span>
              <span className="icon-label">Keeps Legacy Alive</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;
