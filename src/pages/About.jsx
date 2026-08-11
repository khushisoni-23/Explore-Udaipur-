import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
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
      rootMargin: '0px 0px -60px 0px'
    });
    
    fadeEls.forEach(el => revealObserver.observe(el));

    // Stagger animation delays for grid items
    const staggerChildren = (containerSelector, childSelector, delayStep) => {
      const containers = document.querySelectorAll(containerSelector);
      containers.forEach(container => {
        const children = container.querySelectorAll(childSelector);
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * delayStep}s`;
        });
      });
    };

    staggerChildren('.places-grid', '.place-card', 0.08);
    staggerChildren('.specials-grid', '.special-card', 0.1);
    staggerChildren('.timeline', '.tl-item', 0.12);

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <section className="about-hero" id="hero-top">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-tag">
            <span className="htag-line"></span>
            DISCOVER THE CITY OF LAKES
            <span className="htag-line"></span>
          </p>
          <h1 className="about-h1">Where Every View<br/><span className="gold">Tells a Story</span></h1>
          <p className="hero-copy">Explore the timeless beauty, royal heritage and peaceful charm of Udaipur.</p>
          <Link to="/places" className="btn-primary about-cta-btn">
            <i className="fas fa-compass"></i> Explore Udaipur
          </Link>
        </div>
        <div className="scroll-mouse-wrap">
          <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
          <span>Scroll</span>
        </div>
      </section>

      <main>
        <section className="section section-intro fade-up">
          <div className="intro-grid">
            <div className="intro-left">
              <p className="section-label">THE CITY OF LAKES</p>
              <h2 className="intro-big-heading">Welcome to<br/>Udaipur</h2>
              <div className="gold-bar"></div>
            </div>
            <div className="intro-right">
              <p className="intro-text">Set among the Aravalli hills, Udaipur is a city where shimmering lakes meet magnificent palaces, historic streets and timeless traditions. Once the capital of Mewar, the city continues to preserve a remarkable blend of royal heritage, natural beauty and living culture.</p>
              <p className="intro-text">Known as the <em>Venice of the East</em>, Udaipur enchants every visitor with its reflective waters, ornate architecture and the genuine warmth of Rajasthani hospitality.</p>
              <div className="intro-stats">
                <div className="intro-stat-item">
                  <span className="intro-stat-num">7+</span>
                  <span className="intro-stat-label">Majestic Lakes</span>
                </div>
                <div className="intro-stat-divider"></div>
                <div className="intro-stat-item">
                  <span className="intro-stat-num">1559</span>
                  <span className="intro-stat-label">Year Founded</span>
                </div>
                <div className="intro-stat-divider"></div>
                <div className="intro-stat-item">
                  <span className="intro-stat-num">500+</span>
                  <span className="intro-stat-label">Years of History</span>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-images">
            <div className="iimg iimg-tall">
              <img src="/img1.1.jpeg" alt="Udaipur lake and palace panorama" loading="lazy" />
            </div>
            <div className="iimg iimg-short">
              <img src="/img2.2.jpeg" alt="Udaipur heritage architecture" loading="lazy" />
            </div>
            <div className="iimg iimg-short iimg-offset">
              <img src="/lake.jpeg" alt="Lake Pichola Udaipur" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section section-story fade-up">
          <div className="story-header fade-up">
            <p className="section-label">MEWAR HERITAGE</p>
            <h2 className="section-h2-centered">A City Shaped by History</h2>
            <p className="story-intro-text">Founded in 1559 by Maharana Udai Singh II, Udaipur became the historic capital of the Mewar kingdom — one of the oldest and proudest royal dynasties of Rajputana.</p>
          </div>
          <div className="timeline">
            <div className="tl-item fade-up">
              <div className="tl-left">
                <div className="tl-badge">1559</div>
              </div>
              <div className="tl-connector"><div className="tl-dot"></div><div className="tl-line"></div></div>
              <div className="tl-card">
                <h3>Foundation of Udaipur</h3>
                <p>Maharana Udai Singh II established Udaipur as the new capital of Mewar beside the shimmering shores of Lake Pichola, naming the city after himself.</p>
              </div>
            </div>
            <div className="tl-item fade-up">
              <div className="tl-left">
                <div className="tl-badge">Mewar</div>
              </div>
              <div className="tl-connector"><div className="tl-dot"></div><div className="tl-line"></div></div>
              <div className="tl-card">
                <h3>Home of a Royal Legacy</h3>
                <p>The Mewar dynasty, known for its fierce independence and proud Rajput identity, built remarkable palaces, temples and forts that stand as testaments to centuries of architectural mastery.</p>
              </div>
            </div>
            <div className="tl-item fade-up">
              <div className="tl-left">
                <div className="tl-badge">Culture</div>
              </div>
              <div className="tl-connector"><div className="tl-dot"></div><div className="tl-line"></div></div>
              <div className="tl-card">
                <h3>Art, Music &amp; Tradition</h3>
                <p>From vibrant folk dances to intricate Mewar miniature paintings, Udaipur has always been a cradle of artistic tradition and living Rajasthani culture.</p>
              </div>
            </div>
            <div className="tl-item fade-up">
              <div className="tl-left">
                <div className="tl-badge">Today</div>
              </div>
              <div className="tl-connector"><div className="tl-dot"></div></div>
              <div className="tl-card">
                <h3>A Living Heritage City</h3>
                <p>Today, Udaipur seamlessly blends its royal past with modern travel. Its lakes, palaces and warm hospitality make it one of India's most beloved destinations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-specials fade-up">
          <div className="specials-header">
            <p className="section-label">WHAT MAKES UDAIPUR SPECIAL</p>
            <h2 className="section-h2-centered">Four Reasons to Fall in Love</h2>
          </div>
          <div className="specials-grid">
            <article className="special-card fade-up">
              <div className="special-num">01</div>
              <div className="special-icon"><i className="fas fa-water"></i></div>
              <h3>Lakes</h3>
              <p>Peaceful waters, sunset reflections and unforgettable views across Pichola, Fateh Sagar and beyond.</p>
              <div className="special-bar"></div>
            </article>
            <article className="special-card fade-up">
              <div className="special-num">02</div>
              <div className="special-icon"><i className="fas fa-landmark"></i></div>
              <h3>Royal Heritage</h3>
              <p>Palaces, havelis and architecture that preserve centuries of Mewar history and Rajput grandeur.</p>
              <div className="special-bar"></div>
            </article>
            <article className="special-card fade-up">
              <div className="special-num">03</div>
              <div className="special-icon"><i className="fas fa-palette"></i></div>
              <h3>Culture</h3>
              <p>Festivals, traditions, folk art, music and the genuine warmth and colour of Rajasthani life.</p>
              <div className="special-bar"></div>
            </article>
            <article className="special-card fade-up">
              <div className="special-num">04</div>
              <div className="special-icon"><i className="fas fa-route"></i></div>
              <h3>Experiences</h3>
              <p>Boat rides, heritage walks, local cuisine, vibrant markets and scenic escapes into the Aravallis.</p>
              <div className="special-bar"></div>
            </article>
          </div>
        </section>

        <section className="section section-editorial fade-up">
          <div className="editorial-wrap">
            <div className="editorial-img">
              <img src="/img4.4.png" alt="Udaipur golden sunset over the lake" loading="lazy" />
              <div className="editorial-img-overlay"></div>
            </div>
            <div className="editorial-body">
              <p className="section-label">THE UDAIPUR EXPERIENCE</p>
              <h2 className="editorial-h2">More Than a<br/>Destination</h2>
              <div className="editorial-rule"></div>
              <p className="editorial-text">From peaceful mornings beside the lakes to golden sunsets over ancient palaces, Udaipur invites you to slow down, explore deeper and create memories that stay with you.</p>
              <p className="editorial-text">Every corner of this city whispers a story — of maharanas and their courts, of artists and their craft, of lakes that mirror a sky painted in gold.</p>
              <Link to="/places" className="btn-dark-outline">
                Start Exploring <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-places fade-up">
          <div className="places-header">
            <p className="section-label">ICONIC EXPERIENCES</p>
            <h2 className="section-h2-centered">Places You Must Discover</h2>
            <p className="places-subtext">A curated selection of Udaipur's most iconic and unforgettable destinations.</p>
          </div>
          <div className="places-grid">
            <article className="place-card fade-up">
              <div className="place-img-wrap">
                <img src="https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY=" alt="Lake Pichola Udaipur" loading="lazy" />
              </div>
              <div className="place-body">
                <h3>Lake Pichola</h3>
                <p>The heart of Udaipur — iconic boat rides, sunset reflections and the soul of the city.</p>
                <Link to="/places" className="place-link">Explore <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>

            <article className="place-card fade-up">
              <div className="place-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneGp7jFSQiH2EVn03MGU5jXwAQeULvtQStNLbFeefuA&s=10" alt="City Palace Udaipur" loading="lazy" />
              </div>
              <div className="place-body">
                <h3>City Palace</h3>
                <p>A majestic fortress-palace overlooking Lake Pichola — the crown jewel of Udaipur.</p>
                <Link to="/places" className="place-link">Explore <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>

            <article className="place-card fade-up">
              <div className="place-img-wrap">
                <img src="https://s7ap1.scene7.com/is/image/incredibleindia/monsoon-palace-udaipur-rajasthan-1-attr-hero?qlt=82&ts=1742189339714" alt="Sajjangarh Monsoon Palace" loading="lazy" />
              </div>
              <div className="place-body">
                <h3>Sajjangarh Palace</h3>
                <p>The Monsoon Palace atop the Aravallis — panoramic views of lakes, hills and the city.</p>
                <Link to="/places" className="place-link">Explore <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>

            <article className="place-card fade-up">
              <div className="place-img-wrap">
                <img src="/fs.jpeg" alt="Fateh Sagar Lake" loading="lazy" />
              </div>
              <div className="place-body">
                <h3>Fateh Sagar Lake</h3>
                <p>A serene artificial lake perfect for boat rides and watching Udaipur's golden sunsets.</p>
                <Link to="/places" className="place-link">Explore <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>

            <article className="place-card fade-up">
              <div className="place-img-wrap">
                <img src="/jagdish temple udaipur.jpeg" alt="Jagdish Temple Udaipur" loading="lazy" />
              </div>
              <div className="place-body">
                <h3>Jagdish Temple</h3>
                <p>A magnificent 17th-century Vishnu temple — a masterpiece of Indo-Aryan architecture.</p>
                <Link to="/places" className="place-link">Explore <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>

            <article className="place-card fade-up">
              <div className="place-img-wrap">
                <img src="https://s7ap1.scene7.com/is/image/incredibleindia/saheliyon-ki-bari-udaipur-attr-hero-1?qlt=82&ts=1742176065434" alt="Saheliyon Ki Bari" loading="lazy" />
              </div>
              <div className="place-body">
                <h3>Saheliyon Ki Bari</h3>
                <p>The Courtyard of Maidens — a serene royal garden with marble fountains and lotus pools.</p>
                <Link to="/places" className="place-link">Explore <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-why fade-up">
          <div className="why-wrap">
            <div className="why-img-col">
              <img src="/gg.jpeg" alt="Udaipur — your gateway to the city" loading="lazy" />
              <div className="why-badge">
                <i className="fas fa-star"></i>
                <span>Your Guide</span>
              </div>
            </div>
            <div className="why-content">
              <p className="section-label">YOUR GATEWAY TO UDAIPUR</p>
              <h2 className="why-h2">Why Explore<br/>Udaipur?</h2>
              <p className="why-text">Explore Udaipur was created to make discovering the city easier, more inspiring and more personal. Whether you are visiting for the first time or returning to rediscover its charm, we bring together the places, stories and experiences that make Udaipur unforgettable.</p>
              <ul className="why-list">
                <li>
                  <span className="why-check"><i className="fas fa-check"></i></span>
                  <div>
                    <strong>Discover beautiful places</strong>
                    <p>From iconic palaces and serene lakes to hidden gems off the beaten path.</p>
                  </div>
                </li>
                <li>
                  <span className="why-check"><i className="fas fa-check"></i></span>
                  <div>
                    <strong>Experience local culture</strong>
                    <p>Dive into the art, music, cuisine and living traditions of Rajasthan.</p>
                  </div>
                </li>
                <li>
                  <span className="why-check"><i className="fas fa-check"></i></span>
                  <div>
                    <strong>Plan memorable journeys</strong>
                    <p>Curated guides and inspiration to make every visit extraordinary.</p>
                  </div>
                </li>
              </ul>
              <Link to="/places" className="btn-primary">
                <i className="fas fa-compass"></i> Start Exploring
              </Link>
            </div>
          </div>
        </section>

        <section className="section-final-cta fade-up">
          <div className="fcta-overlay"></div>
          <div className="fcta-content">
            <p className="section-label fcta-label">BEGIN YOUR JOURNEY</p>
            <h2 className="fcta-h2">Your Udaipur Story<br/><span>Starts Here.</span></h2>
            <p className="fcta-sub">Discover the places, moments and experiences waiting for you.</p>
            <div className="fcta-buttons">
              <Link to="/places" className="btn-primary fcta-primary-btn">
                <i className="fas fa-compass"></i> Explore Udaipur
              </Link>
              <Link to="/gallery" className="btn-white-outline">
                <i className="fas fa-images"></i> View Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
