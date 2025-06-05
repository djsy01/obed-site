// import 제거 (public 사용 시 불필요)
import React, { useState } from 'react';
import './Ministry.css';

const seasonList = [
  // season 데이터 예시, 실제로는 더 많은 시즌을 넣으면 됨
  {
    key: "25season1",
    title: "2025년 Season 1 - “하나됨”",
    description: `우리는 한 몸 아래 하나님께 예배하는 예배팀이 되길 원하며
하나됨을 통해 교회를 섬기고, 교회를 넘어 열방을 섬기길 원합니다.`,
    verse: `우리가 다 하나님의 아들을 믿는 것과 아는 일에 하나가 되어
온전한 사람을 이루어 그리스도의 장성한 분량이 충만한 데까지 이르리니
- 에베소서 4:13 -`,
    imgSrc: "/assets/image/oneness/oneness.png",
  },
];

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

const imagesPerPage = 10;  // 한 페이지에 보여줄 시즌 개수

function Ministry() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSeasonKey, setCurrentSeasonKey] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const indexOfLastSeason = currentPage * imagesPerPage;
  const indexOfFirstSeason = indexOfLastSeason - imagesPerPage;
  const currentSeasons = seasonList.slice(indexOfFirstSeason, indexOfLastSeason);
  const totalPages = Math.ceil(seasonList.length / imagesPerPage);

  const openGallery = (seasonKey) => {
    setCurrentSeasonKey(seasonKey);
    setCurrentImageIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const goToPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  const nextImage = () => {
    if (!currentSeasonKey) return;
    const images = galleryImages[currentSeasonKey] || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!currentSeasonKey) return;
    const images = galleryImages[currentSeasonKey] || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="ministry-container">
      <main className="main-content">
        <div className="season-gallery">
          {currentSeasons.map((season) => (
            <div
              key={season.key}
              className="season-card-horizontal"
              onClick={() => openGallery(season.key)}
            >
              <div className="season-img-wrapper">
                <img src={season.imgSrc} alt={season.title} />
              </div>
              <div className="season-info">
                <h3>{season.title}</h3>
                <p className="description" style={{ whiteSpace: "pre-line" }}>
                  {season.description}
                </p>
                <blockquote className="verse" style={{ whiteSpace: "pre-line" }}>
                  {season.verse}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            이전
          </button>
          <span>페이지 {currentPage} / {totalPages}</span>
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            다음
          </button>
        </div>

        <div className="pagination-buttons">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>

      {isGalleryOpen && currentSeasonKey && (
        <div className="gallery-popup">
          <span className="close" onClick={closeGallery}>&times;</span>
          <div className="gallery-content">
            <button className="prev-button" onClick={prevImage}>&lt;</button>
            <img
              src={galleryImages[currentSeasonKey][currentImageIndex]}
              className="main-gallery-img"
              alt={`메인 이미지 ${currentImageIndex}`}
            />
            <button className="next-button" onClick={nextImage}>&gt;</button>
            <div className="thumbnail-list">
              {galleryImages[currentSeasonKey].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className={`thumbnail-img ${i === currentImageIndex ? 'active' : ''}`}
                  alt={`썸네일 ${i}`}
                  onClick={() => setCurrentImageIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer 컴포넌트 있으면 이렇게 넣으세요 */}
      {/* <Footer /> */}
    </div>
  );
}

export default Ministry;