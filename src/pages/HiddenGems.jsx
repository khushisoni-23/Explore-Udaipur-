import React, { useEffect } from 'react';
import '../styles/gems.css';

const HiddenGems = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, entry.target.dataset.delay || 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.gem-card').forEach((card, i) => {
      card.dataset.delay = i * 80;
      card.style.transition = `opacity 0.65s ease ${i * 0.07}s, transform 0.65s ease ${i * 0.07}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero gems-hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-script">~ Beyond the Tourist Trail ~</span>
          <h1 className="hero-title">Hidden Gems of Udaipur</h1>
          <div className="divider-container">
            <span className="gold-line"></span>
            <span className="hero-subtitle">Secret Spots &amp; Offbeat Treasures of Mewar</span>
            <span className="gold-line"></span>
          </div>
          <a href="#gems" className="badge-button" onClick={(e) => scrollToSection('gems', e)}>
            <span className="badge-star">&#10022;</span>
            EXPLORE NOW
            <span className="badge-star">&#10022;</span>
          </a>
        </div>
      </section>

      <section style={{ padding: '60px 5%' }}>
        <div className="intro-banner-section">
          <div className="intro-banner">
            <h2>Udaipur's Best-Kept Secrets</h2>
            <p>While the City Palace and Lake Pichola enchant millions, Udaipur holds dozens of lesser-known wonders waiting to be discovered. From ancient hilltop forts and serene lakes to spiritual temples and artisan villages — these hidden gems reveal the true, unhurried soul of Mewar.</p>
          </div>
        </div>
      </section>

      <section id="gems" className="gems-section">
        <div className="section-header">
          <span className="section-subtitle">Off the Beaten Path</span>
          <h2 className="section-title">Hidden Treasures to Explore</h2>
          <div className="header-divider"></div>
        </div>

        <div className="gems-grid">
          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Offbeat</span>
              <img src="/img1.1.jpeg" alt="Alsigarh" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Alsigarh</h3>
              <p className="card-desc">A peaceful hilltop retreat rarely visited by tourists, offering panoramic views of surrounding lakes and the Aravalli ranges. The ruins of a small fort at the summit add a layer of history to the natural beauty. Perfect for sunrise walks and quiet photography sessions away from city crowds.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Alsigarh Village, approx. 8 km from Udaipur City
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Scenic Viewpoint</span>
              <img src="https://rawlasarkar.com/wp-content/uploads/2025/07/Bahubali-Hills-Udaipur-2.jpeg" alt="Bahubali Hills" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Bahubali Hills</h3>
              <p className="card-desc">Named after the iconic Bahubali film, this hilltop offers one of the most stunning 360° views of Udaipur — with Fateh Sagar Lake and the city skyline spread before you like a painting. The steep climb through rocky terrain is an adventure in itself. Best visited at sunset for golden-hour magic.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Near Fateh Sagar Lake, North Udaipur
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Spiritual</span>
              <img src="/img2.2.jpeg" alt="Pipliaji" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Pipliaji</h3>
              <p className="card-desc">A tranquil spiritual retreat nestled amidst lush greenery on the outskirts of Udaipur, known for its ancient temple and serene natural surroundings. The atmosphere is calm and meditative, drawing devotees and nature lovers alike. A simple yet deeply peaceful place that feels far removed from the urban buzz.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Pipliaji, approx. 12 km from Udaipur City
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Cultural Village</span>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/e5/1e/a-chariot-at-shilpgram.jpg?w=1200&h=1200&s=1" alt="Shilpgram" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Shilpgram</h3>
              <p className="card-desc">A beautifully curated crafts village on the western shore of Fateh Sagar Lake that celebrates the folk culture, architecture, and art of western India. Artisans from Rajasthan, Gujarat, Goa, and Maharashtra live and work here, offering a rare glimpse of traditional craftsmanship. The annual Shilpgram Utsav in December is a must-attend cultural extravaganza.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Havala Village Road, Fateh Sagar, Udaipur
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Hidden Lake</span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeXQySX1UHHoRFb-1ImJLxkdQGYYcWxMJILZHVd9hwJ21xmPyYIGOKJA&s=10" alt="Badi Lake" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Badi Lake (Jiyan Sagar)</h3>
              <p className="card-desc">A serene, man-made freshwater lake built in the 17th century by Maharana Raj Singh as a famine-relief project for the local community. Surrounded by the green Aravalli hills, it feels like a hidden paradise with barely any tourist footfall. The reflection of the hills on still water at dawn is simply breathtaking. Birdwatchers and picnickers adore this tranquil spot.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Badi Village, approx. 12 km from Udaipur on NH-76
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Trekking</span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATvx8Nbh65VGIGn52EgsjRtM96S8uEfKKgjf8WQ7KzunIa5M6zfx6a9jR&s=10" alt="Rayta Hills" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Rayta Hills</h3>
              <p className="card-desc">An offbeat mountain destination 19–25 km from Udaipur, beloved by local hikers and adventurers who know the real Mewar. The undulating Aravalli ridgelines offer excellent trekking trails with stunning valley views and zero crowds. Camping under the stars here is an experience that city tourists almost never discover.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Rayta Village, approx. 22 km from Udaipur
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">Wildlife</span>
              <img src="https://indianwanderers.wordpress.com/wp-content/uploads/2015/09/sajjangarh-wildlife-sanctuary.jpg" alt="Sajjangarh Wildlife Sanctuary" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Sajjangarh Wildlife Sanctuary</h3>
              <p className="card-desc">Spread across 5.19 sq km at the base of the Monsoon Palace hill, this sanctuary is home to leopards, wild boars, nilgai, jungle cats, and over 120 bird species. Few visitors realise that the forest surrounding the palace is a protected biodiversity zone teeming with life. A safari or nature walk here rewards you with sightings that rival far larger parks.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Bansdara, Sajjangarh, Udaipur – 313001
              </div>
            </div>
          </div>

          <div className="gem-card">
            <div className="card-img-wrap">
              <span className="gem-badge">History</span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTfA4wiP_PwuD6VBBxxObVllFzk3K3eVKiOl15HacSQ6XL42jwiFj7sY&s=10" alt="Ahar Museum" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Ahar Cenotaphs &amp; Museum</h3>
              <p className="card-desc">Just 3 km from the city centre lies Ahar, the ancient royal cremation ground of the Mewar dynasty featuring over 250 marble cenotaphs (chhatris) of Maharanas dating back 400 years. The adjacent Ahar Museum houses 5,000-year-old Chalcolithic pottery, coins, and sculptures rarely seen in books. This place is deeply moving, hauntingly beautiful, and almost always empty of tourists.</p>
              <div className="gem-location">
                <i className="fa-solid fa-location-dot"></i>
                Ahar, approx. 3 km east of Udaipur City Palace
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HiddenGems;
