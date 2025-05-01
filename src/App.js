import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // 헤더 컴포넌트
import Navigation from './components/Navigation'; // 네비게이션 컴포넌트
import Footer from './components/Footer'; // 푸터 컴포넌트

import Home from './pages/Home'; // 홈 페이지
import Team from './pages/Team'; // 팀 소개 페이지
import Ministry from './pages/Ministry'; // 사역 페이지
import Sheet from './pages/Sheet'; //악보 페이지
import Map from './pages/Map'; // 지도 페이지

function App() {
  return (
    <Router>
      <Header /> {/* 헤더를 상단에 배치 */}
      <Navigation /> {/* 네비게이션 메뉴를 상단에 배치 */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 홈 페이지 */}
          <Route path="/team" element={<Team />} /> {/* 팀 소개 페이지 */}
          <Route path="/ministry" element={<Ministry />} /> {/* 사역 페이지 */}
          <Route path='/Sheet' element={<Sheet />} /> {/* 악보 페이지 */}
          <Route path="/map" element={<Map />} /> {/* 지도 페이지 */}
        </Routes>
      </main>

      <Footer /> {/* 푸터를 하단에 배치 */}
    </Router>
  );
}

export default App;
