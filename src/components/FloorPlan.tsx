import React, { useState, useEffect } from 'react'; 
import type { Point } from '../data/floorplan';
import { Search, Navigation, X, Route, RotateCcw } from 'lucide-react'; 
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './FloorPlan.css';
import points_4 from '../data/points_4.json'; 
import points_3 from '../data/points_3.json'; 
import points_2 from '../data/points_2.json'; 
import points_1 from '../data/points_1.json'; 
import { PathRenderer, usePathfinding } from './pathfinding'; // Import pathfinding functions

interface FloorPlanProps {
  showNavigation: boolean;
  targetRoom: string;
  setTargetRoom: (value: string) => void;
  myLocation: string;
  setMyLocation: (value: string) => void;
  startColor: string;
  setStartColor: (value: string) => void;
  targetColor: string;
  setTargetColor: (value: string) => void;
  onClose?: () => void;
}

const FloorPlan: React.FC<FloorPlanProps> = ({ 
  showNavigation,
  targetRoom,
  setTargetRoom, 
  myLocation, 
  setMyLocation, 
  startColor, 
  setStartColor, 
  targetColor, 
  setTargetColor,
  onClose 
}) => {
  const [showPoints, setShowPoints] = useState<boolean>(false);
  const [startSize, setStartSize] = useState<number>(8);
  const [targetSize, setTargetSize] = useState<number>(8);
  const [showPath, setShowPath] = useState<boolean>(false);
  const [pathColor, setPathColor] = useState<string>('#ff0000');
  const [pathWidth, setPathWidth] = useState<number>(2);
  const [showArrows, setShowArrows] = useState<boolean>(false);

  // Save colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('floorplan-start-color', startColor);
  }, [startColor]);

  useEffect(() => {
    localStorage.setItem('floorplan-target-color', targetColor);
  }, [targetColor]);

  function getFirstChar(targetRoom?: string, myLocation?: string){
    const firstChar = targetRoom?.charAt(0) || myLocation?.charAt(0);
    return firstChar
  }

