import React, { useState, useRef, useEffect } from 'react';
import FloorPlan from './components/FloorPlan';
import SeatFinder from './components/seatFinder';
import Header from './components/Header';
import LoginDialog from './components/LoginDialog';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { getEmployeeByEmail } from './services/firestoreService';
import type { Employee } from './types';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [showMap, setShowMap] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const [isDevModeEnabled, setDevModeEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [myLocation, setMyLocation] = useState<string>(() => {
    const storedLocation = localStorage.getItem('myLocation');
    return storedLocation || '';
  });
  const [targetColor, setTargetColor] = useState(()=> {return localStorage.getItem('floorplan-target-color') || '#000000'; });//black
  const [startColor, setStartColor] = useState(()=> {return localStorage.getItem('floorplan-start-color')|| '#0000ff'});//blue
  const [employeeData, setEmployeeData] = useState<Employee | null>(null);
  const floorPlanRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showMap && floorPlanRef.current) {
      floorPlanRef.current.scrollIntoView({ behavior: 'smooth' , block:'center'});
    }

    const fetchEmployeeData = async () => {
      if (user?.email) {
        try {
          const employee = await getEmployeeByEmail(user.email);
          setEmployeeData(employee);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
      }
    };

    fetchEmployeeData();
  }, [showMap, user]);

  useEffect(() => {
    if (user && employeeData && !myLocation) {
      setMyLocation(employeeData.seatNumber);
    }
  }, [user, employeeData]);

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
        userEmail={user.email || 'Guest'}
      />
      {/* <SeatFinder onShowOnMap={handleShowOnMap} /> */}
      <SeatFinder
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onShowOnMap={(value, value2) => {
          if (value) {setSearchValue(value)}
          setMyLocation(value2);
          setShowMap(true);
        }}
        myLocation={myLocation}
        setMyLocation={setMyLocation}
        onSetTargetLocation={(location) => {
          setSearchValue(location);
        }}
        userSeatNumber={employeeData?.seatNumber || 'N/A'}
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
