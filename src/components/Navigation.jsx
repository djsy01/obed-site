import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* 홈으로 이동하는 링크 */}
        <li><Link to="/team">Team</Link></li> {/* 팀 소개 페이지로 이동하는 링크 */}
        <li><Link to="/ministry">Ministry</Link></li>  {/* 사역 페이지로 이동하는 링크 */}
        <li><Link to="/Sheet">Sheet</Link></li> {/* 악보 페이지로 이동하는 링크 */}
        <li><Link to="/map">Map</Link></li> {/* 지도 페이지로 이동하는 링크 */}
      </ul>
    </nav>
  );
}

export default Navigation;
