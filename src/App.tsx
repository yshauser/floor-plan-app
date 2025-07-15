import React, { useState, useRef, useEffect } from 'react';
import FloorPlan from './components/FloorPlan';
import SeatFinder from './components/seatFinder';
import Header from './components/Header';
// import { svgContent } from './data/floorplan';

const App: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [myLocation, setMyLocation] = useState('');
  const [targetColor, setTargetColor] = useState(()=> {return localStorage.getItem('floorplan-target-color') || '#000000'; });//black
  const [startColor, setStartColor] = useState(()=> {return localStorage.getItem('floorplan-start-color')|| '#0000ff'});//blue
  const floorPlanRef = useRef<HTMLDivElement | null>(null);

  // console.log ('app', {searchValue, myLocation, startColor, targetColor})
  useEffect(() => {
    if (showMap && floorPlanRef.current) {
      floorPlanRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showMap]);

  return (
    <>
      <Header 
        setStartColor={setStartColor}  
        setTargetColor={setTargetColor}
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
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
      />

      {showMap && (
        <div ref={floorPlanRef}>
          <FloorPlan
            showNavigation={showNavigation}
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

export default App;
