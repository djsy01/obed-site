// import 제거 (public 사용 시 불필요)
import React, { useState, useEffect } from 'react';
import './Ministry.css';

// 이미지 경로 문자열로 수정
const galleryImages = {
  "25season1": [
    "/assets/image/preparation.JPG",
    "/assets/image/1.jpeg",
    "/assets/image/2.jpeg",
    "/assets/image/3.jpeg",
    "/assets/image/4.jpeg",
    "/assets/image/5.jpeg"
  ],
};

function Ministry() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSeason, setCurrentSeason] = useState("25season1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;

  const openGallery = (seasonKey) => {
    setCurrentSeason(seasonKey);
    setCurrentIndex(0);
    setCurrentPage(1);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        if (galleryImages[currentSeason] && currentIndex < galleryImages[currentSeason].length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    };

    if (isGalleryOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGalleryOpen, currentIndex, currentSeason]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentIndex((pageNumber - 1) * imagesPerPage);
  };

  const currentImages = galleryImages[currentSeason]?.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  ) || [];

  const currentImage = galleryImages[currentSeason]?.[currentIndex] || '';

  return (
    <div>
      {/* 사역 카드 */}
      <section className="season-gallery">
        <div className="season-card-horizontal" onClick={() => openGallery("25season1")}>
          <div className="season-img-wrapper">
            <img src="/assets/image/oneness.png" alt="Season 1 - 하나됨" />
          </div>
          <div className="season-info">
            <h3>2025년 Season 1 - “하나됨”</h3>
            <p className="description">
              우리는 한 몸 아래 하나님께 예배하는 예배팀이 되길 원하며<br />
              하나됨을 통해 교회를 섬기고, 교회를 넘어 열방을 섬기길 원합니다.
            </p>
            <blockquote className="verse">
              우리가 다 하나님의 아들을 믿는 것과 아는 일에 하나가 되어<br />
              온전한 사람을 이루어 그리스도의 장성한 분량이 충만한 데까지 이르리니<br />
              - 에베소서 4:13 -
            </blockquote>
          </div>
        </div>
      </section>

      {/* 갤러리 팝업 */}
      {isGalleryOpen && (
        <div className="gallery-popup">
          <span className="close" onClick={closeGallery}>&times;</span>
          <div className="gallery-content">
            {currentImage && (
              <img
                className="main-gallery-img"
                src={currentImage}
                alt="갤러리 메인"
              />
            )}
            <div className="thumbnail-list">
              {currentImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className={`thumbnail-img ${i === currentIndex ? 'active' : ''}`}
                  alt={`썸네일 ${i}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 페이지네이션 */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <span>페이지 {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * imagesPerPage >= (galleryImages[currentSeason]?.length || 0)}
        >
          다음
        </button>
      </div>

      {/* 목차 */}
      <div className="pagination-buttons">
        {Array.from({ length: Math.ceil((galleryImages[currentSeason]?.length || 0) / imagesPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Ministry;
