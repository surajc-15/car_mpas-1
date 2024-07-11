// components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="time-date-weather">
          <div className="time-date">
            <p id="time">12:45 PM</p>
            <p id="date">Sunday, 5 May</p>
          </div>
          <div className="weather">
            <p id="weather-icon"><img src="/images/Vector (6).svg" alt="" /></p>
            <p id="temperature">23°C / 27°C</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="connectivity-icons">
          <div className="icon" style={{ backgroundImage: "url('/images/Vector (4).svg')" }}></div>
          <div className="icon" style={{ backgroundImage: "url('/images/Vector (5).svg')" }}></div>
          <div className="icon" style={{ backgroundImage: "url('/images/Union (3).svg')" }}></div>
        </div>
        <div className="battery-info-bar">
          <div className="battery-info">
            <div className="remaining">
              <span className="remaining-km" id="distance">200</span><span className="unit">km</span>
              <div className="remaining-text">Remaining</div>
            </div>
            <div className="battery">
              <span className="battery-percentage" id="battery">85</span><span className="unit">%</span>
              <div className="battery-text">Battery</div>
            </div>
            <div className="average">
              <span className="avg-wh" id="average">128</span><span className="unit">Wh/km</span>
              <div className="average-text">Average</div>
            </div>
          </div>
          <div className="battery-bar-container">
            <div className="battery-bar-base">
              <div className="battery-bar-fill" id="battery-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
