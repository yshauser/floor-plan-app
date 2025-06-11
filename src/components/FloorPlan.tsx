import React, { useState, useRef } from 'react';
// import  { roomData, junctions } from '../data/floorplan';
import type { Point,  } from '../data/floorplan';//RoomData, Junction
// import { employeeList } from '../data/employeeList'; // adjust the path as needed
import { employeeList } from '../data/seatPlan';
import { Search, MapPin, Navigation, Users, X,  } from 'lucide-react'; //ChevronDown, Building2, Route
import './FloorPlan.css';



interface FloorPlanProps {
  svgContent: string;
}


// A* pathfinding algorithm
// function heuristic(a: Point, b: Point): number {
//   return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
// }

// function findBestExitPoint(roomId: string, rooms: RoomData): Point {
//   const room = rooms[roomId];
  
//   // Based on the SVG coordinates, let's find the nearest corridor point
//   // The rooms seem to be arranged in a 3x3 grid with corridors between them
  
//   // Calculate potential exit points (4 sides of the room)
//   // const exitPoints = [
//   //   { x: room.centerX, y: room.y - 2 }, // Bottom
//   //   { x: room.centerX, y: room.y + room.height + 2 }, // Top  
//   //   { x: room.x - 2, y: room.centerY }, // Left
//   //   { x: room.x + room.width + 2, y: room.centerY }, // Right
//   // ];
  
//   // Filter out points that are out of bounds or inside other rooms
//   // const validExits = exitPoints.filter(point => 
//   //   point.x >= 500 && point.x <= 700 && 
//   //   point.y >= 130 && point.y <= 480 &&
//   //   !isPointInRoom(point.x, point.y, rooms)
//   // );
  
//   // Return the first valid exit point, or center if none found
//   // return validExits.length > 0 ? validExits[0] : { x: room.centerX, y: room.centerY };
//   return {x: room.exitX, y: room.exitY};
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

const FloorPlan: React.FC<FloorPlanProps> = ({ svgContent }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [startRoom, setStartRoom] = useState<string>('');
  const [endRoom, setEndRoom] = useState<string>('');
  const [path, setPath] = useState<Point[]>([]);
  const svgRef = useRef<HTMLDivElement>(null);

  const [showEmployees, setShowEmployees] = useState(false);

  const findNavigation = () => {
    if (!startRoom || !endRoom) {
      alert('Please enter valid room numbers');
      return;
    }
    // Mock path finding - replace with your actual logic
    setPath([{ x: 540, y: 165 }, { x: 600, y: 165 }]);
  };

  const clearPath = () => {
    setPath([]);
    setStartRoom('');
    setEndRoom('');
  };

  return (
    <div className="floor-plan-container">
      <div className="floor-plan-content">
        <div className="floor-plan-header">
          <div className="floor-plan-header-icon-wrapper">
            <Navigation className="floor-plan-header-icon" />
          </div>
          <h2 className="floor-plan-title">Floor Navigation</h2>
        </div>
        
        <div className="floor-plan-controls">
          <div className="floor-plan-search-room">
            <label className="floor-plan-label">Search Rooms</label>
            <div className="floor-plan-input-wrapper">
              <Search className="floor-plan-search-icon" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="floor-plan-input"
              />
            </div>
          </div>
          
          <div className="floor-plan-start-room">
            <label className="floor-plan-label">Start Room</label>
            <input
              type="text"
              placeholder="e.g., 4N01"
              value={startRoom}
              onChange={(e) => setStartRoom(e.target.value.toUpperCase())}
              className="floor-plan-input"
            />
          </div>
          
          <div className="floor-plan-end-room">
            <label className="floor-plan-label">End Room</label>
            <input
              type="text"
              placeholder="e.g., 4N05"
              value={endRoom}
              onChange={(e) => setEndRoom(e.target.value.toUpperCase())}
              className="floor-plan-input"
            />
          </div>
          
          <div className="floor-plan-buttons">
            <button
              onClick={findNavigation}
              className="floor-plan-find-route-button"
            >
              Find Route
            </button>
            <div className="floor-plan-action-buttons">
              <button
                onClick={() => setShowEmployees(true)}
                className="floor-plan-staff-button"
              >
                <Users className="floor-plan-staff-icon" />
                Staff
              </button>
              <button
                onClick={clearPath}
                className="floor-plan-clear-button"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        
        <div className="floor-plan-legend">
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
        </div>

        {/* Employee Modal */}
        {showEmployees && (
          <div className="floor-plan-employee-modal-overlay">
            <div className="floor-plan-employee-modal-content">
              <div className="floor-plan-employee-modal-header">
                <div className="floor-plan-employee-modal-title-wrapper">
                  <Users className="floor-plan-employee-modal-icon" />
                  <h2 className="floor-plan-employee-modal-title">Employee Directory</h2>
                </div>
                <button
                  onClick={() => setShowEmployees(false)}
                  className="floor-plan-employee-modal-close-button"
                >
                  <X className="floor-plan-employee-modal-close-icon" />
                </button>
              </div>
              <div className="floor-plan-employee-modal-table-container custom-scrollbar">
                <table className="floor-plan-employee-table">
                  <thead className="floor-plan-employee-table-header">
                    <tr>
                      <th className="floor-plan-employee-table-header-cell">Employee</th>
                      <th className="floor-plan-employee-table-header-cell">Location</th>
                      <th className="floor-plan-employee-table-header-cell">Department</th>
                    </tr>
                  </thead>
                  <tbody className="floor-plan-employee-table-body">
                    {employeeList.map((emp, idx) => (
                      <tr key={idx} className="floor-plan-employee-table-row">
                        <td className="floor-plan-employee-table-cell">
                          <div className="floor-plan-employee-info">
                            <div className="floor-plan-employee-avatar-wrapper">
                              <span className="floor-plan-employee-avatar-text">
                                {emp.firstName[0]}{emp.lastName[0]}
                              </span>
                            </div>
                            <div>
                              <p className="floor-plan-employee-name">{emp.firstName} {emp.lastName}</p>
                            </div>
                          </div>
                        </td>
                        <td className="floor-plan-employee-table-cell">
                          <div className="floor-plan-employee-location">
                            <MapPin className="floor-plan-employee-location-icon" />
                            {emp.seatNumber}
                          </div>
                          <p className="floor-plan-employee-location-details">Floor {emp.floor} • Wing {emp.wing}</p>
                        </td>
                         <td className="floor-plan-employee-table-cell">
                          <span className="floor-plan-employee-department-tag">
                            {emp.department}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="floor-plan-svg-container">
          <div
            ref={svgRef}
            dangerouslySetInnerHTML={{ __html: svgContent }}
            className="floor-plan-svg"
            style={{ minHeight: '400px' }}
          />
        </div>
        
        {path.length > 0 && (
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
        )}
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
};

export default FloorPlan;
