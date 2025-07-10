import React, { useState, useEffect } from 'react'; 
import type { Point } from '../data/floorplan';
import { Search, Navigation, X } from 'lucide-react'; 
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './FloorPlan.css';
import points_4 from '../data/points_4.json'; 
import points_3 from '../data/points_3.json'; 


interface FloorPlanProps {
  targetRoom: string;  // search value from seat finder becomes target room in floor plan
  setTargetRoom: (value: string) => void;
  myLocation: string;
  setMyLocation: (value: string) => void;
  startColor: string;
  setStartColor: (value: string) => void;
  targetColor: string;
  setTargetColor: (value: string) => void;
  onClose?: () => void;
}

const FloorPlan: React.FC<FloorPlanProps> = ({ targetRoom, setTargetRoom, myLocation, setMyLocation, startColor, setStartColor, targetColor, setTargetColor,onClose }) => {
  const [showPoints, setShowPoints] = useState<boolean>(false);
  const [startSize, setStartSize] = useState<number>(8);
  const [targetSize, setTargetSize] = useState<number>(8);

  // Save colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('floorplan-start-color', startColor);
  }, [startColor]);

  useEffect(() => {
    localStorage.setItem('floorplan-target-color', targetColor);
  }, [targetColor]);

  // console.log  ('target', {targetRoom})

function getFirstChar(targetRoom?: string, myLocation?: string){
  const firstChar = targetRoom?.charAt(0) || myLocation?.charAt(0);
  return firstChar
}


function getFilteredPoints(): Point[] {
  const sourcePoints = firstChar === '3' ? points_3 : points_4;
  return sourcePoints.filter(point => !point.label.startsWith('J'));
}

  const firstChar = getFirstChar(targetRoom, myLocation)
  const filteredPoints = getFilteredPoints();
  const floorPlanSrc = firstChar === '3' 
    ? '/floor-plan-app/FloorPlan_3_clear.png' // ? '/floor-plan-app/FloorPlan_3.png' replace with this for image with colored meeting rooms
    : '/floor-plan-app/FloorPlan_4.png';


  const shouldShowPoint = (label: string) => {
    return showPoints || label === myLocation || label === targetRoom;
  };
  const getPointColor = (label: string) => {
    if (label === myLocation) return startColor;
    if (label === targetRoom) return targetColor;
    return 'red';
  };
  const getPointSize = (label:string) => {
    if (label === myLocation) return startSize;
    if (label === targetRoom) return targetSize;
    return 8;
  }


  return (
    <div className="floor-plan-container">
      <div className="floor-plan-content">
        <div className="floor-plan-header">
          <div className="floor-plan-header-icon-wrapper">
            <Navigation className="floor-plan-header-icon" />
          </div>
          <h2 className="floor-plan-title">Floor Map</h2>
          {onClose && (
            <button 
              onClick={onClose}
              className="floor-plan-close-button"
              aria-label="Close floor plan"
            >
              <X size={20} />
            </button>
          )}
        </div>
        
        <div className="floor-plan-controls">
          <div className="floor-plan-room-input">
            <label className="floor-plan-label">Target Room</label>
            <div className="floor-plan-input-wrapper">
              <Search className="floor-plan-search-icon" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={targetRoom}
                onChange={(e) => setTargetRoom(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                className="floor-plan-input"
              />
            </div>
          </div>

          <div className="floor-plan-room-input">
            <label className="floor-plan-label">My Location</label>
            <div className="floor-plan-input-wrapper">
              {/* <Search className="floor-plan-search-icon" /> */}
              <input
                type="text"
                placeholder="e.g., 4N05A"
                value={myLocation}
                onChange={(e) => setMyLocation(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                className="floor-plan-input"
              />
            </div>
          </div>
        </div>
        
        <div className="floor-plan-legend">
          {/* <p className="floor-plan-legend-title">Legend:</p> */}
          <div className="floor-plan-legend-list">
            {/* Target */}
            <div className="floor-plan-legend-item">
              <label>Target</label>
              <div className="floor-plan-legend-controls">
                <input 
                  type="range"
                  min={3}
                  max={20}
                  value={targetSize}
                  onChange={(e) => setTargetSize(Number(e.target.value))}
                />
                <input
                  type="color"
                  value={targetColor}
                  onChange={(e) => setTargetColor(e.target.value)}
                  className="floor-plan-color-picker"
                />
              </div>
            </div>

            {/* Start */}
            <div className="floor-plan-legend-item">
              <label>My location</label>
              <div className="floor-plan-legend-controls">
                <input
                  type="range"
                  min={3}
                  max={20}
                  value={startSize}
                  onChange={(e) => setStartSize(Number(e.target.value))}
                />
                <input
                  type="color"
                  value={startColor}
                  onChange={(e) => setStartColor(e.target.value)}
                  className="floor-plan-color-picker"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="floor-plan-frame">
          <TransformWrapper
            initialScale={1}
            centerOnInit
            limitToBounds={false}
            minScale={0.2}
            maxScale={10}
            wheel={{ step: 50 }}
            doubleClick={{ disabled: true }}
            >
            {({ resetTransform }) => ( //zoomIn, zoomOut
              <>
                  <button className="fit-to-view-button" onClick={()=>resetTransform()}>Fit to view</button>
                {/* </div> */}
                <button onClick={() => setShowPoints(!showPoints)}>
                  {showPoints ? 'Hide Points' : 'Show Points'}
                </button>
                <TransformComponent>
                  <div className="floor-plan-image-zommable-content">
                    <img
                      src={floorPlanSrc}
                      alt="Floor Plan"
                      className="floor-plan-image"
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                    {filteredPoints.map((point: Point, index: number) => {
                      if (!shouldShowPoint(point.label)) return null;
                    return (
                      <div
                        key={index}
                        style={{
                          position: 'absolute',
                          left: `${point.x}%`,
                          top: `${point.y-0.5}%`,
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: getPointColor(point.label),
                          borderRadius:'50%',
                          width: `${getPointSize(point.label)}px`,
                          height: `${getPointSize(point.label)}px`,
                          pointerEvents: 'none',
                        }}
                      >
                      </div>
                    );
                    })}
                  </div>                
                </TransformComponent>
              </>
             )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
