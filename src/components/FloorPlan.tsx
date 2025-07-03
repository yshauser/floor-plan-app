import React, { useState } from 'react'; //useRef
import type { Point } from '../data/floorplan';
import { Search, Navigation, X } from 'lucide-react'; //ChevronDown, Building2, Route, Users
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './FloorPlan.css';
import points from '../data/points.json'; // adjust path


interface FloorPlanProps {
  svgContent: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  onClose?: () => void;
}

// A* pathfinding algorithm
// function heuristic(a: Point, b: Point): number {
//   return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
// }

// function findBestExitPoint(roomId: string, rooms: RoomData): Point {
//   const room = rooms[roomId];
//     return {x: room.exitX, y: room.exitY};
// }

// function findBestEntryPoint(roomId: string, rooms: RoomData): Point {
//   // return findBestExitPoint(roomId, rooms); // Same logic for entry
//   const room = rooms[roomId];
//   return {x: room.exitX, y: room.exitY};
// }

// function isPointInRoom(x: number, y: number, rooms: RoomData): boolean {
//   for (const room of Object.values(rooms)) {
//     if (x >= room.x - 0.5 && x <= room.x + room.width + 0.5 && 
//       y >= room.y - 0.5 && y <= room.y + room.height + 0.5) {
//     return true;
//     }
//   }
//   return false;
// }

// function getRoomExitPoint(roomId: string, rooms: RoomData): Point {
//   const room = rooms[roomId];
//   // Exit from the center of the bottom edge of the room
//   return {
//     x: room.centerX,
//     y: room.y - 5 // Just outside the bottom edge
//   };
// }

// function getRoomEntryPoint(roomId: string, rooms: RoomData): Point {
//   const room = rooms[roomId];
//   // Enter from the center of the top edge of the room
//   return {
//     x: room.centerX,
//     y: room.y + room.height + 5 // Just outside the top edge
//   };
// }

// function findPath(start: Point, end: Point, rooms: RoomData): Point[] | null {
//   const openSet: Point[] = [start];
//   const closedSet: Point[] = [];
//   const cameFrom: { [key: string]: Point } = {};
//   const gScore: { [key: string]: number } = { [`${start.x},${start.y}`]: 0 };
//   const fScore: { [key: string]: number } = { [`${start.x},${start.y}`]: heuristic(start, end) };

//   while (openSet.length > 0) {
//     // Find node with lowest fScore
//     let current = openSet.reduce((min, node) => 
//       fScore[`${node.x},${node.y}`] < fScore[`${min.x},${min.y}`] ? node : min
//     );

//     if (Math.abs(current.x - end.x) < 5 && Math.abs(current.y - end.y) < 5) {
//       // Reconstruct path
//       const path = [];
//       let temp = current;
//       while (temp) {
//         path.unshift(temp);
//         temp = cameFrom[`${temp.x},${temp.y}`];
//       }
//       return path;
//     }

//     openSet.splice(openSet.indexOf(current), 1);
//     closedSet.push(current);

//     // Check neighbors (8 directions)
//     const neighbors = [
//       { x: current.x + 10, y: current.y },
//       { x: current.x - 10, y: current.y },
//       { x: current.x, y: current.y + 10 },
//       { x: current.x, y: current.y - 10 },
//       { x: current.x + 10, y: current.y + 10 },
//       { x: current.x - 10, y: current.y - 10 },
//       { x: current.x + 10, y: current.y - 10 },
//       { x: current.x - 10, y: current.y + 10 }
//     ];

//     for (const neighbor of neighbors) {
//       // Skip if out of bounds or in a room
//       console.log ('neighbors', {neighbor, current})
//       // if (neighbor.x < 518.96 || neighbor.x > 677.1 || neighbor.y < 137.06 || neighbor.y > 349.03 ||
//       if (neighbor.x < 500 || neighbor.x > 700 || neighbor.y < 130 || neighbor.y > 480 ||
//           isPointInRoom(neighbor.x, neighbor.y, rooms)) {
//             console.log ('neighbors2', {neighbor, current})
//         continue;
//       }

//       if (closedSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
//         continue;
//       }

//       const tentativeGScore = gScore[`${current.x},${current.y}`] + 
//         Math.sqrt(Math.pow(neighbor.x - current.x, 2) + Math.pow(neighbor.y - current.y, 2));

//       if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
//         openSet.push(neighbor);
//       } else if (tentativeGScore >= (gScore[`${neighbor.x},${neighbor.y}`] || Infinity)) {
//         continue;
//       }

//       cameFrom[`${neighbor.x},${neighbor.y}`] = current;
//       gScore[`${neighbor.x},${neighbor.y}`] = tentativeGScore;
//       fScore[`${neighbor.x},${neighbor.y}`] = tentativeGScore + heuristic(neighbor, end);
//     }
//   }

//   return null; // No path found
// }

