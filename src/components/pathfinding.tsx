import React, {useEffect} from 'react';
import type { Point } from '../types';
import { getAllJunctionsFromAllMaps } from '../services/firestoreService';


// Types for pathfinding
interface PathSegment {
  from: Point;
  to: Point;
  angle: number;
  floor: string;
}

interface PathResult {
  path: string[];
  segments: PathSegment[];
  totalDistance: number;
}

// Dijkstra's pathfinding algorithm
export function findPath(
  startLabel: string,
  targetLabel: string,
  junctionPoints: Point[],
  connections: Record<string, string[]>,
  floor: string
): PathResult | null {
  
  // Create a map for quick point lookup
  const pointMap = new Map<string, Point>();
  junctionPoints.forEach(point => {
    pointMap.set(point.label, point);
  });

  // Validate start and target points exist
  if (!pointMap.has(startLabel) || !pointMap.has(targetLabel)) {
    return null;
  }

  if (startLabel === targetLabel) {
    return {
      path: [startLabel],
      segments: [],
      totalDistance: 0
    };
  }

  // Dijkstra's algorithm
  const distances = new Map<string, number>();
  const previous = new Map<string, string | null>();
  const unvisited = new Set<string>();

const allJunctions = new Set<string>();

// Add all keys and all values (neighbors)
Object.entries(connections).forEach(([junction, neighbors]) => {
  allJunctions.add(junction);
  neighbors.forEach(n => allJunctions.add(n));
});
// console.log ('Basic PF data', {connections, allJunctions})

allJunctions.forEach(junction => {
  distances.set(junction, junction === startLabel ? 0 : Infinity);
  previous.set(junction, null);
  unvisited.add(junction);
});
// console.log('Initial distances:', Object.fromEntries(distances));
// console.log('Initial unvisited:', Array.from(unvisited));
  
  while (unvisited.size > 0) {
    // Find unvisited node with minimum distance
    let current: string | null = null;
    let minDistance = Infinity;

    for (const node of unvisited) {

      // const distance = distances.get(node) || Infinity;
      const distance = distances.has(node) ? distances.get(node)! : Infinity;
      // console.log ('node', {node, distance})
      if (distance < minDistance) {
        minDistance = distance;
        current = node;
      }
    }
    
    if (!current || minDistance === Infinity) {
      break; // No path found
    }

    if (current !== null) {
      unvisited.delete(current);
    }

    // If we reached the target, we can stop
    if (current === targetLabel) {
      break;
    }

    // Check all neighbors
    const neighbors = connections[current] || [];
    const currentPoint = pointMap.get(current);
    
    if (!currentPoint) continue;

    neighbors.forEach(neighbor => {
      if (!unvisited.has(neighbor)) return;

      const neighborPoint = pointMap.get(neighbor);
      if (!neighborPoint) return;

      // Calculate Euclidean distance
      const distance = Math.sqrt(
        Math.pow(neighborPoint.x - currentPoint.x, 2) +
        Math.pow(neighborPoint.y - currentPoint.y, 2)
      );

      const newDistance = (distances.get(current) || 0) + distance;
      
      if (newDistance < (distances.get(neighbor) || Infinity)) {
        distances.set(neighbor, newDistance);
        previous.set(neighbor, current);
      }
    });
  }

  // Reconstruct path
  const path: string[] = [];
  let current: string | null = targetLabel;
  
  while (current) {
    path.unshift(current);
    current = previous.get(current) || null;
  }

  // If path doesn't start with startLabel, no path was found
  // if (path.length === 0 || path[0] !== startLabel) {
  if (startLabel[0]===targetLabel[0]){
    if (path.length === 0 || path[0] !== startLabel || path[path.length - 1] !== targetLabel) {
      console.warn('Invalid path constructed:', path.length, path[0], startLabel, path[path.length-1], targetLabel);
    return null;
    }
  }

  // Create segments with angles for arrows
  const segments: PathSegment[] = [];
  let totalDistance = 0;

  for (let i = 0; i < path.length - 1; i++) {
    const fromPoint = pointMap.get(path[i]);
    const toPoint = pointMap.get(path[i + 1]);
    
    if (fromPoint && toPoint) {
      const angle = Math.atan2(toPoint.y - fromPoint.y, toPoint.x - fromPoint.x);
      const distance = Math.sqrt(
        Math.pow(toPoint.x - fromPoint.x, 2) +
        Math.pow(toPoint.y - fromPoint.y, 2)
      );
      segments.push({
        from: fromPoint,
        to: toPoint,
        angle: angle,
        floor: floor
      });
      
      totalDistance += distance;
    }
  }

  return {
    path,
    segments,
    totalDistance
  };
}
export function findPathBetweenFloors(
  startLabel: string,
  targetLabel: string,
  startFloor: string,
  targetFloor: string,
  junctionPoints: Point[],
  allConnections: Record<string, Record<string, string[]>>,
  useStairs: boolean,
  useElevator: boolean
): PathResult | null {
  const gateways = [];
  if (useStairs) {
    // gateways.push('B3-1-2', 'B3-2-2', 'B4-1-2', 'B4-2-2');
    gateways.push('B1-2', 'B2-2');
  }
  if (useElevator) {
    // gateways.push('B3-3', 'B4-3');
    gateways.push('B3');
  }

  let bestPath: PathResult | null = null;

  for (const gateway of gateways) {
    const startFloorConnections = allConnections[startFloor];
    const targetFloorConnections = allConnections[targetFloor];

    if (!startFloorConnections || !targetFloorConnections) {
      continue;
    }
    const path1 = findPath(startLabel, gateway, junctionPoints, startFloorConnections, startFloor);
    const path2 = findPath(gateway, targetLabel, junctionPoints, targetFloorConnections, targetFloor);
   
    if (path1 && path2 ) {
      const totalDistance = path1.totalDistance + path2.totalDistance;
      if (!bestPath || totalDistance < bestPath.totalDistance) {
        bestPath = {
          path: [...path1.path, ...path2.path.slice(1)],
          segments: [...path1.segments, ...path2.segments],
          totalDistance: totalDistance,
        };
      }
    }
  }

  return bestPath;
}

