import React, { useState, useEffect } from 'react';
import '../styles/food.css';

const additionalDishes = [
  {
    title: "Malai Kofta",
    tag: "Royal Vegetarian Cuisine",
    image: "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe-500x500.jpg",
    description: "A rich and creamy North Indian delicacy made with soft paneer-potato dumplings simmered in a luxurious tomato-cashew gravy, flavored with aromatic spices and finished with fresh cream."
  },
  {
    title: "Mewari Khichdi",
    tag: "Comfort Food",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IuOCCZdcuy5FKzHYHgeMcUSi57Hez0jG-28KHtdpAA&s=10",
    description: "A nutritious, aromatic grain dish prepared with coarse grains, lentils, mild spices, and generous amounts of pure ghee, traditional to the local rural households."
  },
  {
    title: "Mirchi Bada",
    tag: "Street Food",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkeo11VhDPs01TJp9SI7oicuAhKGdKlqQCw7I_w6E95R5QTNKDoRtHSkB&s=10",
    description: "Thick, non-spicy green chilies stuffed with a savory mashed potato mixture, coated in seasoned chickpea flour (besan) batter and deep-fried until golden brown."
  },
  {
    title: "Panchmel Dal",
    tag: "Traditional Rajasthani Cuisine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_pbOsKFuFsnnYyxHsyeCE4ISDdGXkBSA5uYvTcbIBjgZH9mN6_9Xbi3B&s=10",
    description: "A wholesome Rajasthani lentil preparation made by combining five different dals, tempered with ghee, garlic, and aromatic spices. Traditionally served with baati, it represents the rustic flavors of Rajasthan."
  }
];

const initialDishes = [
  {
    title: "Dal Baati Churma",
    tag: "Must Try",
    image: "https://www.shutterstock.com/image-photo/rajasthani-traditional-cuisine-dal-baati-600nw-2017168454.jpg",
    description: "A signature Rajasthani treat: round, baked flour dumplings (baatis) drenched in pure desi ghee, served alongside spiced lentil curry (dal) and sweet, crumbled churma."
  },
  {
    title: "Gatte Ki Sabzi",
    tag: "Traditional",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/gatte-ki-sabji-recipe-1-500x375.jpg",
    description: "A classic Mewari dish featuring soft, boiled gram-flour dumplings simmered in a rich, tangy yogurt-based gravy with traditional spices."
  },
  {
    title: "Ker Sangri",
    tag: "Desert Delicacy",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/09/Ker-Sangri-2-3-500x500.jpg",
    description: "A unique desert dish prepared with dried wild berries (Ker) and beans (Sangri) sourced from the arid regions, slow-cooked in oil and dry spices."
  },
  {
    title: "Pyaz Kachori",
    tag: "Street Food",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8de9ICJ22eHhlYDLpIA0w82qoZ1Tc61lymg&s",
    description: "A flaky, deep-fried pastry filled with a highly seasoned onion, potato, and spice mixture. A legendary snack served with spicy and sweet chutneys."
  }
];

