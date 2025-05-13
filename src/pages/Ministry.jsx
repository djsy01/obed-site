// import 제거 (public 사용 시 불필요)
import React, { useState, useEffect } from 'react';
import './Ministry.css';

// 이미지 경로 문자열로 수정
const galleryImages = {
  "25season1": [
    "/assets/image/oneness/preparation.JPG",
    "/assets/image/oneness/1.jpeg",
    "/assets/image/oneness/2.jpeg",
    "/assets/image/oneness/3.jpeg",
    "/assets/image/oneness/4.jpeg",
    "/assets/image/oneness/5.jpeg",
    "/assets/image/oneness/6.jpeg",
    "/assets/image/oneness/7.jpeg",
    "/assets/image/oneness/8.jpeg",
    "/assets/image/oneness/9.jpeg",
    "/assets/image/oneness/10.jpeg",
    "/assets/image/oneness/11.jpeg",
    "/assets/image/oneness/12.jpeg",
    "/assets/image/oneness/13.jpeg",
    "/assets/image/oneness/14.jpeg",
    "/assets/image/oneness/15.jpeg",
    "/assets/image/oneness/16.jpeg",
    "/assets/image/oneness/17.jpeg",
    "/assets/image/oneness/18.jpeg",
    "/assets/image/oneness/19.JPG",
    "/assets/image/oneness/20.jpeg",
    "/assets/image/oneness/21.jpeg",
    "/assets/image/oneness/22.JPG",
    "/assets/image/oneness/23.jpeg",
    "/assets/image/oneness/24.jpeg",
    "/assets/image/oneness/26.jpeg",
    "/assets/image/oneness/27.jpeg",
    "/assets/image/oneness/28.jpeg",
    "/assets/image/oneness/29.jpeg",
    "/assets/image/oneness/30.jpeg",
    "/assets/image/oneness/31.jpeg",
    "/assets/image/oneness/32.jpeg",
    "/assets/image/oneness/33.jpeg",
    "/assets/image/oneness/34.jpeg",
    "/assets/image/oneness/35.JPG",
    "/assets/image/oneness/36.jpeg",
    "/assets/image/oneness/37.JPG",
    "/assets/image/oneness/38.jpeg",
    "/assets/image/oneness/39.jpeg",
    "/assets/image/oneness/40.jpeg",
    "/assets/image/oneness/41.jpeg",
    "/assets/image/oneness/42.jpeg",
    "/assets/image/oneness/43.jpeg",
    "/assets/image/oneness/44.jpeg",
    "/assets/image/oneness/45.jpeg",
    "/assets/image/oneness/46.jpeg",
    "/assets/image/oneness/47.jpeg",
    "/assets/image/oneness/48.jpeg",
    "/assets/image/oneness/49.jpeg",
    "/assets/image/oneness/50.jpeg",
    "/assets/image/oneness/51.jpeg",
    "/assets/image/oneness/52.jpeg",
    "/assets/image/oneness/53.jpeg",
    "/assets/image/oneness/54.jpeg",
    "/assets/image/oneness/55.jpeg",
    "/assets/image/oneness/56.jpeg",
    "/assets/image/oneness/57.jpeg",
    "/assets/image/oneness/58.jpeg",
    "/assets/image/oneness/59.jpeg",
    "/assets/image/oneness/60.jpeg",
    "/assets/image/oneness/61.jpeg",
    "/assets/image/oneness/62.jpeg",
    "/assets/image/oneness/63.jpeg",
    "/assets/image/oneness/64.jpeg",
    "/assets/image/oneness/65.jpeg",
    "/assets/image/oneness/66.jpeg",
    "/assets/image/oneness/67.jpeg",
    "/assets/image/oneness/68.jpeg",
    "/assets/image/oneness/69.jpeg",
    "/assets/image/oneness/70.jpeg",
    "/assets/image/oneness/71.jpeg",
    "/assets/image/oneness/72.jpeg",
    "/assets/image/oneness/73.jpeg",
    "/assets/image/oneness/74.jpeg",
    "/assets/image/oneness/75.jpeg",
    "/assets/image/oneness/76.jpeg",
    "/assets/image/oneness/77.jpeg",
    "/assets/image/oneness/78.jpeg",
    "/assets/image/oneness/79.jpeg",
    "/assets/image/oneness/80.jpeg",
    "/assets/image/oneness/81.jpeg",
    "/assets/image/oneness/82.jpeg",
    "/assets/image/oneness/83.jpeg",
    "/assets/image/oneness/84.jpeg",
    "/assets/image/oneness/85.jpeg",
    "/assets/image/oneness/86.jpeg",
    "/assets/image/oneness/87.jpeg",
    "/assets/image/oneness/88.jpeg",
    "/assets/image/oneness/89.jpeg",
    "/assets/image/oneness/90.jpeg",
    "/assets/image/oneness/92.JPG",
    "/assets/image/oneness/93.JPG",
    "/assets/image/oneness/94.JPG",
    "/assets/image/oneness/95.JPG",
    "/assets/image/oneness/96.JPG",
    "/assets/image/oneness/97.JPG",
    "/assets/image/oneness/98.JPG",
    "/assets/image/oneness/99.JPG",
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentIndex((pageNumber - 1) * imagesPerPage);
  };

  const totalImages = galleryImages[currentSeason].length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentIndex < galleryImages[currentSeason].length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    };

    if (isGalleryOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, currentIndex, currentSeason]);

  return (
    <div className='season'>
      {/* 카드 */}
      <section className="season-gallery">
        <div className="season-card-horizontal" onClick={() => openGallery("25season1")}>
          <div className="season-img-wrapper">
            <img src="/assets/image/oneness/oneness.png" alt="Season 1 - 하나됨" />
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
            {/* 이전 이미지 버튼 */}
            <button className="prev-button" onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalImages - 1)}>
              &lt;
            </button>
            <img
              src={galleryImages[currentSeason][currentIndex]}
              className="main-gallery-img"
              alt={`메인 이미지 ${currentIndex}`}
            />
            {/* 다음 이미지 버튼 */}
            <button className="next-button" onClick={() => setCurrentIndex(currentIndex < totalImages - 1 ? currentIndex + 1 : 0)}>
              &gt;
            </button>
            <div className="thumbnail-list">
              {galleryImages[currentSeason].map((src, i) => (
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

      {/* 페이지 이동 */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>이전</button>
        <span>페이지 {currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>다음</button>
      </div>

      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Ministry;