import React, { useState, useEffect } from 'react';
import './Sheet.css'; // 필요한 CSS 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Sheet = () => {
  // 악보 카드 데이터
  const sheets = [
    {
      title: '2025년 Season1',
      subtitle: '하나됨',
      image: '/assets/image/oneness/oneness.png',
      pdf: '/assets/pdf/oneness.pdf',
    },
    // 추가 악보 데이터를 여기에 삽입...
  ];

  const cardsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(sheets.length / cardsPerPage));

  const currentSheets = sheets.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  useEffect(() => {
    setTotalPages(Math.ceil(sheets.length / cardsPerPage));
  }, [sheets.length]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="sheet-section">
      <h2>악보 자료실</h2>
      <p>악보를 클릭하면 PDF로 다운로드 가능합니다.</p>

      {/* 악보 카드들 */}
      <div className="sheet-grid">
        {currentSheets.map((sheet, index) => (
          <div className="sheet-card" key={index}>
            <img src={sheet.image} alt={sheet.title} />
            <h3>{sheet.title}</h3>
            <h4>{sheet.subtitle}</h4>
            <a href={sheet.pdf} target="_blank" rel="noopener noreferrer" download className="btn">
              <FontAwesomeIcon icon={faDownload} /> PDF 다운
            </a>
          </div>
        ))}
      </div>

      {/* 목차 */}
      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <span>페이지 {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </section>
  );
}

export default Sheet;
