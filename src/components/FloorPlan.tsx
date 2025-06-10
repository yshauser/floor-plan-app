import React, { useState, useRef } from 'react';
import  { roomData, junctions } from '../data/floorplan';
import type { Point, RoomData, Junction } from '../data/floorplan';
// import { employeeList } from '../data/employeeList'; // adjust the path as needed
import { employeeList } from '../data/seatPlan';
import { Search, MapPin, Navigation, Users, X,  } from 'lucide-react'; //ChevronDown, Building2, Route



interface FloorPlanProps {
  svgContent: string;
}


// A* pathfinding algorithm
function heuristic(a: Point, b: Point): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function findBestExitPoint(roomId: string, rooms: RoomData): Point {
  const room = rooms[roomId];
  
  // Based on the SVG coordinates, let's find the nearest corridor point
  // The rooms seem to be arranged in a 3x3 grid with corridors between them
  
  // Calculate potential exit points (4 sides of the room)
  // const exitPoints = [
  //   { x: room.centerX, y: room.y - 2 }, // Bottom
  //   { x: room.centerX, y: room.y + room.height + 2 }, // Top  
  //   { x: room.x - 2, y: room.centerY }, // Left
  //   { x: room.x + room.width + 2, y: room.centerY }, // Right
  // ];
  
  // Filter out points that are out of bounds or inside other rooms
  // const validExits = exitPoints.filter(point => 
  //   point.x >= 500 && point.x <= 700 && 
  //   point.y >= 130 && point.y <= 480 &&
  //   !isPointInRoom(point.x, point.y, rooms)
  // );
  
  // Return the first valid exit point, or center if none found
  // return validExits.length > 0 ? validExits[0] : { x: room.centerX, y: room.centerY };
  return {x: room.exitX, y: room.exitY};
}

function findBestEntryPoint(roomId: string, rooms: RoomData): Point {
  // return findBestExitPoint(roomId, rooms); // Same logic for entry
  const room = rooms[roomId];
  return {x: room.exitX, y: room.exitY};
}

function isPointInRoom(x: number, y: number, rooms: RoomData): boolean {
  for (const room of Object.values(rooms)) {
    if (x >= room.x - 0.5 && x <= room.x + room.width + 0.5 && 
      y >= room.y - 0.5 && y <= room.y + room.height + 0.5) {
    return true;
    }
  }
  return false;
}

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

function findPath(start: Point, end: Point, rooms: RoomData): Point[] | null {
  const openSet: Point[] = [start];
  const closedSet: Point[] = [];
  const cameFrom: { [key: string]: Point } = {};
  const gScore: { [key: string]: number } = { [`${start.x},${start.y}`]: 0 };
  const fScore: { [key: string]: number } = { [`${start.x},${start.y}`]: heuristic(start, end) };

  while (openSet.length > 0) {
    // Find node with lowest fScore
    let current = openSet.reduce((min, node) => 
      fScore[`${node.x},${node.y}`] < fScore[`${min.x},${min.y}`] ? node : min
    );

    if (Math.abs(current.x - end.x) < 5 && Math.abs(current.y - end.y) < 5) {
      // Reconstruct path
      const path = [];
      let temp = current;
      while (temp) {
        path.unshift(temp);
        temp = cameFrom[`${temp.x},${temp.y}`];
      }
      return path;
    }

    openSet.splice(openSet.indexOf(current), 1);
    closedSet.push(current);

    // Check neighbors (8 directions)
    const neighbors = [
      { x: current.x + 10, y: current.y },
      { x: current.x - 10, y: current.y },
      { x: current.x, y: current.y + 10 },
      { x: current.x, y: current.y - 10 },
      { x: current.x + 10, y: current.y + 10 },
      { x: current.x - 10, y: current.y - 10 },
      { x: current.x + 10, y: current.y - 10 },
      { x: current.x - 10, y: current.y + 10 }
    ];

    for (const neighbor of neighbors) {
      // Skip if out of bounds or in a room
      console.log ('neighbors', {neighbor, current})
      // if (neighbor.x < 518.96 || neighbor.x > 677.1 || neighbor.y < 137.06 || neighbor.y > 349.03 ||
      if (neighbor.x < 500 || neighbor.x > 700 || neighbor.y < 130 || neighbor.y > 480 ||
          isPointInRoom(neighbor.x, neighbor.y, rooms)) {
            console.log ('neighbors2', {neighbor, current})
        continue;
      }

      if (closedSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
        continue;
      }

      const tentativeGScore = gScore[`${current.x},${current.y}`] + 
        Math.sqrt(Math.pow(neighbor.x - current.x, 2) + Math.pow(neighbor.y - current.y, 2));

      if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
        openSet.push(neighbor);
      } else if (tentativeGScore >= (gScore[`${neighbor.x},${neighbor.y}`] || Infinity)) {
        continue;
      }

      cameFrom[`${neighbor.x},${neighbor.y}`] = current;
      gScore[`${neighbor.x},${neighbor.y}`] = tentativeGScore;
      fScore[`${neighbor.x},${neighbor.y}`] = tentativeGScore + heuristic(neighbor, end);
    }
  }

  return null; // No path found
}

