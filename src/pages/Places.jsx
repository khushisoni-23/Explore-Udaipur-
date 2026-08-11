import React, { useState, useEffect } from 'react';
import '../styles/places.css';

const placesData = [
  {
    id: 1,
    title: "City Palace",
    category: "palaces",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A majestic blend of Rajasthani & Mughal architecture overlooking Lake Pichola.",
    fullDescription: "The City Palace complex is a majestic architectural marvel located on the east bank of Lake Pichola. It is a stunning fusion of Rajasthani and Mughal architectural styles, housing multiple palaces, courtyards, pavilions, terraces, corridors, and gardens. The museum displays rich royal artifacts, historical weapons, paintings, and offers breathtaking views of the city and lake.",
    timings: "9:30 AM – 5:30 PM (All days)",
    entryFee: "₹300 (Adults), ₹100 (Children), ₹250 (Camera)",
    bestTime: "October to March (Sunset is particularly gorgeous)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneGp7jFSQiH2EVn03MGU5jXwAQeULvtQStNLbFeefuA&s=10"
  },
  {
    id: 2,
    title: "Lake Pichola",
    category: "lakes",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "The heart of Udaipur. Enjoy boat rides and mesmerizing views.",
    fullDescription: "Lake Pichola is an iconic, picturesque freshwater lake created in the 14th century. Surrounded by majestic hills, magnificent palaces, bathing ghats, and temples, it is the center of Udaipur's tourism. A scenic boat ride during sunset offers an unforgettable experience as the water reflects the golden rays and the illuminated monuments.",
    timings: "9:00 AM – 6:00 PM (Boat rides close early)",
    entryFee: "Free Entry (Boat rides range from ₹400 to ₹800)",
    bestTime: "Late afternoon for the sunset boat cruise",
    image: "https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY="
  },
  {
    id: 3,
    title: "Sajjangarh Monsoon Palace",
    category: "palaces",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A royal retreat with panoramic views of lakes, hills and the beautiful city.",
    fullDescription: "Perched high on the Bansdara peak of the Aravalli hills, Sajjangarh Monsoon Palace is a hilltop palatial residence. Built by Maharana Sajjan Singh in 1884, it offers panoramic views of Udaipur's lakes, palaces, and the surrounding countryside. It was constructed chiefly to watch the monsoon clouds and remains one of the best spots to catch the sunset.",
    timings: "9:00 AM – 6:00 PM",
    entryFee: "₹150 for Indians, ₹300 for Foreigners (Extra vehicle fees apply)",
    bestTime: "5:00 PM to 6:30 PM to view the sunset",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/monsoon-palace-udaipur-rajasthan-1-attr-hero?qlt=82&ts=1742189339714"
  },
  {
    id: 4,
    title: "Jag Mandir",
    category: "palaces",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A historic island palace on Lake Pichola with stunning architecture.",
    fullDescription: "Jag Mandir is an exquisite 17th-century palace built on an island in Lake Pichola. Also known as the 'Lake Garden Palace', its construction was completed by Maharana Jagat Singh I. It has served as a summer resort and royal asylum. The stunning yellow sandstone structure features impressive life-sized stone elephants, elegant domes, and a beautiful garden courtyard.",
    timings: "10:00 AM – 6:00 PM",
    entryFee: "Requires boat ticket to reach (approx. ₹450 to ₹700, includes entry)",
    bestTime: "Afternoon to evening",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/jag-mandir-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1742192950693"
  },
  {
    id: 5,
    title: "Saheliyon Ki Bari",
    category: "gardens",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A beautiful garden built for the royal ladies, filled with fountains & flowers.",
    fullDescription: "Saheliyon-ki-Bari (Courtyard of the Maidens) is a majestic heritage garden built by Maharana Sangram Singh in the 18th century. Designed as a relaxing retreat for the royal ladies and their companions, it features marble fountains, lotus pools, kiosks, stone elephants, and lush green lawns. The fountains operate entirely by water pressure from the Fateh Sagar Lake without any pumps.",
    timings: "9:00 AM – 7:00 PM",
    entryFee: "₹50 for Indians, ₹100 for Foreigners",
    bestTime: "Morning or late afternoon when fountains are running",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/saheliyon-ki-bari-udaipur-attr-hero-1?qlt=82&ts=1742176065434"
  },
  {
    id: 6,
    title: "Eklingji Temple",
    category: "temples",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A magnificent temple dedicated to Lord Shiva, rich in history & spirituality.",
    fullDescription: "Located 22 km north of Udaipur, Eklingji Temple is a highly revered Hindu temple complex dedicated to the patron deity of the Mewar rulers, Lord Shiva (as Eklingji). Originally built in the 8th century by Bappa Rawal, the current complex features a grand two-story temple with a four-faced black marble idol of Shiva, surrounding shrines, and exquisite stone carvings.",
    timings: "4:00 AM – 7:00 AM, 10:30 AM – 1:30 PM, 5:00 PM – 7:00 PM",
    entryFee: "Free Entry",
    bestTime: "During prayer/Aarti times for a spiritual experience",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3d/bd/41/caption.jpg?w=1100&h=1100&s=1"
  },
  {
    id: 7,
    title: "Bagore Ki Haveli",
    category: "culture",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A heritage haveli with a museum and mesmerizing cultural dance shows.",
    fullDescription: "Bagore-ki-Haveli is an 18th-century waterfront mansion located at Gangori Ghat on Lake Pichola. Built by the Prime Minister of Mewar, it has over a hundred rooms exhibiting royal costumes, traditional puppets, modern art, and the world's largest turban. Every evening, it hosts the famous 'Dharohar' folk dance show, bringing Rajasthani heritage to life.",
    timings: "10:00 AM – 5:30 PM (Museum), 7:00 PM – 8:00 PM (Dance Show)",
    entryFee: "₹100 (Museum), ₹150 (Dance Show - highly recommended)",
    bestTime: "7:00 PM for the cultural dance performance",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/bagore-ki-haveli-udaipur-rajasthan-1-musthead-hero?qlt=82&ts=1742169306926"
  },
  {
    id: 8,
    title: "Fateh Sagar Lake",
    category: "lakes",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A scenic artificial lake perfect for boating and enjoying peaceful sunsets.",
    fullDescription: "Fateh Sagar Lake is a gorgeous artificial lake built in 1687 by Maharana Jai Singh, and later reconstructed by Maharana Fateh Singh. Bordered by the lush Aravalli Hills, it contains three small islands, including Nehru Park and the Udaipur Solar Observatory. The lake offers speed boating, motor boating, and a popular lakeside walk called 'Mumbai Market' famous for local street food.",
    timings: "8:00 AM – 6:00 PM",
    entryFee: "Free Entry (Boating starts at ₹30 for regular to ₹200 for speedboats)",
    bestTime: "Sunset, perfect for a walk or boat ride",
    image: "https://thumbs.dreamstime.com/b/fateh-sagar-lake-udaipur-rajasthan-india-35987332.jpg"
  },
  {
    id: 9,
    title: "Jagdish Temple",
    category: "temples",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "17th‑century Vishnu temple with Indo‑Aryan architecture..",
    fullDescription: "Jagdish Mandir is a beautiful 17th‑century temple built by Maharana Jagat Singh I in the heart of Udaipur. Dedicated to Lord Vishnu, it stands tall with a magnificent spire and intricate stone carvings that catch every visitor’s eye. The temple houses a striking black stone idol of Vishnu, worshipped with deep devotion. Surrounded by smaller shrines of Lord Shiva, Ganesha, and the Sun God, it reflects the spiritual richness of Rajasthan. Just beside the City Palace, Jagdish Mandir blends faith, history, and heritage, making it a must‑visit spot for travelers.",
    timings: "Evening: 4:00 PM – 10:30 PM <br> Morning: 5:00 AM – 2:30 PM",
    entryFee: "Free Entry",
    bestTime: "Early morning aarti or sunset for the most divine vibes. ",
    image: "https://temple.yatradham.org/public/Product/temple/temple_8t3hYPtJ_202410161435320.jpg"
  },
  {
    id: 10,
    title: "Vintage Car Museum",
    category: "culture",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A royal collection of classic cars from the Mewar dynasty.",
    fullDescription: "The Vintage Car Museum in Udaipur showcases an impressive collection of classic and antique cars once owned by the Maharanas of Mewar. Established in 2000, it features rare vehicles including Rolls Royce, Cadillac, and other iconic models. The museum offers a glimpse into royal luxury and lifestyle, making it a fascinating stop for automobile lovers and history enthusiasts.",
    timings: "Morning: 9:00 AM – 5:00 PM",
    entryFee: "₹250 per person (approx.)",
    bestTime: "Morning hours for a relaxed visit.",
    image: "https://udaipurtourism.co.in/images/tourist-places/vintage-car-museum-udaipur/vintage-car-museum-udaipur-indian-tourism-entry-tickets-price.jpg"
  },
  {
    id: 11,
    title: "Badi Lake",
    category: "lakes",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A peaceful lake surrounded by green hills, perfect for relaxation.",
    fullDescription: "Badi Lake, also known as Jiyan Sagar, was built in the 17th century by Maharana Raj Singh to honor his mother, Jana Devi. Spread across a vast area, the lake is surrounded by serene hills and offers a calm atmosphere away from the city crowds. It is a popular spot for nature lovers, photographers, and those seeking quiet moments. The lake’s tranquil beauty makes it one of Udaipur’s hidden gems.",
    timings: "Morning: 8:00 AM – 6:00 PM",
    entryFee: "Free Entry",
    bestTime: "Sunrise or evening for peaceful views.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bird_in_Badi_Lake.jpg"
  },
  {
    id: 12,
    title: "Moti Magri",
    category: "culture",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A historic hilltop memorial of Maharana Pratap overlooking Fateh Sagar Lake.",
    fullDescription: "Moti Magri, also known as Pearl Hill, is a famous memorial dedicated to Maharana Pratap. Situated on a hill overlooking Fateh Sagar Lake, it features a majestic bronze statue of Maharana Pratap riding his loyal horse, Chetak. The site also has beautiful gardens, fountains, and small museums showcasing Mewar’s history. It is a popular spot for tourists to enjoy panoramic views and learn about the valor of the Rajput warrior.",
    timings: "Morning: 9:00 AM – 6:00 PM",
    entryFee: "₹20 – ₹50 per person (approx.)",
    bestTime: "Evening for sunset views over Fateh Sagar.",
    image: "https://www.transindiatravels.com/wp-content/uploads/moti-magri.jpg"
  },
  {
    id: 13,
    title: "Karni Mata Temple",
    category: "temples",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A hilltop temple dedicated to Goddess Karni Mata with panoramic city views.",
    fullDescription: "Karni Mata Temple is a peaceful shrine located atop Machla Magra Hills in Udaipur. Dedicated to Goddess Karni Mata, the temple is accessible via a ropeway that offers stunning aerial views of Lake Pichola, City Palace, and Sajjangarh Fort. The temple is known for its serene atmosphere and scenic surroundings, making it a blend of spirituality and sightseeing. Visitors often enjoy the sunset views from here, which are truly mesmerizing.",
    timings: "Morning: 5:00 AM – 9:00 PM",
    entryFee: "Free Entry (Ropeway charges apply)",
    bestTime: "Sunset for breathtaking views of Udaipur.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/shri-manshapurna-karni-mata-udaipur-rajasthan-6-attr-hero?qlt=82&ts=1742187807983"
  },
  {
    id: 14,
    title: "Nimach Mata Temple",
    category: "temples",
    location: "Udaipur, Rajasthan",
    rating: 5,
    description: "A serene hilltop temple dedicated to Goddess Nimach Mata.",
    fullDescription: "Nimach Mata Temple is a peaceful shrine located on a hill near Fateh Sagar Lake in Udaipur. Dedicated to Goddess Nimach Mata, the temple is reached by climbing a scenic pathway that offers panoramic views of the city and the lake. It is a popular spot among locals for morning walks and devotees seeking blessings. The calm surroundings and elevated location make it a perfect blend of spirituality and nature.",
    timings: "Morning: 6:00 AM – 8:00 PM",
    entryFee: "Free Entry",
    bestTime: "Morning or evening for cool weather and views.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUW-Tv2S4MGlrhFWsuwqOPxyTyLEn5Y6kP1nE8JF91OalYwwAKJfbsQYE&s=10"
  },
  {
    id: 15,
    title: "Udai Sagar Lake",
    category: "lakes",
    location: "Udaipur, Rajasthan",
    rating: 4,
    description: "A historic lake built by Maharana Udai Singh in the 16th century.",
    fullDescription: "Udai Sagar Lake was constructed in 1565 by Maharana Udai Singh as a source of water supply for Udaipur. Spread across a vast area, the lake is surrounded by scenic hills and lush greenery. It is known for its calm waters and historical significance, as several battles of Mewar were fought near this lake. Today, it serves as a peaceful spot away from the city’s hustle, ideal for nature lovers and history enthusiasts.",
    timings: "Morning: 8:00 AM – 6:00 PM",
    entryFee: "Free Entry",
    bestTime: "Morning or late afternoon for serene views.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/udai-sagar-lake-udaipur-rajasthan-attr-about?qlt=82&ts=1742196558146"
  },
  {
    id: 16,
    title: "Doodh Talai Lake",
    category: "lakes",
    location: "Udaipur, Rajasthan",
    rating: 4,
    description: "A small scenic lake near Lake Pichola with gardens and viewpoints.",
    fullDescription: "Doodh Talai Lake is a charming small lake located close to Lake Pichola in Udaipur. Surrounded by lush gardens like Pandit Deendayal Upadhyay Park and Manikya Lal Verma Garden, it offers beautiful views of the City Palace and Lake Pichola. The lake area is also known for the ropeway ride to Karni Mata Temple, making it a blend of natural beauty and adventure. It is a peaceful spot for evening walks and photography.",
    timings: "Morning: 8:00 AM – 7:00 PM",
    entryFee: "Free Entry (Ropeway charges extra)",
    bestTime: "Evening for sunset and city views.",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/m_Doodh_Talai_Museum_Udaipur_1_p_853_640.jpg"
  }
];

