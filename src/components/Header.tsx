// src/components/Header.tsx

import React, {useState, useRef, useEffect} from 'react';
import './Header.css';
import packageJson from '../../package.json'; // Adjust path as needed
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  setStartColor?: (value: string) => void;
  setTargetColor?: (value: string) => void;
  showNavigation: boolean;
  setShowNavigation: (value: boolean) => void;
  isDevModeEnabled: boolean;
  setDevModeEnabled: (value: boolean) => void;
  userEmail: string;
}
const Header: React.FC<HeaderProps> = ({setStartColor, setTargetColor, showNavigation, setShowNavigation,isDevModeEnabled, setDevModeEnabled, userEmail }) => {
  const { logout } = useAuth(); // user is now passed as a prop
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  
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
              <>
                <div className="submenu" onClick={() => { setShowNavigation(!showNavigation); setMenuOpen(false); setSettingsOpen(false); }}>
                  {showNavigation ? 'Hide Navigation' : 'Show Navigation'}
                </div>
                <div  className="submenu" onClick={()=> {setDevModeEnabled(!isDevModeEnabled); setMenuOpen(false); setSettingsOpen(false); }}>
                  {isDevModeEnabled ? 'Close Dev Mode' : 'Enable Dev Mode'}
                </div>
              </>
              )}
              <div onClick={() => { setShowLogoutConfirm(true); setMenuOpen(false); }}>
                Logout ({userEmail})
              </div>
            </div>
          )}
        </div>

        {showLogoutConfirm && (
          <div className="modal-overlay" onClick={() => setShowLogoutConfirm(false)}>
            <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Confirm Logout</h2>
              <p>Do you want to logout?</p>
              <button onClick={() => { logout(); setShowLogoutConfirm(false); }} className="confirm-button">Yes</button>
              <button onClick={() => setShowLogoutConfirm(false)} className="cancel-button">No</button>
            </div>
          </div>
        )}

      

      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Seat Finder</h2>
            <p>Version: {packageJson.version}</p>
            <p>Date: {packageJson.date}</p>
            <p>Logged in as: {userEmail}</p>
            {/* <p>Seat Number: {userSeatNumber}</p> */}
            <button onClick={() => setShowAbout(false)} className="about-close-button">Close</button>
          </div>
        </div>
      )}
    </header>
  );

};

export default Header;