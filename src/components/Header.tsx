// src/components/Header.tsx

import React, {useState, useRef, useEffect} from 'react';
import './Header.css';
import packageJson from '../../package.json'; // Adjust path as needed

interface HeaderProps {
  setStartColor?: (value: string) => void;
  setTargetColor?: (value: string) => void;
  showNavigation: boolean;
  setShowNavigation: (value: boolean) => void;
  isDevModeEnabled: boolean;
  setDevModeEnabled: (value: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({setStartColor, setTargetColor, showNavigation, setShowNavigation,isDevModeEnabled, setDevModeEnabled }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  
  // const [isDevModeEnabled, setDevModeEnabled] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  
  // const toggleDevMode = () => {
  //   setDevModeEnabled(prev => !prev);
  //   setMenuOpen(false);
  // };

  const toggleSettings = () => {
    setSettingsOpen(prev => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target as Node)
    ){
      setMenuOpen(false);
    }
  };

  const handleRestoreDefaults = () => {
    // Clear localStorage
    localStorage.removeItem('floorplan-start-color');
    localStorage.removeItem('floorplan-target-color');
    
    // Reset values to defaults
    if (setStartColor) setStartColor('#0000ff'); // blue
    if (setTargetColor) setTargetColor('#000000'); // black
    
    // Close menu
    setMenuOpen(false);
    
    // Optional: Show confirmation or feedback
    // alert('Settings restored to defaults');
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
              <div onClick={handleRestoreDefaults}>
                Restore Default Colors
              </div>
              <div onClick={() => { setShowAbout(true); setMenuOpen(false); }}>
                About
              </div>

              <div onClick={toggleSettings}>Settings ▸</div>
              {isSettingsOpen && (
                <div style={{ paddingLeft: '10px' }}>
                  <div onClick={() => { setShowNavigation(!showNavigation); setMenuOpen(false); setSettingsOpen(false); }}>
                    {showNavigation ? 'Hide Navigation' : 'Show Navigation'}
                  </div>
                  <div onClick={()=> {setDevModeEnabled(!isDevModeEnabled); setMenuOpen(false); setSettingsOpen(false); }}>
                    {isDevModeEnabled ? 'Close Dev Mode' : 'Enable Dev Mode'}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      

      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Seat Finder</h2>
            <p>Version: {packageJson.version}</p>
            <p>Date: {packageJson.date}</p>
            <button onClick={() => setShowAbout(false)} className="about-close-button">Close</button>
          </div>
        </div>
      )}
    </header>
  );

};

export default Header;