const categoryDisplayNames = {
  'palaces': 'Palaces',
  'lakes': 'Lakes',
  'gardens': 'Gardens',
  'temples': 'Temples',
  'culture': 'Culture & Museum'
};

const Places = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [userRatings, setUserRatings] = useState({});
  const [activeModalId, setActiveModalId] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(0);

  const filteredPlaces = placesData.filter(place => {
    const matchesFilter = currentFilter === 'all' || place.category === currentFilter;
    const matchesSearch = place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          place.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activePlace = placesData.find(p => p.id === activeModalId);

  // Close modal on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeModalId) setActiveModalId(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeModalId]);

  useEffect(() => {
    if (activeModalId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setHoveredRating(0); // Reset hover state when modal closes
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModalId]);

  const handleStarClick = (val) => {
    setUserRatings(prev => ({ ...prev, [activeModalId]: val }));
  };

  const getFeedbackMessage = (val) => {
    const feedbacks = [
      "We're sorry you had that experience. 😞",
      "Thanks for your feedback! 🙂",
      "Nice! Glad you liked it. 😊",
      "Awesome place indeed! 🌟",
      "Absolute masterpiece! Love Udaipur! 👑💖"
    ];
    return feedbacks[val - 1] || "Rate your visiting experience!";
  };

  return (
    <>
      <section className="hero places-hero">
        <div className="hero-content">
          <span className="hero-script">~ Explore ~</span>
          <h1 className="hero-title">Udaipur</h1>
          <div className="divider-container">
            <span className="gold-line"></span>
            <span className="hero-subtitle">The City of Lakes, Palaces & Timeless Beauty</span>
            <span className="gold-line"></span>
          </div>
          <a href="#places-grid" className="badge-button">
            <span className="badge-star">&#10022;</span>
            PLACES YOU MUST VISIT
            <span className="badge-star">&#10022;</span>
          </a>
        </div>
      </section>

      <div className="controls-container">
        <div className="controls-bar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
              type="text" 
              placeholder="Search by name, category, or description..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-group">
            {['all', 'palaces', 'lakes', 'gardens', 'temples', 'culture'].map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${currentFilter === filter ? 'active' : ''}`} 
                onClick={() => setCurrentFilter(filter)}
              >
                {filter === 'all' ? 'All Attractions' : categoryDisplayNames[filter]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="places-section" id="places-grid">
        <div className="cards-grid">
          {filteredPlaces.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
              <i className="fas fa-search-minus" style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '15px', display: 'block' }}></i>
              <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '5px' }}>No Places Found</h3>
              <p>Try refining your search terms or choosing a different category.</p>
            </div>
          ) : (
            filteredPlaces.map(place => {
              const formattedNum = String(place.id).padStart(2, '0');
              const currentStarsCount = userRatings[place.id] || place.rating;
              const starsMarkup = '★'.repeat(currentStarsCount) + '☆'.repeat(5 - currentStarsCount);

              return (
                <div 
                  key={place.id}
                  className="place-card" 
                  tabIndex="0"
                  onClick={() => setActiveModalId(place.id)}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveModalId(place.id)}
                >
                  <div className="card-img-wrapper">
                    <img src={place.image} alt={place.title} loading="lazy" />
                    <span className="card-category-badge">{(categoryDisplayNames[place.category] || place.category).toUpperCase()}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-title-row">
                      <div className="card-number">{formattedNum}</div>
                      <div className="card-meta">
                        <h3 className="card-title">{place.title}</h3>
                        <div className="card-location">
                          <span className="location-pin">&#128205;</span> {place.location}
                        </div>
                      </div>
                    </div>
                    <p className="card-description">{place.description}</p>
                    <div className="card-footer">
                      <span className="card-rating">{starsMarkup}</span>
                      <span className="card-action">View details &rarr;</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      <section id="plan" className="cta-banner">
        <h2 className="cta-title">Plan Your Perfect Trip to Udaipur</h2>
        <p className="cta-subtitle">Customized Travel Packages, Heritage Walks, Lake Cruises, and Expert Guides to Make Your Visit Unforgettable.</p>
        <a href="mailto:info@exploreudaipur.com?subject=Trip Planning Inquiry" className="cta-btn">Get a Free Custom Quote</a>
      </section>

      {activePlace && (
        <div className="modal-overlay active" onClick={(e) => {
          if (e.target.className.includes('modal-overlay')) setActiveModalId(null);
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <img src={activePlace.image} alt={activePlace.title} />
              <button className="modal-close-btn" aria-label="Close modal" onClick={() => setActiveModalId(null)}>&times;</button>
              <div className="modal-header-overlay">
                <div className="modal-header-info">
                  <div className="modal-title-row">
                    <div className="modal-number">{String(activePlace.id).padStart(2, '0')}</div>
                    <h2 className="modal-title">{activePlace.title}</h2>
                  </div>
                  <div className="modal-location">
                    <span className="location-pin">&#128205;</span> {activePlace.location}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <p className="modal-description">{activePlace.fullDescription}</p>
              
              <div className="modal-details-grid">
                <div className="detail-item">
                  <i className="fa-regular fa-clock"></i>
                  <div className="detail-text">
                    <h4>Timings</h4>
                    <p dangerouslySetInnerHTML={{__html: activePlace.timings}}></p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="fa-solid fa-ticket"></i>
                  <div className="detail-text">
                    <h4>Entry Fee</h4>
                    <p>{activePlace.entryFee}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="fa-regular fa-calendar-days"></i>
                  <div className="detail-text">
                    <h4>Best Time to Visit</h4>
                    <p>{activePlace.bestTime}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="fa-solid fa-landmark"></i>
                  <div className="detail-text">
                    <h4>Heritage & History</h4>
                    <p>{activePlace.history || `${activePlace.title} represents a core architectural and cultural heritage point in the history of Mewar. Built during the peak era of the Mewar Dynasty, it stands as a testimony to Udaipur's rich historical legacy, design excellence, and royal heritage.`}</p>
                  </div>
                </div>
              </div>
              
              <div className="interactive-rating-section">
                <h4>Did you visit this place?</h4>
                <div className="interactive-rating-stars">
                  {[1, 2, 3, 4, 5].map(val => {
                    const currentRating = hoveredRating || userRatings[activeModalId] || 0;
                    return (
                      <span 
                        key={val}
                        className={val <= currentRating ? 'active' : ''}
                        onMouseEnter={() => setHoveredRating(val)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => handleStarClick(val)}
                      >
                        {val <= currentRating ? '★' : '☆'}
                      </span>
                    );
                  })}
                </div>
                <p className="rating-feedback">
                  {userRatings[activeModalId] 
                    ? getFeedbackMessage(userRatings[activeModalId]) 
                    : "Rate your visiting experience!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Places;
