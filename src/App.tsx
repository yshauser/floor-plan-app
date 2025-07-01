import React, { useState } from 'react';
import FloorPlan from './components/FloorPlan';
import SeatFinder from './components/seatFinder';
import Header from './components/Header';
import { svgContent } from './data/floorplan';

const App: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // const handleShowOnMap = (value: string) => {
  //   setSearchValue(value);
  //   setShowMap(true);
  // };

  return (
    <>
      <Header />
      {/* <SeatFinder onShowOnMap={handleShowOnMap} /> */}
      {/* {showMap && <FloorPlan svgContent={svgContent} initialSearch={searchValue} />} */}
      <SeatFinder
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onShowOnMap={(value) => {
          setSearchValue(value);
          setShowMap(true);
        }}
      />

      {showMap && (
        <FloorPlan
          svgContent={svgContent}
          searchValue={searchValue.trim()}
          setSearchValue={setSearchValue}
          onClose={()=>{
            console.log('Floor plan closed');
            setShowMap(false);
          }}
        />
      )}
    </>
  );
};

export default App;
