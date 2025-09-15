import React, { useState, useEffect } from 'react'; 
import type { Point, MeetingRoom, FacilityRoom, Employee } from '../types';
import { Search, Navigation, X, Route, RotateCcw, Building2, Users } from 'lucide-react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './FloorPlan.css';
import { getAllPointsFromAllMaps, getMeetingRooms, getFacilityRooms, getEmployees } from '../services/firestoreService';
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
  // setStartColor, 
  targetColor, 
  // setTargetColor,
  onClose 
}) => {
  const [showPoints, setShowPoints] = useState<boolean>(false);
  const [showJunctions, setShowJunctions] = useState<boolean>(false);
  const [showMeetingRooms, setShowMeetingRooms] = useState<boolean>(false);
  // const [startSize, setStartSize] = useState<number>(18);
  const startSize = 18;
  // const [targetSize, setTargetSize] = useState<number>(18);
  const targetSize = 18;
  const [showPath, setShowPath] = useState<boolean>(false);
  // const [pathColor, setPathColor] = useState<string>('#ff0000');
  const pathColor = '#ff0000';
  // const [pathWidth, setPathWidth] = useState<number>(2);
  const pathWidth = 2;
  // const [showPathLine, setShowPathLine] = useState<boolean>(false);
  const showPathLine = false;
  const [displayedFloor, setDisplayedFloor] = useState<string | null>(null);
  const [useStairs, setUseStairs] = useState<boolean>(true);
  const [useElevator, setUseElevator] = useState<boolean>(true);

  const targetFloorChar = targetRoom ? targetRoom.charAt(0) : null;
  const myLocationFloorChar = myLocation ? myLocation.charAt(0) : null;

  const [allPointsList, setAllPointsList] = useState<Record<string, Point[]>>({});
  const [meetingRoomList, setMeetingRoomList] = useState<MeetingRoom[]>([]);
  const [facilityRoomList, setFacilityRoomList] = useState<FacilityRoom[]>([]);
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [targetRoomSearchValue, setTargetRoomSearchValue] = useState('');
  const [filteredTargetRooms, setFilteredTargetRooms] = useState<(Point | MeetingRoom | FacilityRoom | Employee)[]>([]);
  const [selectedTargetRoomData, setSelectedTargetRoomData] = useState<Point | MeetingRoom | FacilityRoom | Employee | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPoints = await getAllPointsFromAllMaps();
        const meetingRooms = await getMeetingRooms();
        const facilityRooms = await getFacilityRooms();
        const employees = await getEmployees();
        setAllPointsList(allPoints);
        setMeetingRoomList(meetingRooms);
        setFacilityRoomList(facilityRooms);
        setEmployeeList(employees);
      } catch (error)
      {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  console.log ('Debug - ALL points from DB', allPointsList);


  useEffect(() => {
    setDisplayedFloor(targetFloorChar);
  }, [targetFloorChar]);

  const handleSwitchFloor = () => {
    setDisplayedFloor(current => current === targetFloorChar ? myLocationFloorChar : targetFloorChar);
  };

  useEffect(() => {
    handleClearPath();
  },[targetRoom, myLocation]);

  // Save colors to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('floorplan-start-color', startColor);
  }, [startColor]);

  useEffect(() => {
    localStorage.setItem('floorplan-target-color', targetColor);
  }, [targetColor]);

  
  const allSearchableRooms = React.useMemo(() => {
    const all: (Point | MeetingRoom | FacilityRoom | Employee)[] = [];
    Object.values(allPointsList).flat().forEach(point => {
      if (!point.label.startsWith('J') && !point.label.startsWith('B')) {
        all.push(point);
      }
    });
    meetingRoomList.forEach(room => all.push(room));
    facilityRoomList.forEach(room => all.push(room));
    employeeList.forEach(employee => all.push(employee));
    return all;
  }, [allPointsList, meetingRoomList, facilityRoomList, employeeList]);

  React.useEffect(() => {
    const trimmedQuery = targetRoomSearchValue.trim().toLowerCase();
    if (!trimmedQuery) {
      setFilteredTargetRooms([]);
      return;
    }

    const filtered = allSearchableRooms.filter(item => {
      if ('Name' in item && 'roomNumber' in item) { // MeetingRoom
        const roomName = item.Name.toLowerCase();
        const roomNumber = item.roomNumber.toLowerCase();
        return roomName.includes(trimmedQuery) || roomNumber.includes(trimmedQuery);
      } else if ('Type' in item && 'roomNumber' in item) { // FacilityRoom
        const roomType = item.Type.toLowerCase();
        const roomNumber = item.roomNumber.toLowerCase();
        return roomType.includes(trimmedQuery) || roomNumber.includes(trimmedQuery);
      } else if ('firstName' in item && 'lastName' in item) { // Employee
        const firstName = item.firstName.toLowerCase();
        const lastName = item.lastName.toLowerCase();
        const seatNumber = item.seatNumber.toLowerCase();
        const fullName = `${firstName} ${lastName}`;
        const reverseFullName = `${lastName} ${firstName}`;
        return (
          firstName.includes(trimmedQuery) ||
          lastName.includes(trimmedQuery) ||
          seatNumber.includes(trimmedQuery) ||
          fullName.includes(trimmedQuery) ||
          reverseFullName.includes(trimmedQuery)
        );
      } else if ('label' in item) { // Point
        const label = item.label.toLowerCase();
        return label.includes(trimmedQuery);
      }
      return false;
    });
    setFilteredTargetRooms(filtered);
  }, [targetRoomSearchValue, allSearchableRooms]);

  const selectedPoints = displayedFloor ? allPointsList[displayedFloor] ?? [] : [];
  const filteredPoints = selectedPoints.filter(point => (!point.label.startsWith('J')&&!point.label.startsWith('B')));
  // console.log ('Debug - FILTER', {selectedPoints, filteredPoints, displayedFloor, allPointsList, targetFloorChar})
  const junctions = selectedPoints.filter(point => point.label.startsWith('J') || point.label.startsWith('B'));
  const meetingRooms = selectedPoints.filter(point => point.label.startsWith('Meeting'));
  // const allPoints = allPointsList;
  const allPoints: Point[] = Object.values(allPointsList).flat();
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
        return '/floor-plan-app/FloorPlan_4 - Copy.png';
      default:
        return '/floor-plan-app/FloorPlan_4 - Copy.png';
    }
  })();

  const shouldShowPoint = (label: string) => {
    return showPoints || label === myLocation || label === targetRoom;
  };

  const getPointColor = (label: string) => {
    // console.log ('getPointColor', {startColor, targetColor})
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

    const floorPoints = allPointsList[floor as keyof typeof allPointsList] ?? [];
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
  }, [allPointsList]);

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
    findAndSetPath(targetJunction, startJunction, targetFloorChar, myLocationFloorChar, useStairs, useElevator);
    setDisplayedFloor(myLocationFloorChar);
    setShowPath(true);
  }, [myLocation, targetRoom, findNearestJunction, findAndSetPath, myLocationFloorChar, targetFloorChar, useStairs, useElevator]);

  const handleClearPath = React.useCallback(() => {
    clearPath();
    setShowPath(false);
  }, [clearPath]);

  const handleTargetRoomSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetRoomSearchValue(event.target.value);
    if (selectedTargetRoomData) {
      setSelectedTargetRoomData(null);
    }
  };

  const selectTargetRoom = (item: Point | MeetingRoom | FacilityRoom | Employee) => {
    setSelectedTargetRoomData(item);
    if ('label' in item) {
      setTargetRoom(item.label);
      setTargetRoomSearchValue(item.label);
    } else if ('Name' in item) {
      setTargetRoom(item.roomNumber);
      setTargetRoomSearchValue(item.Name);
    } else if ('Type' in item) {
      setTargetRoom(item.roomNumber);
      setTargetRoomSearchValue(item.Type);
    } else if ('firstName' in item) {
      setTargetRoom(item.seatNumber);
      setTargetRoomSearchValue(`${item.firstName} ${item.lastName}`);
    }
    setFilteredTargetRooms([]); // Clear results after selection
  };

  const clearTargetRoomSelection = () => {
    setSelectedTargetRoomData(null);
    setTargetRoom('');
    setTargetRoomSearchValue('');
  };

  const shouldShowTargetRoomResults = targetRoomSearchValue.trim() && filteredTargetRooms.length > 0 && !selectedTargetRoomData;

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
                value={selectedTargetRoomData ?
                  ('Name' in selectedTargetRoomData ? selectedTargetRoomData.Name :
                  ('Type' in selectedTargetRoomData ? selectedTargetRoomData.Type :
                  ('firstName' in selectedTargetRoomData ? `${selectedTargetRoomData.firstName} ${selectedTargetRoomData.lastName}` : selectedTargetRoomData.label)))
                  : targetRoomSearchValue}
                onChange={handleTargetRoomSearchChange}
                className="floor-plan-input"
              />
              {selectedTargetRoomData && (
                <button
                  className="clear-search-button"
                  onClick={clearTargetRoomSelection}
                  aria-label="Clear target room selection"
                >
                  <X className="floor-plan-search-icon" />
                </button>
              )}
            </div>
            {shouldShowTargetRoomResults && (
              <div className="floor-plan-search-results-container">
                {filteredTargetRooms.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => selectTargetRoom(item)}
                    className="floor-plan-search-result-item"
                  >
                    {'Name' in item ? (
                      <>
                        <Building2 size={16} />
                        <span>{item.Name} ({item.roomNumber})</span>
                      </>
                    ) : 'Type' in item ? (
                      <>
                        <Building2 size={16} />
                        <span>{item.Type} ({item.roomNumber})</span>
                      </>
                    ) : 'firstName' in item ? (
                      <>
                        <Users size={16} />
                        <span>{item.firstName} {item.lastName} ({item.seatNumber})</span>
                      </>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
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
            {/* <div className="floor-plan-legend-item">
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
            </div> */}

            {/* Start */}
            {/* <div className="floor-plan-legend-item">
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
            </div> */}

            {/* Path styling */}
            {/* {showNavigation && showPath && currentPath && (
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
            )} */}
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
                <button onClick={() => setShowMeetingRooms(!showMeetingRooms)}>
                  {showMeetingRooms ? 'Hide Meeting Rooms' : 'Show Meeting Rooms'}
                </button>
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

                            let specialBLabel = currentPath.path.find((label, index) => {
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
                            if (!specialBLabel) {
                            const bLabels = currentPath.path.filter(label => label.startsWith('B'));
                              specialBLabel = bLabels[0];
                            }
                            const firstBPoint = junctions.find(j => j.label === specialBLabel);

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
                                    {firstBPoint && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: `${firstBPoint.x}%`,
                                                top: `${firstBPoint.y - 0.5}%`,
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
                          className="point"
                          style={{
                            position: 'absolute',
                            left: `${point.x}%`,
                            top: `${point.y - 0.5}%`,
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: getPointColor(point.label),
                            borderRadius: '50%',
                            width: `${getPointSize(point.label)}px`,
                            height: `${getPointSize(point.label)}px`,
                            zIndex: 1002,
                          }}
                        >
                          <span className="tooltip">{point.label}</span>
                        </div>
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
                        <span style={{marginTop: `${point.y+100}%`}}>{point.label}</span>
                      </div>
                                              
                    );
                  })}

                  {meetingRooms.map((point: Point, index: number) => {
                    if (!showMeetingRooms) return null;
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
                        <span style={{marginTop: `${point.y+100}%`}}>{point.label}</span>
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