// Calculate angle for arrow rotation
export function calculateAngle(from: Point, to: Point): number {
  return Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
}

// Component to render path segments
export const PathRenderer: React.FC<{
  segments: PathSegment[];
  pathColor?: string;
  pathWidth?: number;
  showArrows?: boolean;
  arrowColor?: string;
  showLine?: boolean;
  displayedFloor: string | null;
}> = ({
  segments,
  pathColor = '#ff0000',
  pathWidth = 2,
  showArrows = true,
  arrowColor = '#ff0000',
  showLine = false,
  displayedFloor
}) => {
  return (
    <>
      {segments
        .filter(segment => segment.floor === displayedFloor)
        .map((segment, index) => {
        const { from, to, angle } = segment;
        
        // Calculate line properties
        const length = Math.sqrt(
          Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
        );
        const centerX = (from.x + to.x) / 2;
        const centerY = (from.y + to.y) / 2;
        
        return (
          <div key={index}>
            {/* Path line */}
            {showLine && (
              <div
                style={{
                  position: 'absolute',
                  left: `${from.x}%`,
                  top: `${from.y}%`,
                  width: `${length}%`,
                  height: `${pathWidth}px`,
                  backgroundColor: pathColor,
                  transformOrigin: '0 50%',
                  transform: `translateY(-2px) rotate(${angle}rad)`,
                  pointerEvents: 'none',
                  zIndex: 1000,
                }}
              />
            )}
            
            {/* Direction arrow */}
            {showArrows && (
              <div
                style={{
                  position: 'absolute',
                  left: `${centerX}%`,
                  top: `${centerY}%`,
                  transform: `translate(-50%, -70%) rotate(${angle}rad)`,
                  pointerEvents: 'none',
                  zIndex: 1001
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <polygon
                    points="0,10 15,5 10,10 15,15"
                    fill={arrowColor}
                    stroke={arrowColor}
                    strokeWidth="1"
                  />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

// Hook for pathfinding functionality
export function usePathfinding(junctionPoints: Point[]) {
  const [currentPath, setCurrentPath] = React.useState<PathResult | null>(null);
  const [isPathfinding, setIsPathfinding] = React.useState(false);
  const [allJunctionsList, setAllJunctionsList] = React.useState<Record<string, Record<string, string[]>>>({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const allJunctions = await getAllJunctionsFromAllMaps();
        setAllJunctionsList(allJunctions);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  // console.log ('Debug - ALL junctions from DB', allJunctionsList);


  const findAndSetPath = React.useCallback((startLabel: string, targetLabel: string, startFloor: string, targetFloor: string, useStairs: boolean, useElevator: boolean) => {
    setIsPathfinding(true);
    
    // const allConnections = {
    //   '3': junctions_3,
    //   '4': junctions_4,
    // };
    

    // console.log ('COMPARING', {allConnections, allJunctionsList})

    try {
      let result: PathResult | null = null;
      console.log ('Debug - start and end', {startFloor, targetFloor})
      if (startFloor === targetFloor) {
        // const connections = allConnections[startFloor as keyof typeof allConnections];
        const connections = allJunctionsList[startFloor as keyof typeof allJunctionsList];
        if (connections) {
          result = findPath(startLabel, targetLabel, junctionPoints, connections, startFloor);
          console.log ('Debug - same floor')
          // console.log ('same floor', {startLabel, targetLabel, junctionPoints, connections, startFloor});
        }
      } else {
        // console.log ('between floors', {startLabel, targetLabel, startFloor, targetFloor, junctionPoints, allConnections, useStairs, useElevator});
        console.log ('Debug - between floors')
        result = findPathBetweenFloors(startLabel, targetLabel, startFloor, targetFloor, junctionPoints, allJunctionsList, useStairs, useElevator);
      }
      setCurrentPath(result);
    } catch (error) {
      console.error('Pathfinding error:', error);
      setCurrentPath(null);
    } finally {
      setIsPathfinding(false);
    }
  }, [junctionPoints]);

  const clearPath = React.useCallback(() => {
    setCurrentPath(null);
  }, []);

  return {
    currentPath,
    isPathfinding,
    findAndSetPath,
    clearPath
  };
}