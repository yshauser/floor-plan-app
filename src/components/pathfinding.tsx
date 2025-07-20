import React from 'react';
import type { Point } from '../data/floorplan';
import junctions_4 from '../data/junctions_4.json';
import junctions_3 from '../data/junctions_3.json';
import { result } from 'lodash';

// Types for pathfinding
interface PathSegment {
  from: Point;
  to: Point;
  angle: number;
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
  connections: Record<string, string[]>
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
    if (path.length === 0 || path[0] !== startLabel || path[path.length - 1] !== targetLabel) {
  console.warn('Invalid path constructed:', path);
    return null;
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
        angle: angle
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

// Calculate angle for arrow rotation
export function calculateAngle(from: Point, to: Point): number {
  return Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
}

const Arrow: React.FC<{ point: Point; angle: number; color: string }> = ({ point, angle, color }) => (
  <div
    style={{
      position: 'absolute',
      left: `${point.x}%`,
      top: `${point.y}%`,
      transform: `translate(-50%, -70%) rotate(${angle}rad)`,
      pointerEvents: 'none',
      zIndex: 1001,
    }}
  >
    <svg width="20" height="20" viewBox="0 0 20 20">
      <polygon points="0,10 15,5 10,10 15,15" fill={color} stroke={color} strokeWidth="1" />
    </svg>
  </div>
);

// Component to render path segments
export const PathRenderer: React.FC<{
  segments: PathSegment[];
  pathColor?: string;
  pathWidth?: number;
  showArrows?: boolean;
  arrowColor?: string;
  showLine?: boolean;
  startPoint?: Point;
  endPoint?: Point;
}> = ({
  segments,
  pathColor = '#ff0000',
  pathWidth = 2,
  showArrows = true,
  arrowColor = '#ff0000',
  showLine = false,
  startPoint,
  endPoint,
}) => {
  return (
    <>
      {segments.map((segment, index) => {
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

      {/* Start Point Arrow */}
      {showArrows && startPoint && segments.length > 0 && (
        <Arrow
          point={startPoint}
          angle={Math.atan2(segments[0].from.y - startPoint.y, segments[0].from.x - startPoint.x)}
          color={arrowColor}
        />
      )}

      {/* End Point Arrow */}
      {showArrows && endPoint && segments.length > 0 && (
        <Arrow
          point={endPoint}
          angle={Math.atan2(endPoint.y - segments[segments.length - 1].to.y, endPoint.x - segments[segments.length - 1].to.x)}
          color={arrowColor}
        />
      )}
    </>
  );
};

// Hook for pathfinding functionality
export function usePathfinding(junctionPoints: Point[]) {
  const [currentPath, setCurrentPath] = React.useState<PathResult | null>(null);
  const [isPathfinding, setIsPathfinding] = React.useState(false);

  const findAndSetPath = React.useCallback((startLabel: string, targetLabel: string, startFloor: string, targetFloor: string) => {
    setIsPathfinding(true);
    let junctions: Record<string, string[]>;
      if (startFloor.startsWith('4') && targetFloor.startsWith('4')) {
        junctions = junctions_4;
      } else if (startFloor.startsWith('3') && targetFloor.startsWith('3')) {
        junctions = junctions_3;
      } else {
        junctions = {};
      }
    try {
      const result = findPath(startLabel, targetLabel, junctionPoints, junctions);
        // console.log('Path result:', result); 
      setCurrentPath(result);
    } catch (error) {
      console.error('Pathfinding error:', error);
      setCurrentPath(null);
    } finally {
      setIsPathfinding(false);
    }
    console.log ('find and set path', {result})
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