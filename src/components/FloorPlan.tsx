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
  isDevModeEnabled:boolean;
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
  isDevModeEnabled,
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
  const [showJunctions, setShowJunctions] = useState<boolean>(false);
  const [startSize, setStartSize] = useState<number>(8);
  const [targetSize, setTargetSize] = useState<number>(8);
  const [showPath, setShowPath] = useState<boolean>(false);
  const [pathColor, setPathColor] = useState<string>('#ff0000');
  const [pathWidth, setPathWidth] = useState<number>(2);
  const [showPathLine, setShowPathLine] = useState<boolean>(false);
  const [displayedFloor, setDisplayedFloor] = useState<string | null>(null);
  const [useStairs, setUseStairs] = useState<boolean>(true);
  const [useElevator, setUseElevator] = useState<boolean>(true);

  const targetFloorChar = targetRoom ? targetRoom.charAt(0) : null;
  const myLocationFloorChar = myLocation ? myLocation.charAt(0) : null;

  useEffect(() => {
    setDisplayedFloor(targetFloorChar);
  }, [targetFloorChar]);

  const handleSwitchFloor = () => {
    setDisplayedFloor(current => current === targetFloorChar ? myLocationFloorChar : targetFloorChar);
  };

  // Save colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('floorplan-start-color', startColor);
  }, [startColor]);

  useEffect(() => {
    localStorage.setItem('floorplan-target-color', targetColor);
  }, [targetColor]);

