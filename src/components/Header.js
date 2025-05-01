import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';  // 노래 플레이어 import
import './Header.css';

function Header() {
  const [isPlaying, setIsPlaying] = useState(false); // 음악 재생 상태 관리

  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/assets/image/LOG.JPG'} alt="OBED Worship Logo" className="logo" />
      <h1>OBED Worship</h1>
      <p>하나님을 예배하는 공동체</p>
      <div className="music-player-container">
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </header>
  );
}

export default Header;