const FloorPlan: React.FC<FloorPlanProps> = ({ svgContent }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [startRoom, setStartRoom] = useState<string>('');
  const [endRoom, setEndRoom] = useState<string>('');
  const [path, setPath] = useState<Point[]>([]);
  const svgRef = useRef<HTMLDivElement>(null);

  const [showEmployees, setShowEmployees] = useState(false);

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleStartRoomChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setStartRoom(event.target.value.toUpperCase());
  // };

  // const handleEndRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEndRoom(event.target.value.toUpperCase());
  // };

  const findNavigation = (): void => {
    if (!startRoom || !endRoom || !roomData[startRoom] || !roomData[endRoom]) {
      alert('Please enter valid room numbers (e.g., 4N01, 4N02, etc.)');
      return;
    }
  
    const startPoint = findBestExitPoint(startRoom, roomData);
    const endPoint = findBestEntryPoint(endRoom, roomData);
  
    console.log('Start point:', startPoint, 'End point:', endPoint); // Debug log

    const foundPath = findPath(startPoint, endPoint, roomData);
    if (foundPath) {
      setPath(foundPath);
    } else {
      alert('No path found between the rooms');
      setPath([]);
    }
  };

  const clearPath = () => {
    setPath([]);
    setStartRoom('');
    setEndRoom('');
  };

  const highlightRooms = (svg: string, query: string) => {
    if (!query) return svg;
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const rooms = doc.querySelectorAll('text');
    rooms.forEach((room) => {
      if (room.textContent?.toLowerCase().includes(query.toLowerCase())) {
        room.setAttribute('fill', 'red');
      } else {
        room.setAttribute('fill', 'black');
      }
    });
    
    return new XMLSerializer().serializeToString(doc);
  };

  const addJunctionDotsToSvg = (svg: string, junctions: Junction): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');

    if (!svgElement) return svg;

    Object.values(junctions).forEach((junction: Point) => {
      const circle = doc.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', junction.x.toString());
      circle.setAttribute('cy', junction.y.toString());
      circle.setAttribute('r', '3'); // Radius of the dot
      circle.setAttribute('fill', 'blue'); // Color of the dot
      circle.setAttribute('class', 'junction-dot'); // Add a class for CSS styling
      svgElement.appendChild(circle);
    });

    return new XMLSerializer().serializeToString(doc);
  };

  const addPathToSvg = (svg: string, pathPoints: Point[]): string => {
    if (pathPoints.length === 0) return svg;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');
    
    if (!svgElement) return svg;
    
    // Create path string
    let pathString = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
    for (let i = 1; i < pathPoints.length; i++) {
      pathString += ` L ${pathPoints[i].x} ${pathPoints[i].y}`;
    }
    
    // Create path element
    const pathElement = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', pathString);
    pathElement.setAttribute('stroke', '#ff0000');
    pathElement.setAttribute('stroke-width', '3');
    pathElement.setAttribute('fill', 'none');
    pathElement.setAttribute('stroke-linecap', 'round');
    pathElement.setAttribute('stroke-linejoin', 'round');
    
    // Add start room marker (at room center)
    if (roomData[startRoom]) {
      const startCircle = doc.createElementNS('http://www.w3.org/2000/svg', 'circle');
      startCircle.setAttribute('cx', roomData[startRoom].centerX.toString());
      startCircle.setAttribute('cy', roomData[startRoom].centerY.toString());
      startCircle.setAttribute('r', '5');
      startCircle.setAttribute('fill', '#00ff00');
      svgElement.appendChild(startCircle);
    }
    
    // Add end room marker (at room center)
    if (roomData[endRoom]) {
      const endCircle = doc.createElementNS('http://www.w3.org/2000/svg', 'circle');
      endCircle.setAttribute('cx', roomData[endRoom].centerX.toString());
      endCircle.setAttribute('cy', roomData[endRoom].centerY.toString());
      endCircle.setAttribute('r', '5');
      endCircle.setAttribute('fill', '#0000ff');
      svgElement.appendChild(endCircle);
    }
    
    svgElement.appendChild(pathElement);
    return new XMLSerializer().serializeToString(doc);
  };

  const processedSvg = addPathToSvg(addJunctionDotsToSvg(highlightRooms(svgContent, searchQuery), junctions), path);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-t-2xl shadow-xl border-t border-white/20">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
            <Navigation className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Floor Navigation</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Search Rooms</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Start Room</label>
            <input
              type="text"
              placeholder="e.g., 4N01"
              value={startRoom}
              onChange={(e) => setStartRoom(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">End Room</label>
            <input
              type="text"
              placeholder="e.g., 4N05"
              value={endRoom}
              onChange={(e) => setEndRoom(e.target.value.toUpperCase())}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
            />
          </div>
          
          <div className="flex flex-col justify-end gap-2">
            <button
              onClick={findNavigation}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Find Route
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setShowEmployees(true)}
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
              >
                <Users className="w-4 h-4 inline mr-1" />
                Staff
              </button>
              <button
                onClick={clearPath}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-blue-800 mb-1">Available Rooms:</p>
              <p className="text-blue-700">4N01, 4N02, 4N03, 4N04, 4N05</p>
            </div>
            <div>
              <p className="font-semibold text-blue-800 mb-1">Legend:</p>
              <div className="flex items-center gap-4 text-blue-700">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Start
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  End
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-1 bg-red-500"></div>
                  Path
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Modal */}
        {showEmployees && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-h-[80vh] overflow-hidden w-full max-w-4xl">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-white" />
                    <h2 className="text-xl font-bold text-white">Employee Directory</h2>
                  </div>
                  <button
                    onClick={() => setShowEmployees(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[60vh] custom-scrollbar">
                <table className="w-full">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Department</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {employeeList.map((emp, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium text-sm">
                                {emp.firstName[0]}{emp.lastName[0]}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{emp.firstName} {emp.lastName}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-blue-600 font-medium">
                            <MapPin className="w-4 h-4" />
                            {emp.seatNumber}
                          </div>
                          <p className="text-gray-500 text-sm">Floor {emp.floor} • Wing {emp.wing}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
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

        <div className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg">
          <div
            ref={svgRef}
            dangerouslySetInnerHTML={{ __html: svgContent }}
            className="w-full"
            style={{ minHeight: '400px' }}
          />
        </div>
        
        {path.length > 0 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Navigation className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Navigation Route Found!</h3>
                <p className="text-green-700 text-sm">
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
  // return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Floor Plan Viewer with Navigation</h1>
      
//       <div className="bg-gray-100 p-4 rounded-lg mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Search Rooms:</label>
//             <input
//               type="text"
//               placeholder="Search for a room"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium mb-1">Start Room:</label>
//             <input
//               type="text"
//               placeholder="e.g., 4N01"
//               value={startRoom}
//               onChange={handleStartRoomChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium mb-1">End Room:</label>
//             <input
//               type="text"
//               placeholder="e.g., 4N13"
//               value={endRoom}
//               onChange={handleEndRoomChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           <div className="flex flex-col justify-end">
//             <div className="flex gap-2">
//               <button
//                 onClick={findNavigation}
//                 className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
//               >
//                 Find Path
//               </button>
//                 {/* <button
//                   onClick={() => setShowEmployees(true)}
//                   className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors"
//                 >
//                   Show Employees
//                 </button> */}

//               <button
//                 onClick={clearPath}
//                 className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
//               >
//                 Clear
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="text-sm text-gray-600">
//           <p><strong>Available Rooms:</strong> 4N01, 4N02, 4N03, 4N04, 4N05, 4N06, 4N11, 4N12, 4N13</p>
//           <p><strong>Legend:</strong> 🟢 Start Room | 🔵 End Room | 🔴 Path</p>
//         </div>
//       </div>
//       {/* {showEmployees && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-full max-w-2xl shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Employee List</h2>
//       <button
//         onClick={() => setShowEmployees(false)}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//       >
//         ✕
//       </button>
//       <table className="w-full text-sm border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-2 py-1">First Name</th>
//             <th className="border px-2 py-1">Last Name</th>
//             <th className="border px-2 py-1">Floor</th>
//             <th className="border px-2 py-1">Wing</th>
//             <th className="border px-2 py-1">Seat</th>
//             <th className="border px-2 py-1">Department</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employeeList.map((emp, idx) => (
//             <tr key={idx} className="hover:bg-gray-50">
//               <td className="border px-2 py-1">{emp.firstName}</td>
//               <td className="border px-2 py-1">{emp.lastName}</td>
//               <td className="border px-2 py-1">{emp.floor}</td>
//               <td className="border px-2 py-1">{emp.wing}</td>
//               <td className="border px-2 py-1">{emp.seat}</td>
//               <td className="border px-2 py-1">{emp.department || '-'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// )} */}

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div
          ref={svgRef}
          dangerouslySetInnerHTML={{ __html: processedSvg }}
          className="w-full"
          style={{ minHeight: '400px' }}
        />
      </div>
      
      {path.length > 0 && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <h3 className="font-semibold text-green-800">Navigation Found!</h3>
          <p className="text-green-700">
            Path from {startRoom} to {endRoom} found with {path.length} waypoints.
            The red line shows the route through the corridors.
          </p>
        </div>
      )}
//     </div>
//   );
};

export default FloorPlan;