const Food = () => {
  const [dishes, setDishes] = useState(initialDishes);
  const [moreDishesLoaded, setMoreDishesLoaded] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalContent) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [modalContent]);

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalContent]);

  const loadMoreDishes = () => {
    if (!moreDishesLoaded) {
      setDishes([...initialDishes, ...additionalDishes]);
      setMoreDishesLoaded(true);
    }
  };

  const openModal = (title, contentHtml) => {
    setModalContent({ title, contentHtml });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const showHistory = () => {
    openModal(
      "History of Mewari Cuisine",
      `
      <div class="history-modal-text">
        <p>Mewar cuisine is one of the oldest and most authentic culinary styles of India, heavily shaped by the dry desert geography and rich royal heritage of Udaipur.</p>
        
        <h4>Royal Origins & Feasts</h4>
        <p>In the royal kitchens of Udaipur (the Shahi Rasoda), cooking was treated as an art. Dishes were prepared over slow wood fire in large copper vessels. The recipes were designed to sustain soldiers, requiring robust proteins, ghee, and local ingredients that could last long military campaigns.</p>
        
        <h4>Unique Ingredients & Adaptation</h4>
        <p>Because green vegetables were historically scarce in the dry climate, Mewari cooks perfected the use of sun-dried berries (like Ker and Sangri), lentils, dairy (yogurt, milk, cream), and gram flour (besan) to create incredibly rich curries.</p>
        
        <h4>Royal Cooking Techniques</h4>
        <p>Mewar cuisine is famous for techniques like <strong>Dhungar</strong> (charcoal-smoking method to infuse a deep smoky flavor into curries and lentils) and slow-simmering over woodfire, which creates unmatched texture and depth.</p>
      </div>
      `
    );
  };

  const showPlaces = () => {
    openModal(
      "Top Dining Spots in Udaipur",
      `
      <div class="dining-places-list">
        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://static.toiimg.com/photo/32671087/.jpg" alt="Natraj Dining Hall">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Natraj Dining Hall</h3>
            <div class="dining-place-specialty">Authentic Rajasthani & Gujarati Thali</div>
            <p class="dining-place-desc">A legendary dining spot in Udaipur serving unlimited, delicious traditional thali. Famed for its piping hot Dal Baati, Gatte ki Sabzi, and warm hospitality.</p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Near Railway Station, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹300 - ₹400 per thali</span>
            </div>
          </div>
        </div>
        
        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://b.zmtcdn.com/data/reviews_photos/1de/43a8c1bbb07eb8f1ed27cdb02ecc51de_1629021580.jpg" alt="Krishna Dal Bati Restro">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Krishna Dal Bati Restro</h3>
            <div class="dining-place-specialty">Authentic Dal Baati Churma</div>
            <p class="dining-place-desc">An absolute must-visit for Dal Baati enthusiasts. They serve a simple, unlimited authentic thali featuring fresh baatis dipped in pure ghee.</p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Gulab Bagh Road, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹250 - ₹350 per thali</span>
            </div>
          </div>
        </div>

        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://b.zmtcdn.com/data/pictures/5/18022675/18f463511a55bfa72e872f2d797652ef.jpg" alt="Ambrai (Amet Haveli)">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Ambrai (Amet Haveli)</h3>
            <div class="dining-place-specialty">Lakeside Fine Dining</div>
            <p class="dining-place-desc">Located right on the banks of Lake Pichola, Ambrai offers romantic candlelight dinners with stunning views of the City Palace. Famous for Safed Maas.</p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Chandpole, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹1200 - ₹2000 for two</span>
            </div>
          </div>
        </div>

        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2JfdkZBNEhlUnZ1azRhUy1vcm5vMVEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=" alt="Bawarchi Restaurant Udaipur">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Bawarchi Restaurant & Dining Hall</h3>
            <div class="dining-place-specialty">Pure Veg Unlimited Thali</div>
            <p class="dining-place-desc">
              Established in 1993, Bawarchi is one of Udaipur’s most iconic vegetarian restaurants. 
              Famous for its Rajasthani, Gujarati, and Jain thalis, it also serves Punjabi, South Indian, and continental dishes. 
              A family‑friendly dining hall with quick service, generous portions, and homely flavors. Must‑try: Dal Baati Churma, Panchmel Dal, Masala Dosa, Sweet Lassi.
            </p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> 6, Delhi Gate Circle,Bapu Bazar,Nada Khada, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹300-₹400 per thali </span>
            </div>
          </div>
        </div>

        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://d3gw4aml0lneeh.cloudfront.net/assets/locations/15436/TpseZNMnndsV.jpg" alt="Sukhadia Circle Food Hub">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Sukhadia Circle Food Hub</h3>
            <div class="dining-place-specialty">Street Food & Local Desserts</div>
            <p class="dining-place-desc">A lively circular plaza famous for street food stalls. It is the best place to enjoy local street snacks like Rabdi, Pav Bhaji, Chaat, and Cold Coffee.</p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Sukhadia Circle, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹50 - ₹250 per item</span>
            </div>
          </div>
        </div>

        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISwSjnU0cKLcTW-S19u2NSNkOxSyKASz8s9BaM78uAGOvXjyXZVHxThM&s=10" alt="Khamma Ghani - A Pure Veg Restro & Bar">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Khamma Ghani - A Pure Veg Restro & Bar</h3>
            <div class="dining-place-specialty">Rooftop Vegetarian Dining</div>
            <p class="dining-place-desc">
              Rooftop restaurant with lake and hill views, serving pure vegetarian and Jain-friendly Rajasthani and North Indian dishes in a romantic setting.
            </p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Chandpole, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹2200 – ₹2300 for two</span>
            </div>
          </div>
        </div>

        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://media-cdn.tripadvisor.com/media/photo-s/03/c4/bd/3f/raaj-bagh.jpg" alt="Raaj Bagh Restaurant Udaipur">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Raaj Bagh Restaurant</h3>
            <div class="dining-place-specialty">Garden Fine Dining</div>
            <p class="dining-place-desc">
              Lakeside garden restaurant on Fateh Sagar Road, serving royal Rajasthani thalis and continental dishes in a romantic, torch-lit ambience with panoramic lake views.
            </p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Fateh Sagar Lake, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹1500 for two</span>
            </div>
          </div>
        </div>

        <div class="dining-place-item">
          <div class="dining-place-img-wrapper">
            <img class="dining-place-img" src="https://udaigarhudaipur.in/latest-img/rooftop/12.webp" alt="Saga - Lake View Roof Top Restaurant">
          </div>
          <div class="dining-place-info">
            <h3 class="dining-place-name">Saga - Lake View Roof Top Restaurant</h3>
            <div class="dining-place-specialty">Rooftop Lake View Dining</div>
            <p class="dining-place-desc">
              Rooftop restaurant near Chandpole with panoramic lake views, serving Indian, Asian, and continental dishes in a romantic candlelit setting.
            </p>
            <div class="dining-place-meta">
              <span><i class="fa-solid fa-location-dot"></i> Chandpole, Udaipur</span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i> ₹1000 for two</span>
            </div>
          </div>
        </div>
      </div>
      `
    );
  };

  const showGallery = () => {
    openModal(
      "Mewari Food Gallery",
      `
      <div class="gallery-modal-grid">
        <div class="gallery-modal-item"><img src="https://blog.swiggy.com/wp-content/uploads/2024/09/Image-No-1-Malai-Ghewar-1024x538.png" alt="Malai Ghevar"></div>
        <div class="gallery-modal-item"><img src="https://www.stayvista.com/blog/wp-content/uploads/2024/07/Blog-banner.jpg" alt="Traditional Thali"></div>
        <div class="gallery-modal-item"><img src="https://i.ytimg.com/vi/2ypCRueHwOM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD_Tee4coKxcA_xKHC9QXi27rouw" alt="Rabdi Kulhad"></div>
        <div class="gallery-modal-item"><img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_1464,w_3523,h_1982,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/chunda-shikar-oudi-udaipur/Potato_fritters_etkjov" alt="Heritage Dining"></div>
        <div class="gallery-modal-item"><img src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/gatte-ki-sabji-recipe-1-500x375.jpg" alt="Gatte ki Sabzi"></div>
        <div class="gallery-modal-item"><img src="https://www.whiskaffair.com/wp-content/uploads/2020/09/Ker-Sangri-2-3-500x500.jpg" alt="Ker Sangri"></div>
        <div class="gallery-modal-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8de9ICJ22eHhlYDLpIA0w82qoZ1Tc61lymg&s" alt="Pyaz Kachori"></div>
        <div class="gallery-modal-item"><img src="https://i.ytimg.com/vi/XG2wSshF-bM/maxresdefault.jpg" alt="Safed Maas"></div>
        <div class="gallery-modal-item"><img src="https://www.funfoodfrolic.com/wp-content/uploads/2023/07/Mirchi-Vada-Blog-500x500.jpg" alt="Mirchi Bada"></div>
      </div>
      `
    );
  };

  return (
    <>
      <section className="hero food-hero">
        <div className="hero-content">
          <span className="hero-script">~ Traditional Tastes ~</span>
          <h1 className="hero-title">Taste the Royal Flavours of Udaipur</h1>
          <div className="divider-container">
            <span className="gold-line"></span>
            <span className="hero-subtitle">Hearty, Royal & Timeless Mewari Cuisine</span>
            <span className="gold-line"></span>
          </div>
          <a href="#taste" className="badge-button">
            <span className="badge-star">&#10022;</span>
            EXPLORE CUISINE
            <span className="badge-star">&#10022;</span>
          </a>
        </div>
      </section>

      <section id="taste" className="cuisine-section">
        <div className="section-header">
          <span className="section-subtitle">A Culinary Legacy</span>
          <h2 className="section-title">The Taste of Mewar</h2>
          <div className="header-divider"></div>
        </div>
        
        <div className="cards-grid" id="dishes-grid">
          {dishes.map((dish, idx) => (
            <div className={`food-card ${idx >= 4 ? 'fade-in-card' : ''}`} key={dish.title}>
              <div className="card-img-wrapper">
                <img src={dish.image} alt={dish.title} loading="lazy" />
                <span className="food-tag-badge">{dish.tag}</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{dish.title}</h3>
                <p className="card-description">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="btn-container">
          <button 
            className="action-btn" 
            id="view-more-btn" 
            onClick={loadMoreDishes}
            style={{ 
              opacity: moreDishesLoaded ? 0.5 : 1, 
              cursor: moreDishesLoaded ? 'not-allowed' : 'pointer' 
            }}
          >
            {moreDishesLoaded ? 'All Dishes Displayed' : <>View More Dishes <span className="btn-arrow">&rarr;</span></>}
          </button>
        </div>
      </section>

      <section id="special" className="special-section">
        <div className="special-banner">
          <div className="special-content">
            <h2 className="special-title">Why Udaipur's Cuisine is Special?</h2>
            <p className="special-description">Udaipur's cuisine is a beautiful reflection of Mewar's royal heritage, dry geographical climate, and warm hospitality. Traditional dishes are heavily prepared with pure ghee, curd, milk, and hand-ground spices to bring out rich, authentic flavors that last in your memory forever.</p>
            <button className="action-btn-gold" id="know-more-btn" onClick={showHistory}>Know More History</button>
          </div>
        </div>
      </section>

      <section id="dining" className="dining-section">
        <div className="section-header">
          <span className="section-subtitle">Exquisite Dining</span>
          <h2 className="section-title">Savour Udaipur in Every Bite</h2>
          <div className="header-divider"></div>
        </div>

        <div className="cards-grid">
          <div className="food-card">
            <div className="card-img-wrapper">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp4-vQF-VRQQ18qwhahHsb9KIzodlw4VwGA&s" alt="Royal Thali" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Royal Thali</h3>
              <p className="card-description">Experience the royal spread fit for kings. Includes Dal Baati, several vegetable curries, breads, sweets, and sides served in majestic brass thalis.</p>
            </div>
          </div>

          <div className="food-card">
            <div className="card-img-wrapper">
              <img src="https://blog.swiggy.com/wp-content/uploads/2024/03/Dabeli-1-1024x538.png" alt="Street Food" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Street Food</h3>
              <p className="card-description">Savour the local flavours from Udaipur’s vibrant streets, featuring spicy Kachoris, Mirchi Vadas, Pav Bhaji, and rich sweet Rabdi.</p>
            </div>
          </div>

          <div className="food-card">
            <div className="card-img-wrapper">
              <img src="https://shahivegrestaurant.com/wp-content/uploads/2025/11/a-romantic-candlelight-dinner-setup-by-t_TcW523qiSier7yFqUYDQAA_s2IOcY7STVmHrX-WpyR2lw-1080x675.jpeg" alt="Lakeside Dining" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Lakeside Dining</h3>
              <p className="card-description">Enjoy delicious candlelight meals with breathtaking views of the illuminated City Palace and reflections in Lake Pichola.</p>
            </div>
          </div>

          <div className="food-card">
            <div className="card-img-wrapper">
              <img src="https://qalaaudaipur.com/wp-content/uploads/2026/02/deluxe-restaurant-in-Udaipur.webp" alt="Heritage Restaurants" loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Heritage Restaurants</h3>
              <p className="card-description">Dine in historic Havelis and royal palaces offering authentic recipes passed down through generations of royal Mewari cooks.</p>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className="action-btn" id="explore-places-btn" onClick={showPlaces}>
            Explore Best Food Places <span className="btn-arrow">&rarr;</span>
          </button>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-header">
          <span className="section-subtitle">Visual Feast</span>
          <h2 className="section-title">A Glimpse of Royal Flavours</h2>
          <div className="header-divider"></div>
        </div>

        <div className="gallery-grid" id="main-gallery">
          <div className="gallery-item">
            <img src="https://blog.swiggy.com/wp-content/uploads/2024/09/Image-No-1-Malai-Ghewar-1024x538.png" alt="Malai Ghevar" loading="lazy" />
            <div className="gallery-overlay">
              <span>Malai Ghevar</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://www.stayvista.com/blog/wp-content/uploads/2024/07/Blog-banner.jpg" alt="Traditional Rajasthani Thali" loading="lazy" />
            <div className="gallery-overlay">
              <span>Rajasthani Thali</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://i.ytimg.com/vi/2ypCRueHwOM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD_Tee4coKxcA_xKHC9QXi27rouw" alt="Rabdi Kulhad" loading="lazy" />
            <div className="gallery-overlay">
              <span>Rabdi Kulhad</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_1464,w_3523,h_1982,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/chunda-shikar-oudi-udaipur/Potato_fritters_etkjov" alt="Heritage Dining Setup" loading="lazy" />
            <div className="gallery-overlay">
              <span>Heritage Dining</span>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className="action-btn" id="view-gallery-btn" onClick={showGallery}>
            View Full Gallery <span className="btn-arrow">&rarr;</span>
          </button>
        </div>
      </section>

      {modalContent && (
        <div className="modal-overlay active" id="food-modal" onClick={(e) => {
          if (e.target.id === 'food-modal') closeModal();
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{modalContent.title}</h2>
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">&times;</button>
            </div>
            <div 
              className="modal-body" 
              dangerouslySetInnerHTML={{ __html: modalContent.contentHtml }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Food;
