import React, { useState, useMemo } from 'react';
import { employeeList } from '../data/seatPlan';
// import type { Employee } from '../data/seatPlan';
import { Search, MapPin, Users, X, Building2, Route } from 'lucide-react';

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
      employee.seatNumber.toLowerCase().includes(searchQuery.toLowerCase())
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

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Seat Finder</h1>
      
//       <div className="bg-gray-100 p-4 rounded-lg mb-6">
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Search for Employee:</label>
//           <input
//             type="text"
//             placeholder="Search by first name, last name, or seat number..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
//           />
//         </div>
        
//         {searchQuery && (
//           <div className="mt-4">
//             {filteredEmployees.length > 0 ? (
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white border border-gray-300 rounded-lg shadow-sm">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                         First Name
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                         Last Name
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
//                         Seat Number
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredEmployees.map((employee, index) => (
//                       <tr key={index} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                           {employee.firstName}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                           {employee.lastName}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
//                           {employee.seatNumber}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ) : (
//               <div className="text-center py-8 text-gray-500">
//                 <p>No employees found matching your search.</p>
//               </div>
//             )}
//           </div>
//         )}
        
//         <div className="mt-6 text-center">
//           <button
//             onClick={onToggleMap}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
//           >
//             {showMap ? 'Close Map & Navigate' : 'Map & Navigate'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
};

export default SeatFinder;