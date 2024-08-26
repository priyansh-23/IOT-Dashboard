import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>IoT Project</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/devices">Devices</Link>
        <Link to="/anomalies">Anomalies</Link>
        <Link to="/performance">Model Performance</Link>
      </nav>
    </header>
  );
}

export default Header;
