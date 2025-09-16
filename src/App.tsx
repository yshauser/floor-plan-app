import React, { useState, useRef, useEffect } from 'react';
import FloorPlan from './components/FloorPlan';
import SeatFinder from './components/seatFinder';
import Header from './components/Header';
import LoginDialog from './components/LoginDialog';
import { AuthProvider, useAuth } from './contexts/AuthContext';
// import { checkEmployeeExists } from './services/firestoreService';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth(); //error ...
  const [showMap, setShowMap] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [isDevModeEnabled, setDevModeEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [myLocation, setMyLocation] = useState('');
  const [targetColor, setTargetColor] = useState(()=> {return localStorage.getItem('floorplan-target-color') || '#000000'; });//black
  const [startColor, setStartColor] = useState(()=> {return localStorage.getItem('floorplan-start-color')|| '#0000ff'});//blue
  const floorPlanRef = useRef<HTMLDivElement | null>(null);
  // const [loginError, setLoginError] = useState<string | null>(null); // Removed

  useEffect(() => {
    if (showMap && floorPlanRef.current) {
      floorPlanRef.current.scrollIntoView({ behavior: 'smooth' , block:'center'});
    }
  }, [showMap]);

  // Removed handleLogin function

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading user session...</p>
      </div>
    );
  }

  if (!user) {
    return <LoginDialog />; // No props needed for LoginDialog now
  }

  return (
    <>
      <Header
        setStartColor={setStartColor}
        setTargetColor={setTargetColor}
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
        isDevModeEnabled={isDevModeEnabled}
        setDevModeEnabled={setDevModeEnabled}
        userEmail={user.email || 'Guest'} // Pass user email to Header
      />
      {/* <SeatFinder onShowOnMap={handleShowOnMap} /> */}
      <SeatFinder
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onShowOnMap={(value, value2) => {
          setSearchValue(value);
          setMyLocation(value2);
          setShowMap(true);
        }}
        onSetMyLocation={(location) => {
          setMyLocation(location);
          localStorage.setItem('myLocation', location); // Also update localStorage
        }}
        onSetTargetLocation={(location) => {
          setSearchValue(location);
        }}
      />

      {showMap && (
        <div ref={floorPlanRef}>
          <FloorPlan
            showNavigation={showNavigation}
            isDevModeEnabled={isDevModeEnabled}
            targetRoom={searchValue.trim()}
            setTargetRoom={setSearchValue}
            myLocation={myLocation.trim()}
            setMyLocation={setMyLocation}
            startColor={startColor}
            setStartColor={setStartColor}
            targetColor={targetColor}
            setTargetColor={setTargetColor}
            onClose={()=>{
              console.log('Floor plan closed');
              setShowMap(false);
            }}
          />
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