const FloorPlan: React.FC<FloorPlanProps> = ({ svgContent, searchValue, setSearchValue, onClose }) => {
  // const [startRoom, setStartRoom] = useState<string>('');
  const [targetRoom, setTargetRoom] = useState<string>('');
  const [showPoints, setShowPoints] = useState<boolean>(false);
  const [startSize, setStartSize] = useState<number>(8);
  const [targetSize, setTargetSize] = useState<number>(8);
  const [startColor, setStartColor] = useState<string>('#000000'); // black
  const [targetColor, setTargetColor] = useState<string>('#008000'); // green
  


  console.log ('no svgcontent', svgContent.length);

  const filteredPoints = points.filter(point => !point.label.startsWith('J'));
  const shouldShowPoint = (label: string) => {
    return showPoints || label === searchValue || label === targetRoom;
  };
  const getPointColor = (label: string) => {
    if (label === searchValue) return startColor;
    if (label === targetRoom) return targetColor;
    return 'red';
  };
  const getPointSize = (label:string) => {
    if (label === searchValue) return startSize;
    if (label === targetRoom) return targetSize;
    return 8;
  }

  // const findNavigation = () => {
  //   if (!startRoom || !targetRoom) {
  //     alert('Please enter valid room numbers');
  //     return;
  //   }
  //   // Mock path finding - replace with your actual logic
  //   setPath([{ x: 540, y: 165 }, { x: 600, y: 165 }]);
  // };

  // const clearPath = () => {
  //   setPath([]);
  //   setStartRoom('');
  //   setTargetRoom('');
  // };

  return (
    <div className="floor-plan-container">
      <div className="floor-plan-content">
        <div className="floor-plan-header">
          <div className="floor-plan-header-icon-wrapper">
            <Navigation className="floor-plan-header-icon" />
          </div>
          <h2 className="floor-plan-title">Floor Navigation</h2>
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
            <label className="floor-plan-label">Start Room</label>
            <div className="floor-plan-input-wrapper">
              <Search className="floor-plan-search-icon" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value.toUpperCase().replace(/\s+/g, ''))}                className="floor-plan-input"
              />
            </div>
          </div>
          
          {/* <div className="floor-plan-start-room">
            <label className="floor-plan-label">Start Room</label>
            <input
              type="text"
              placeholder="e.g., 4N01"
              value={startRoom}
              onChange={(e) => setStartRoom(e.target.value.toUpperCase())}
              className="floor-plan-input"
            />
          </div> */}
          
          <div className="floor-plan-room-input">
            <label className="floor-plan-label">Target Room</label>
            <div className="floor-plan-input-wrapper">
            <input
              type="text"
              placeholder="e.g., 4N05"
              value={targetRoom}
              onChange={(e) => setTargetRoom(e.target.value.toUpperCase().replace(/\s+/g, ''))}
              className="floor-plan-input"
            />
            </div>
          </div>
          
          {/* <div className="floor-plan-buttons">
            <button
              onClick={findNavigation}
              className="floor-plan-find-route-button"
            >
              Find Route
            </button>
            <div className="floor-plan-action-buttons">
              <button
                onClick={clearPath}
                className="floor-plan-clear-button"
              >
                Clear
              </button>
            </div>
          </div> */}
        </div>
        
        <div className="floor-plan-legend">
          <p className="floor-plan-legend-title">Legend:</p>
          <div className="floor-plan-legend-list">
            {/* Start */}
            <div className="floor-plan-legend-item">
              <label>Start</label>
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
            {({ resetTransform }) => ( //zoomIn, zoomOut, 
              <>
                {/* <div className="tools" style={{ marginBottom: "5px"}}> */}
                  {/* <button onClick={()=>zoomIn}>Zoom In</button> */}
                  {/* <button onClick={()=>zoomOut}>Zoom Out</button> */}
                  <button className="fit-to-view-button" onClick={()=>resetTransform()}>Fit to view</button>
                {/* </div> */}
                <button onClick={() => setShowPoints(!showPoints)}>
                  {showPoints ? 'Hide Points' : 'Show Points'}
                </button>
                <TransformComponent>
                  <div className="floor-plan-image-zommable-content">
                    <img
                      src="/floor-plan-app/FloorPlan.png"
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
                        {/* <svg >
                          <circle cx={point.x} cy={point.y} r={0.2} fill={getPointColor(point.label)} />
                        </svg> */}
                        {/* {point.x} */}
                      </div>
                    );
                    })}
                  </div>                
                </TransformComponent>

              </>
             )}
          </TransformWrapper>
        </div>

        {/* {path.length > 0 && (
          <div className="floor-plan-navigation-message">
            <div className="floor-plan-navigation-message-content">
              <div className="floor-plan-navigation-message-icon-wrapper">
                <Navigation className="floor-plan-navigation-message-icon" />
              </div>
              <div>
                <h3 className="floor-plan-navigation-message-title">Navigation Route Found!</h3>
                <p className="floor-plan-navigation-message-text">
                  Path from {startRoom} to {targetRoom} calculated successfully.
                </p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FloorPlan;
