// src/components/Header.tsx

import React, {useState, useRef, useEffect} from 'react';
import './Header.css';
import packageJson from '../../package.json'; // Adjust path as needed


const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);


  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target as Node)
    ){
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
 
  return (
      <header className="header">
        <div className="header-left" dir="ltr" ref={menuRef}>
          <button className="menu-button" onClick={toggleMenu} aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="menu-dropdown">
              <div onClick={() => { setShowAbout(true); setMenuOpen(false); }}>
                about
              </div>
            </div>
          )}
        </div>

      

      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Seat Finder</h2>
            <p>Version: {packageJson.version}</p>
            <button onClick={() => setShowAbout(false)} className="about-close-button">Close</button>
          </div>
        </div>
      )}
    </header>
  );

};

export default Header;