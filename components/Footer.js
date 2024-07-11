// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="toolbar">
        <button className="icon-button" style={{ backgroundImage: "url('/images/Group 4548.svg')" }} onClick={() => window.open('https://example.com/page1')}></button>
        <button className="icon-button" style={{ backgroundImage: "url('/images/Vector (3).svg')" }} onClick={() => window.open('https://example.com/page2')}></button>
        <button className="icon-button" style={{ backgroundImage: "url('/images/Group 427318962.svg')" }} onClick={() => window.open('https://example.com/page6')}></button>
        <button className="icon-button" style={{ backgroundImage: "url('/images/tesla.svg')" }} onClick={() => window.open('https://example.com/page4')}></button>
        <button className="icon-button" style={{ backgroundImage: "url('/images/Vector (1).svg')" }} onClick={() => window.open('https://example.com/page5')}></button>
        <button className="icon-button" style={{ backgroundImage: "url('/images/Vector (2).svg')" }} onClick={() => window.open('https://example.com/page6')}></button>
        <button className="icon-button" style={{ backgroundImage: "url('/images/Group 427318961.svg')" }} onClick={() => window.open('https://example.com/page3')}></button>
      </div>
    </footer>
  );
};

export default Footer;