const pointsMap: Record<string, Point[]> = {
  '1': points_1,
  '2': points_2,
  '3': points_3,
  '4': points_4,
};
  const selectedPoints = pointsMap[displayedFloor as keyof typeof pointsMap] ?? [];

  const filteredPoints = selectedPoints.filter(point => (!point.label.startsWith('J')&&!point.label.startsWith('B')));
  const junctions = selectedPoints.filter(point => point.label.startsWith('J') || point.label.startsWith('B'));
  const allPoints = [...points_1, ...points_2, ...points_3, ...points_4];
  const allJunctions = allPoints.filter(point => point.label.startsWith('J') || point.label.startsWith('B'));
  const { currentPath, isPathfinding, findAndSetPath, clearPath } = usePathfinding(allJunctions);

  // console.log('Debug - currentPath:', currentPath);
  // console.log('Debug - myLocation:', myLocation);
  // console.log('Debug - targetRoom:', targetRoom);
  // console.log('Debug - junctions count:', junctions.length);

  
  const floorPlanSrc = (() => {
    switch (displayedFloor) {
      case '1':
        return '/floor-plan-app/FloorPlan_1_clear.png';
      case '2':
        return '/floor-plan-app/FloorPlan_2_clear.png';
      case '3':
        return '/floor-plan-app/FloorPlan_3_clear.png';
      case '4':
        return '/floor-plan-app/FloorPlan_4.png';
      default:
        return '/floor-plan-app/FloorPlan_4.png';
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
  const findNearestJunction = React.useCallback((roomLabel: string, floor: string | null): string | null => {
    if (!floor) return null;

    const floorPoints = pointsMap[floor as keyof typeof pointsMap] ?? [];
    const floorJunctions = floorPoints.filter(point => point.label.startsWith('J') || point.label.startsWith('B'));
    const roomPoint = floorPoints.find(p => p.label === roomLabel);

    if (!roomPoint) return null;

    let nearestJunction = null;
    let minDistance = Infinity;

    floorJunctions.forEach(junction => {
      const distance = Math.sqrt(
        Math.pow(junction.x - roomPoint.x, 2) +
        Math.pow(junction.y - roomPoint.y, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearestJunction = junction.label;
      }
    });

    return nearestJunction;
  }, [pointsMap]);

  const handleFindPath = React.useCallback(() => {
    console.log('Debug - handleFindPath called');
    if (!myLocation || !targetRoom) {
      // console.log('Debug - Missing locations:', { myLocation, targetRoom });
      return;
    }

    // Find nearest junctions for both locations
    const startJunction = findNearestJunction(myLocation, myLocationFloorChar);
    const targetJunction = findNearestJunction(targetRoom, targetFloorChar);

    console.log('Debug - Found junctions:', { startJunction, targetJunction });

    if (!startJunction || !targetJunction || !targetFloorChar || !myLocationFloorChar) {
      // console.log('Debug - Could not find junctions or floor chars');
      return;
    }

    if (startJunction === targetJunction) {
      // console.log('Debug - Same junction');
      return;
    }

    // console.log('Debug - Calling findAndSetPath');
    findAndSetPath(startJunction, targetJunction, myLocationFloorChar, targetFloorChar, useStairs, useElevator);
    setShowPath(true);
  }, [myLocation, targetRoom, findNearestJunction, findAndSetPath, myLocationFloorChar, targetFloorChar, useStairs, useElevator]);

  const handleClearPath = React.useCallback(() => {
    clearPath();
    setShowPath(false);
  }, [clearPath]);
  // console.log ("CURRENT", {currentPath}, showPath, showNavigation)
  // console.log (currentPath?.path.length," junctions");
  // console.log ("Route: ",currentPath?.path.join(' → '));

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
              {myLocationFloorChar && targetFloorChar && myLocationFloorChar !== targetFloorChar && (
                <div className="floor-plan-checkbox-group">
                  <label className="floor-plan-checkbox">
                    <input
                      type="checkbox"
                      checked={useStairs}
                      onChange={(e) => setUseStairs(e.target.checked)}
                    />
                    Use Stairs
                  </label>
                  <label className="floor-plan-checkbox">
                    <input
                      type="checkbox"
                      checked={useElevator}
                      onChange={(e) => setUseElevator(e.target.checked)}
                    />
                    Use Elevator
                  </label>
                </div>
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
                      checked={showPathLine}
                      onChange={(e) => setShowPathLine(e.target.checked)}
                    />
                    Path
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Path information */}
        {showNavigation && currentPath && isDevModeEnabled &&(
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
                {myLocationFloorChar && targetFloorChar && myLocationFloorChar !== targetFloorChar && (
                  <button onClick={handleSwitchFloor} className="fit-to-view-button">
                    Switch to Floor {displayedFloor === targetFloorChar ? myLocationFloorChar : targetFloorChar}
                  </button>
                )}

              {isDevModeEnabled && (
                <>
                <button onClick={() => setShowPoints(!showPoints)}>
                  {showPoints ? 'Hide Points' : 'Show Points'}
                </button>
                <button onClick={() => setShowJunctions(!showJunctions)}>
                  {showJunctions ? 'Hide Junctions' : 'Show Junctions'}
                </button>
                </>
                )}

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
                        showArrows={true}
                        showLine={showPathLine}
                        arrowColor={pathColor}
                        displayedFloor={displayedFloor}
                      />
                    )}
                    {/* Render start and end junction points of the path */}
                    {showNavigation && showPath && currentPath && currentPath.path.length > 0 &&
                        (() => {
                            const startJunctionLabel = currentPath.path[0];
                            const endJunctionLabel = currentPath.path[currentPath.path.length - 1];
                            const startJunctionPoint = junctions.find(j => j.label === startJunctionLabel);
                            const endJunctionPoint = junctions.find(j => j.label === endJunctionLabel);

                            const specialBLabel = currentPath.path.find((label, index) => {
                                if (
                                    label.startsWith('B') &&
                                    index > 0 &&
                                    index < currentPath.path.length - 1 &&
                                    currentPath.path[index - 1][1] !== currentPath.path[index + 1][1]
                                ) {
                                    return true;
                                }
                                return false;
                            });

                            const specialBPoint = junctions.find(j => j.label === specialBLabel);

                            return (
                                <>
                                    {startJunctionPoint && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: `${startJunctionPoint.x}%`,
                                                top: `${startJunctionPoint.y - 0.5}%`,
                                                transform: 'translate(-50%, -50%)',
                                                backgroundColor: 'blue',
                                                borderRadius: '5%',
                                                width: '6px',
                                                height: '6px',
                                                pointerEvents: 'none',
                                                zIndex: 999
                                            }}
                                        />
                                    )}
                                    {endJunctionPoint && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: `${endJunctionPoint.x}%`,
                                                top: `${endJunctionPoint.y - 0.5}%`,
                                                transform: 'translate(-50%, -50%)',
                                                backgroundColor: 'blue',
                                                borderRadius: '5%',
                                                width: '6px',
                                                height: '6px',
                                                pointerEvents: 'none',
                                                zIndex: 999
                                            }}
                                        />
                                    )}
                                    {specialBPoint && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: `${specialBPoint.x}%`,
                                                top: `${specialBPoint.y - 0.5}%`,
                                                transform: 'translate(-50%, -50%)',
                                                backgroundColor: 'green',
                                                borderRadius: '5%',
                                                width: '6px',
                                                height: '6px',
                                                pointerEvents: 'none',
                                                zIndex: 999
                                            }}
                                        />
                                    )}
                                </>
                            )
                        })()
                    }
                    
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

                    {/* Render junctions points */}
                   {junctions.map((point: Point, index: number) => {
                    if (!showJunctions) return null;
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
                          zIndex: 1002,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'black', // or any contrasting color
                          fontSize: '10px', // adjust as needed
                          textAlign: 'center',
                          whiteSpace: 'nowrap', 

                        }}
                      >
                        {point.label}
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
