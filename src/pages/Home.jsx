import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  { src: "/assets/image/Team.JPG", alt: '팀 1' }
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="team-gallery">
      <div className="Team-img">
        <a href="/">
          <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
        </a>
      </div>
    </div>
  );
}

export default Home;
