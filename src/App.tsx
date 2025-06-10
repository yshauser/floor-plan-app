import React, { useState, useMemo, useRef } from 'react';
import { Search, MapPin, Navigation, Users, X, Building2, Route } from 'lucide-react';
import { employeeList } from './data/seatPlan';
import { svgContent } from './data/floorplan';


interface SeatFinderProps {
  onToggleMap: () => void;
  showMap: boolean;
}

const SeatFinder: React.FC<SeatFinderProps> = ({ onToggleMap, showMap }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const filteredEmployees = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    
    return employeeList.filter(employee => 
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.seatNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const selectEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setSearchQuery(`${employee.firstName} ${employee.lastName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Smart Seat Finder
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Find colleagues and navigate through office spaces</p>
        </div>

        {/* Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, seat number, or department..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/70"
            />
          </div>

          {selectedEmployee && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">
                      {selectedEmployee.firstName} {selectedEmployee.lastName}
                    </h3>
                    <p className="text-green-600 text-sm">
                      {selectedEmployee.department} • Seat {selectedEmployee.seatNumber}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEmployee(null)}
                  className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-green-600" />
                </button>
              </div>
            </div>
          )}
          
          {searchQuery && filteredEmployees.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Search Results ({filteredEmployees.length})
              </h3>
              <div className="grid gap-3 max-h-80 overflow-y-auto custom-scrollbar">
                {filteredEmployees.map((employee, index) => (
                  <div
                    key={index}
                    onClick={() => selectEmployee(employee)}
                    className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                          <span className="text-blue-600 font-semibold text-lg">
                            {employee.firstName[0]}{employee.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {employee.firstName} {employee.lastName}
                          </h4>
                          <p className="text-gray-600 text-sm">{employee.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-blue-600 font-medium">
                          <MapPin className="w-4 h-4" />
                          {employee.seatNumber}
                        </div>
                        <p className="text-gray-500 text-sm">Floor {employee.floor} • Wing {employee.wing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchQuery && filteredEmployees.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No employees found matching your search</p>
              <p className="text-gray-400 text-sm mt-1">Try searching by name, seat number, or department</p>
            </div>
          )}
          
          <div className="flex gap-4 mt-6">
            <button
              onClick={onToggleMap}
              className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                showMap 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {showMap ? (
                <>
                  <X className="w-5 h-5" />
                  Close Navigation
                </>
              ) : (
                <>
                  <Route className="w-5 h-5" />
                  Open Floor Map
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FloorPlanProps {
  svgContent: string;
}

const FloorPlan: React.FC<FloorPlanProps> = ({ svgContent }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [startRoom, setStartRoom] = useState<string>('');
  const [endRoom, setEndRoom] = useState<string>('');
  const [path, setPath] = useState<any[]>([]);
  const [showEmployees, setShowEmployees] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);

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
};

const App: React.FC = () => {
  const [showMap, setShowMap] = useState<boolean>(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen">
      <SeatFinder onToggleMap={toggleMap} showMap={showMap} />
      
      {showMap && (
        <div className="border-t border-gray-300">
          <FloorPlan svgContent={svgContent} />
        </div>
      )}
    </div>
  );
};

export default App;
