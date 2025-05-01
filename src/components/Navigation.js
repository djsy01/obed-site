import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/ministry">Ministry</Link></li>
        <li><Link to="/Sheet">Sheet</Link></li>
        <li><Link to="/map">Map</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
