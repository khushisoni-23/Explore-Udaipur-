import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import Places from './pages/Places';
import Food from './pages/Food';
import Culture from './pages/Culture';
import HiddenGems from './pages/HiddenGems';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home.html" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places.html" element={<Places />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food.html" element={<Food />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/culture.html" element={<Culture />} />
          <Route path="/hidden-gems" element={<HiddenGems />} />
          <Route path="/hidden%20gems.html" element={<HiddenGems />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
