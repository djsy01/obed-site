import React, { useState, useEffect } from 'react';
import './Home.css';

// 이미지 배열
const images = [
  { src: "/assets/image/Team.JPG", alt: '팀 1' }
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  {/* 메인 이미지 변경 */}
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    // 팀 이미지 갤러리
    <div className="team-gallery">
      {/* 현재 이미지 표시 */}
      <div className="Team-img">
        {/* 메인 사진 클릭 시 홈으로 이동 */}
        <a href="/">
          <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
        </a>
      </div>
    </div>
  );
}

export default Home;
