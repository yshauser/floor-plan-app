import React, { useState } from 'react';
import FloorPlan from './components/FloorPlan';
import SeatFinder from './components/seatFinder';
import { svgContent } from './data/floorplan';

const App: React.FC = () => {
  const [showMap, setShowMap] = useState<boolean>(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen">
      <SeatFinder onToggleMap={toggleMap} showMap={showMap} />
      
      {showMap && (
        <div className="border-t border-gray-300">
          <FloorPlan svgContent={svgContent} />
        </div>
      )}
    </div>
  );
};

export default App;