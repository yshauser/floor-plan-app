import { useState, useRef } from 'react';
import _ from 'lodash';
// import FloorPlanSVG from './components/FloorPlanSVG';

// Define TypeScript interfaces
interface SearchResult {
  id: string | null;
  message?: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Format validation for room/desk IDs
  const isValidFormat = (term: string): boolean => {
    // Format: 4[N|S]##[A-Z]?
    const validPattern = /^4[NS]\d+[A-Z]?$/;
    return validPattern.test(term);
  };

  // Function to search for rooms and desks
  const handleSearch = (): void => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setHighlightedId(null);
      return;
    }

    // Convert search term to uppercase for case-insensitive matching
    const term = searchTerm.toUpperCase();
    
    if (!isValidFormat(term)) {
      setSearchResults([{ id: null, message: 'Invalid format. Use format: 4N## or 4S##[A-Z]' }]);
      setHighlightedId(null);
      return;
    }

    // Find all matching elements
    const matchingIds = [];
    const elements = document.querySelectorAll('text[id]');
    
    for (let el of elements) {
      if (el.id === term) {
        matchingIds.push(el.id);
      }
    }
    
    if (matchingIds.length === 0) {
      setSearchResults([{ id: null, message: `No matches found for ${term}` }]);
      setHighlightedId(null);
    } else {
      setSearchResults(matchingIds.map(id => ({ id })));
      setHighlightedId(matchingIds[0]); // Highlight the first match
      centerViewOnElement(matchingIds[0]);
    }
  };

  // Function to center the view on the highlighted element
  const centerViewOnElement = (id: string): void => {
    const element = document.getElementById(id);
    if (!element || !svgRef.current || !containerRef.current) return;
    
    // First check if the element is an SVG element
    if (!(element instanceof SVGElement)) {
      console.error("Element is not an SVG element");
      return;
    }
    
    // Get the parent SVG group (g tag) which contains the room
    const parentGroup = element.closest('g');
    if (!parentGroup || !(parentGroup instanceof SVGGraphicsElement)) {
      console.error("Could not find parent SVG group or it's not an SVGGraphicsElement");
      return;
    }
    
    // Get element's bounding box from the parent group
    const bbox = parentGroup.getBBox();
    
    // Get container and SVG dimensions
    const containerRect = containerRef.current.getBoundingClientRect();
    const svgRect = svgRef.current.getBoundingClientRect();
    
    // Calculate center point of the element in SVG coordinates
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    
    // Calculate scaling factor
    const scale = svgRect.width / svgRef.current.viewBox.baseVal.width;
    
    // Calculate scroll position to center the element
    const scrollX = centerX * scale - containerRect.width / 2;
    const scrollY = centerY * scale - containerRect.height / 2;
    
    // Scroll the container
    containerRef.current.scrollTo({
      left: scrollX,
      top: scrollY,
      behavior: 'smooth'
    });
  };

  // Handle clicking on a search result
  const handleResultClick = (id: string): void => {
    setHighlightedId(id);
    centerViewOnElement(id);
  };

  // Handle key press in search input
  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-700 p-4 text-white">
        <h1 className="text-2xl font-bold">Floor Plan Viewer</h1>
      </div>
      
      <div className="flex p-4 gap-4">
        <div className="w-64 flex flex-col gap-4">
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Search</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                placeholder="e.g., 4N01A"
                className="flex-1 border rounded p-2"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Find
              </button>
            </div>
            <div className="text-sm mt-2 text-gray-600">
              Format: 4N## or 4S##[A-Z]
            </div>
          </div>
          
          {searchResults.length > 0 && (
            <div className="border rounded p-4">
              <h2 className="text-lg font-semibold mb-2">Results</h2>
              {searchResults[0].message ? (
                <div className="text-red-500">{searchResults[0].message}</div>
              ) : (
                <ul className="space-y-1">
                  {searchResults.map((result, index) => (
                    <li key={index}>
                      {result.id && (
                        <button
                          className={`w-full text-left p-2 rounded ${
                            highlightedId === result.id
                              ? 'bg-yellow-200'
                              : 'hover:bg-gray-100'
                          }`}
                          onClick={() => handleResultClick(result.id!)}
                        >
                          {result.id}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
          <div className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Legend</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 border"></div>
                <span>Workspaces</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-100 border"></div>
                <span>Offices/Meeting Rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-100 border"></div>
                <span>Cafeteria</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 border"></div>
                <span>Facilities</span>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="flex-1 border rounded overflow-auto"
          ref={containerRef}
        >
          {/* <FloorPlanSVG 
            highlightedId={highlightedId} 
            svgRef={svgRef} 
          /> */}
        </div>
      </div>
    </div>
  );
};

export default App;