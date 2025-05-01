import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/assets/image/LOG.JPG'} alt="OBED Worship Logo" className="logo" />
      <h1>OBED Worship</h1>
      <p>하나님을 예배하는 공동체</p>
    </header>
  );
}

export default Header;
