import React, { useState, useMemo } from 'react';
import { employeeList, meetingRoomList } from '../data/seatPlan';
import type { MeetingRoom } from '../data/seatPlan';
import { Search, MapPin, Users, X, Building2, Route } from 'lucide-react';
import './seatFinder.css';

interface SeatFinderProps {
  onToggleMap: () => void;
  showMap: boolean;
}

const SeatFinder: React.FC<SeatFinderProps> = ({ onToggleMap, showMap }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [selectedRoom, setSelectedRoom] = useState<MeetingRoom | null>(null);

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

  const filteredMeetingRooms = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
  
    return meetingRoomList.filter(room =>
      room.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const selectEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setSearchQuery(`${employee.firstName} ${employee.lastName}`);
  };

  const selectMeetingRoom = (room: MeetingRoom) => {
    setSelectedRoom(room);
    setSelectedEmployee(null); // deselect employee
    setSearchQuery(room.Name);
  };

  return (
    <div className="seat-finder-container">
      <div className="seat-finder-content">
        {/* Header */}
        <div className="seat-finder-header">
          <div className="seat-finder-header-title-container">
            <div className="seat-finder-header-icon-wrapper">
              <Building2 className="seat-finder-header-icon" />
            </div>
            <h1 className="seat-finder-title">
              {/* Smart Seat Finder */}
              Seat Finder
            </h1>
          </div>
          {/* <p className="seat-finder-subtitle">Find colleagues and navigate through office spaces</p> */}
          <p className="seat-finder-subtitle">Find colleagues and meeting rooms</p>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <div className="search-input-wrapper">
            <div className="search-icon-container">
              <Search className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search by name, seat/room number, or department..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          {selectedEmployee && (
            <div className="selected-employee-container">
              <div className="selected-employee-info-wrapper">
                <div className="selected-employee-details">
                  <div className="selected-employee-icon-wrapper">
                    <Users className="selected-employee-icon" />
                  </div>
                  <div>
                    <h3 className="selected-employee-name">
                      {selectedEmployee.firstName} {selectedEmployee.lastName}
                    </h3>
                    <p className="selected-employee-department">
                      {selectedEmployee.department} • Seat {selectedEmployee.seatNumber}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEmployee(null)}
                  className="selected-employee-close-button"
                >
                  <X className="selected-employee-close-icon" />
                </button>
              </div>
            </div>
          )}
          
          {selectedRoom && (
            <div className="selected-employee-container">
              <div className="selected-employee-info-wrapper">
                <div className="selected-employee-details">
                  <div className="selected-employee-icon-wrapper">
                    <Building2 className="selected-employee-icon" />
                  </div>
                  <div>
                    <h3 className="selected-employee-name">
                      {selectedRoom.Name}
                    </h3>
                    <p className="selected-employee-department">
                      Room {selectedRoom.roomNumber} • Floor {selectedRoom.floor} • Wing {selectedRoom.wing} • Capacity {selectedRoom.capacity} {selectedRoom.VC ? '• VC' : ''}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="selected-employee-close-button"
                >
                  <X className="selected-employee-close-icon" />
                </button>
              </div>
            </div>
          )}


          {searchQuery && (filteredEmployees.length > 0 || filteredMeetingRooms.length > 0) && (
            <div className="search-results-container">
              <h3 className="search-results-title">
                <Users className="search-results-icon" />
                Search Results ({filteredEmployees.length + filteredMeetingRooms.length})
              </h3>
              <div className="search-results-list custom-scrollbar">
                {filteredEmployees.map((employee, index) => (
                  <div
                    key={index}
                    onClick={() => selectEmployee(employee)}
                    className="search-result-item group"
                  >
                    <div className="search-result-content">
                      <div className="search-result-employee-info">
                        <div className="search-result-avatar-wrapper group-hover:from-blue-200 group-hover:to-indigo-200">
                          <span className="search-result-avatar-text">
                            {employee.firstName[0]}{employee.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <h4 className="search-result-name group-hover:text-blue-600">
                            {employee.firstName} {employee.lastName}
                          </h4>
                          <p className="search-result-department">{employee.department}</p>
                        </div>
                      </div>
                      <div className="search-result-location">
                        <div className="search-result-seat">
                          <MapPin className="search-result-map-pin-icon" />
                          {employee.seatNumber}
                        </div>
                        <p className="search-result-floor-wing">Floor {employee.floor} • Wing {employee.wing}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredMeetingRooms.map((room, index) => (
                        <div
                          key={`room-${index}`}
                          onClick={() => selectMeetingRoom(room)}
                          className="search-result-item group"
                        >
                          <div className="search-result-content">
                            <div className="search-result-employee-info">
                              <div className="search-result-avatar-wrapper group-hover:from-green-200 group-hover:to-teal-200">
                                <span className="search-result-avatar-text">
                                  {room.Name[0]}
                                </span>
                              </div>
                              <div>
                                <h4 className="search-result-name group-hover:text-green-600">
                                  {room.Name}
                                </h4>
                                <p className="search-result-department">Room {room.roomNumber}</p>
                              </div>
                            </div>
                            <div className="search-result-location">
                              <div className="search-result-seat">
                                <MapPin className="search-result-map-pin-icon" />
                                {room.roomNumber}
                              </div>
                              <p className="search-result-floor-wing">
                                Floor {room.floor} • Wing {room.wing} • Capacity {room.capacity} {room.VC ? '• VC' : ''}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
              </div>
            </div>
          )}

          {searchQuery && filteredEmployees.length === 0 && filteredMeetingRooms.length === 0 && (
            <div className="no-employees-found-container">
              <div className="no-employees-found-icon-wrapper">
                <Search className="no-employees-found-icon" />
              </div>
              <p className="no-employees-found-message">No employees found matching your search</p>
              <p className="no-employees-found-tip">Try searching by name, seat number, or department</p>
            </div>
          )}
          
          <div className="map-toggle-button-container">
            <button
              onClick={onToggleMap}
              style={{ display: 'none' }} // for now
              className={`map-toggle-button ${showMap ? 'show-map' : ''}`}
            >
              {showMap ? (
                <>
                  <X className="map-toggle-button-icon" />
                  Close Navigation
                </>
              ) : (
                <>
                  <Route className="map-toggle-button-icon" />
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

export default SeatFinder;