const pointsMap: Record<string, Point[]> = {
  '1': points_1,
  '2': points_2,
  '3': points_3,
  '4': points_4,
};
  const firstChar = getFirstChar(targetRoom, myLocation);
  const selectedPoints = pointsMap[firstChar as keyof typeof pointsMap] ?? [];

  const filteredPoints = selectedPoints.filter(point => (!point.label.startsWith('J')&&!point.label.startsWith('B')));
  const junctions = selectedPoints.filter(point => point.label.startsWith('J') || point.label.startsWith('B'));
  const { currentPath, isPathfinding, findAndSetPath, clearPath } = usePathfinding(junctions);

  // console.log('Debug - currentPath:', currentPath);
  // console.log('Debug - myLocation:', myLocation);
  // console.log('Debug - targetRoom:', targetRoom);
  // console.log('Debug - junctions count:', junctions.length);

  
  const floorPlanSrc = (() => {
    switch (firstChar) {
      case '1':
        return '/floor-plan-app/FloorPlan_1_clear.png';
      case '2':
        return '/floor-plan-app/FloorPlan_2_clear.png';
      case '3':
        return '/floor-plan-app/FloorPlan_3_clear.png';
      case '4':
        return '/floor-plan-app/FloorPlan_4.png';
      default:
        return '';
    }
  })();

  const shouldShowPoint = (label: string) => {
    return showPoints || label === myLocation || label === targetRoom;
  };

  const getPointColor = (label: string) => {
    if (label === myLocation) return startColor;
    if (label === targetRoom) return targetColor;
    return 'red';
  };

  const getPointSize = (label: string) => {
    if (label === myLocation) return startSize;
    if (label === targetRoom) return targetSize;
    return 8;
  };

  // Find nearest junctions to room points
  const findNearestJunction = React.useCallback((roomLabel: string): string | null => {
    const roomPoint = filteredPoints.find(p => p.label === roomLabel);
    if (!roomPoint) return null;

    let nearestJunction = null;
    let minDistance = Infinity;

    junctions.forEach(junction => {
      const distance = Math.sqrt(
        Math.pow(junction.x - roomPoint.x, 2) + 
        Math.pow(junction.y - roomPoint.y, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearestJunction = junction.label;
      }
    });

    // console.log('Debug - findNearestJunction for', roomLabel, ':', nearestJunction);
    return nearestJunction;
  }, [filteredPoints, junctions]);

  const handleFindPath = React.useCallback(() => {
    // console.log('Debug - handleFindPath called');
    if (!myLocation || !targetRoom) {
      // console.log('Debug - Missing locations:', { myLocation, targetRoom });
      return;
    }

    // Find nearest junctions for both locations
    const startJunction = findNearestJunction(myLocation);
    const targetJunction = findNearestJunction(targetRoom);

    // console.log('Debug - Found junctions:', { startJunction, targetJunction });

    if (!startJunction || !targetJunction) {
      // console.log('Debug - Could not find junctions');
      return;
    }

    if (startJunction === targetJunction) {
      // console.log('Debug - Same junction');
      return;
    }

    // console.log('Debug - Calling findAndSetPath');
    findAndSetPath(startJunction, targetJunction, myLocation, targetRoom);
    setShowPath(true);
  }, [myLocation, targetRoom, findNearestJunction, findAndSetPath]);

  const handleClearPath = React.useCallback(() => {
    clearPath();
    setShowPath(false);
  }, [clearPath]);

  // Auto-find path when both locations are set
  // useEffect(() => {
  //   if (myLocation && targetRoom && myLocation.trim() !== '' && targetRoom.trim() !== '') {
  //     console.log('Debug - Auto-finding path for:', myLocation, 'to', targetRoom);
  //     handleFindPath();
  //   } else {
  //     console.log('Debug - Clearing path, locations incomplete');
  //     handleClearPath();
  //   }
  // }, [myLocation, targetRoom]);

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
              <input
                type="text"
                placeholder="e.g., 4N05A"
                value={myLocation}
                onChange={(e) => setMyLocation(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                className="floor-plan-input"
              />
            </div>
          </div>

          {/* Pathfinding controls */}
          {showNavigation && (
            <div className="floor-plan-pathfinding-controls">
              <button
                onClick={handleFindPath}
                disabled={isPathfinding || !myLocation || !targetRoom}
                className="floor-plan-path-button"
              >
                <Route size={16} />
                {isPathfinding ? 'Finding Path...' : 'Find Path'}
              </button>
              
              {currentPath && (
                <button
                  onClick={handleClearPath}
                  className="floor-plan-clear-button"
                >
                  <RotateCcw size={16} />
                  Clear Path
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="floor-plan-legend">
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

            {/* Path styling */}
            {showNavigation && showPath && currentPath && (
              <div className="floor-plan-legend-item">
                <label>Path</label>
                <div className="floor-plan-legend-controls">
                  <input
                    type="range"
                    min={1}
                    max={8}
                    value={pathWidth}
                    onChange={(e) => setPathWidth(Number(e.target.value))}
                  />
                  <input
                    type="color"
                    value={pathColor}
                    onChange={(e) => setPathColor(e.target.value)}
                    className="floor-plan-color-picker"
                  />
                  <label className="floor-plan-checkbox">
                    <input
                      type="checkbox"
                      checked={showArrows}
                      onChange={(e) => setShowArrows(e.target.checked)}
                    />
                    Arrows
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Path information */}
        {showNavigation && currentPath && (
          <div className="floor-plan-path-info">
            <p>Path found: {currentPath.path.length} junctions</p>
            <p>Route: {currentPath.path.join(' → ')}</p>
          </div>
        )}
        
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
            {({ resetTransform }) => (
              <>
                <button className="fit-to-view-button" onClick={() => resetTransform()}>
                  Fit to view
                </button>
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
                    
                    {/* Render path */}
                    {showNavigation && showPath && currentPath && (
                      <PathRenderer
                        segments={currentPath.segments}
                        pathColor={pathColor}
                        pathWidth={pathWidth}
                        showArrows={showArrows}
                        arrowColor={pathColor}
                      />
                    )}
                    
                    {/* Render room points */}
                    {filteredPoints.map((point: Point, index: number) => {
                      if (!shouldShowPoint(point.label)) return null;
                      return (
                        <div
                          key={index}
                          style={{
                            position: 'absolute',
                            left: `${point.x}%`,
                            top: `${point.y - 0.5}%`,
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: getPointColor(point.label),
                            borderRadius: '50%',
                            width: `${getPointSize(point.label)}px`,
                            height: `${getPointSize(point.label)}px`,
                            pointerEvents: 'none',
                            zIndex: 1002
                          }}
                        />
                      );
                    })}

                    {/* Render junction points when showPoints is enabled */}
                    {showPoints && junctions.map((junction: Point, index: number) => (
                      <div
                        key={`junction-${index}`}
                        style={{
                          position: 'absolute',
                          left: `${junction.x}%`,
                          top: `${junction.y - 0.5}%`,
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: 'blue',
                          borderRadius: '50%',
                          width: '6px',
                          height: '6px',
                          pointerEvents: 'none',
                          zIndex: 999
                        }}
                      />
                    ))}
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
