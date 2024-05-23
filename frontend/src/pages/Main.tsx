import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  marginRight: '10px',
};

function HomePage() {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ color: 'white' }}>Ana Sayfa</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/Word" style={buttonStyle}>
          <button className="btn btn-primary">Kelime Ekleme Sayfası</button>
        </Link>
        <Link to="/test" style={buttonStyle}>
          <button className="btn btn-primary">Test Sayfası</button>
        </Link>
        <Link to="/Analysis">
          <button className="btn btn-primary">Analiz Sayfası</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
