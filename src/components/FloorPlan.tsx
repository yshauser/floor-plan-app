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



// function highlightSvgText(svg: string, query: string): string {
//   if (!query) return svg;

//   const regex = new RegExp(`(<tspan[^>]*>)([^<]*?)(${query})([^<]*?)(</tspan>)`, 'gi');
//   return svg.replace(regex, (_, start, before, match, after, end) => {
//     return `${start}${before}<tspan class="highlight">${match}</tspan>${after}${end}`;
//   });
// }

// function highlightSvgText(svg: string, search: string, start: string, end: string): string {
//   if (!svg) return svg;

//   const highlight = (text: string, className: string) => {
//     const regex = new RegExp(`(<tspan[^>]*>)([^<]*?)(${text})([^<]*?)(</tspan>)`, 'gi');
//     return (input: string) =>
//       input.replace(regex, (_, startTag, before, match, after, endTag) => {
//         return `${startTag}${before}<tspan class="${className}">${match}</tspan>${after}${endTag}`;
//       });
//   };

//   let modifiedSvg = svg;

//   if (start) modifiedSvg = highlight(start, 'highlight-start')(modifiedSvg);
//   if (end) modifiedSvg = highlight(end, 'highlight-end')(modifiedSvg);
//   if (search && search !== end) modifiedSvg = highlight(search, 'highlight')(modifiedSvg);

//   return modifiedSvg;
// }



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
  const [endRoom, setEndRoom] = useState<string>('');
  const [showPoints, setShowPoints] = useState<boolean>(false);
  // const [path, setPath] = useState<Point[]>([]);
  // const svgRef = useRef<HTMLDivElement>(null);
  console.log ('no svgcontent', svgContent);

  const filteredPoints = points.filter(point => !point.label.startsWith('J'));
  const shouldShowPoint = (label: string) => {
    return showPoints || label === searchValue || label === endRoom;
  };
  const getPointColor = (label: string) => {
    if (label === searchValue) return 'blue';
    if (label === endRoom) return 'green';
    return 'red';
  };

  // const findNavigation = () => {
  //   if (!startRoom || !endRoom) {
  //     alert('Please enter valid room numbers');
  //     return;
  //   }
  //   // Mock path finding - replace with your actual logic
  //   setPath([{ x: 540, y: 165 }, { x: 600, y: 165 }]);
  // };

  // const clearPath = () => {
  //   setPath([]);
  //   setStartRoom('');
  //   setEndRoom('');
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
          <div className="floor-plan-search-room">
            <label className="floor-plan-label">Search Rooms</label>
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
          
          <div className="floor-plan-end-room">
            <label className="floor-plan-label">Target Room</label>
            <div className="floor-plan-input-wrapper">
            <input
              type="text"
              placeholder="e.g., 4N05"
              value={endRoom}
              onChange={(e) => setEndRoom(e.target.value.toUpperCase().replace(/\s+/g, ''))}
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
        
        {/* <div className="floor-plan-legend">
          <div className="floor-plan-legend-rooms">
            <p className="floor-plan-legend-title">Available Rooms:</p>
            <p className="floor-plan-legend-text">4N01, 4N02, 4N03, 4N04, 4N05</p>
          </div>
          <div className="floor-plan-legend-items">
            <p className="floor-plan-legend-title">Legend:</p>
            <div className="floor-plan-legend-list">
              <span className="floor-plan-legend-item">
                <div className="floor-plan-legend-start-marker"></div>
                Start
              </span>
              <span className="floor-plan-legend-item">
                <div className="floor-plan-legend-end-marker"></div>
                End
              </span>
              <span className="floor-plan-legend-item">
                <div className="floor-plan-legend-path-marker"></div>
                Path
              </span>
            </div>
          </div>
        </div> */}
        <button onClick={() => setShowPoints(!showPoints)}>
          {showPoints ? 'Hide Points' : 'Show Points'}
        </button>
        <div >
          <TransformWrapper
            initialScale={1}
            centerOnInit
            minScale={0.2}
            maxScale={10}
            >
            {/* {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="tools" style={{ marginBottom: "5px"}}>
                  <button onClick={()=>zoomIn}>Zoom In</button>
                  <button onClick={()=>zoomOut}>Zoom Out</button>
                  <button onClick={()=>resetTransform}>Reset</button>
                </div> */}
                <TransformComponent>
                  <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
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
                          // color: 'white',
                          // padding: '2px 4px',
                          // borderRadius: '4px',
                          // fontSize: '0.75rem',
                          borderRadius:'50%',
                          width: '5px',
                          height: '5px',
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


                {/* <div
                  ref={svgRef}
                  dangerouslySetInnerHTML={{
                    __html: highlightSvgText(svgContent, searchValue, startRoom, endRoom),
                  }}
                  className="floor-plan-svg"
                  style={{ minHeight: '400px' }}
                /> */}
                
                </TransformComponent>

              {/* </>
             )} */}
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
                  Path from {startRoom} to {endRoom} calculated successfully.
                </p>
              </div>
            </div>
          </div>
        )} */}
      </div>

      {/* <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style> */}
    </div>
  );
};

export default FloorPlan;
