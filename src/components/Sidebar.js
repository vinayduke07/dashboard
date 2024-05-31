import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <h2>HO KEN</h2>
        <div className="achievement">75%</div>
        <div>
            <h3>Volume Of Purchase</h3>
            <h3>Volume Of Purchase</h3>
            <h3>Volume Of Purchase</h3>
            <h3>Volume Of Purchase</h3>
        </div>
      </div>
      <div className="status-info">
        <p>Status: </p>
        <p>Contact: Signed</p>
        <a href="http://Worth.lyon">http://Worth.lyon</a>
      </div>
    </div>
  );
};

export default Sidebar;
