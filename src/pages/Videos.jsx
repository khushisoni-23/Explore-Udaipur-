import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/videos.css';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Udaipur City Palace',
      description: 'Explore the magnificent City Palace complex',
      thumbnail: 'https://img.youtube.com/vi/Cn18UL6di_M/maxresdefault.jpg',
      embedId: 'Cn18UL6di_M'
    },
    {
      id: 2,
      title: 'Lake Pichola',
      description: 'Experience the serene beauty of Lake Pichola',
      thumbnail: 'https://img.youtube.com/vi/T_qW0Av_Jd4/maxresdefault.jpg',
      embedId: 'T_qW0Av_Jd4'
    },
    {
      id: 3,
      title: 'Sajjangarh Monsoon Palace',
      description: 'Sunset views from the Monsoon Palace',
      thumbnail: 'https://img.youtube.com/vi/c4TRXBXX-AE/maxresdefault.jpg',
      embedId: 'c4TRXBXX-AE'
    },
    {
      id: 4,
      title: 'Udaipur Lakes Tour',
      description: 'Discover the beautiful lakes of Udaipur',
      thumbnail: 'https://img.youtube.com/vi/WxKNbmhJokI/maxresdefault.jpg',
      embedId: 'WxKNbmhJokI'
    },
    {
      id: 5,
      title: 'Udaipur Sunset',
      description: 'Breathtaking sunset views in the City of Lakes',
      thumbnail: 'https://img.youtube.com/vi/eohjP2krtds/maxresdefault.jpg',
      embedId: 'eohjP2krtds'
    },
    {
      id: 6,
      title: 'Udaipur City Tour',
      description: 'Complete tour of Udaipur attractions',
      thumbnail: 'https://img.youtube.com/vi/R1F_RdBaSMo/maxresdefault.jpg',
      embedId: 'R1F_RdBaSMo'
    },
    {
      id: 7,
      title: 'Udaipur Tourism Guide',
      description: 'Complete tourism guide to Udaipur',
      thumbnail: 'https://img.youtube.com/vi/eDCY4Gs3xqQ/maxresdefault.jpg',
      embedId: 'eDCY4Gs3xqQ'
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos-page">
      {/* Hero Section */}
      <section className="videos-hero">
        <div className="videos-hero-overlay"></div>
        <div className="videos-hero-content">
          <p className="videos-hero-tagline">~ Explore Through Videos ~</p>
          <h1 className="videos-hero-title">Udaipur Tourism Videos</h1>
          <div className="videos-hero-divider"></div>
          <p className="videos-hero-desc">Experience the royal beauty of Udaipur through stunning video tours</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="videos-back-container">
        <Link to="/" className="videos-back-btn">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      {/* Videos Grid */}
      <section className="videos-section">
        <div className="videos-container">
          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    onError={(e) => {
                      e.target.src = 'https://img.youtube.com/vi/dvWbJvNrM1U/maxresdefault.jpg';
                    }}
                  />
                  <div className="video-play-overlay" onClick={() => openVideoModal(video)}>
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  <button 
                    className="video-watch-btn"
                    onClick={() => openVideoModal(video)}
                  >
                    <i className="fas fa-play-circle"></i> Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-modal-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="video-modal-title">{selectedVideo.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
