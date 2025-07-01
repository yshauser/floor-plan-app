import React, { useState, useMemo } from 'react';
import { employeeList, meetingRoomList } from '../data/seatPlan';
import type { MeetingRoom } from '../data/seatPlan';
import { Search, MapPin, Users, X, Building2 } from 'lucide-react';
import './seatFinder.css';

interface SeatFinderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onShowOnMap: (value: string) => void;
}


const SeatFinder: React.FC<SeatFinderProps> = ({ onShowOnMap }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [selectedRoom, setSelectedRoom] = useState<MeetingRoom | null>(null);

  const filteredEmployees = useMemo(() => {
    const trimmedQuery = searchValue.trim().toLowerCase();
    if (!trimmedQuery) return [];
    return employeeList.filter((employee) => {
      const firstName = employee.firstName.toLowerCase();
      const lastName = employee.lastName.toLowerCase();
      const seatNumber = employee.seatNumber.toLowerCase();
      const fullName = `${firstName} ${lastName}`;
      const reverseFullName = `${lastName} ${firstName}`;
      return (
        firstName.includes(trimmedQuery) ||
        lastName.includes(trimmedQuery) ||
        seatNumber.includes(trimmedQuery) ||
        fullName.includes(trimmedQuery) ||
        reverseFullName.includes(trimmedQuery)
      );
    });
  }, [searchValue]);

  const filteredMeetingRooms = useMemo(() => {
    const trimmedQuery = searchValue.trim().toLowerCase();
    if (!trimmedQuery) return [];
    return meetingRoomList.filter((room) => {
      const roomName = room.Name.toLowerCase();
      const roomNumber = room.roomNumber.toLowerCase();
      return roomName.includes(trimmedQuery) || roomNumber.includes(trimmedQuery);
    });
  }, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue((event.target.value).trim());
  };

  const selectEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setSelectedRoom(null);
    setSearchValue(`${employee.firstName} ${employee.lastName}`);
  };

  const selectMeetingRoom = (room: MeetingRoom) => {
    setSelectedRoom(room);
    setSelectedEmployee(null);
    setSearchValue((room.Name).trim());
  };

  const clearSelection = () => {
    setSelectedEmployee(null);
    setSelectedRoom(null);
    // Keep the search value to re-show the results
  };

  // Check if we should show search results
  const shouldShowResults = searchValue.trim() && 
    (filteredEmployees.length > 0 || filteredMeetingRooms.length > 0) && 
    !selectedEmployee && 
    !selectedRoom;

  return (
    <div className="seat-finder-container">
      <div className="seat-finder-content">
        <div className="seat-finder-header">
          <h2 className="seat-finder-title">Seat Finder</h2>
          <p className="seat-finder-subtitle">Find colleagues and meeting rooms</p>
        </div>

        <div className="search-section">
          <div className="search-input-wrapper">
            <div className="search-icon-container">
              <Search className="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search by name, seat, or room..."
              value={searchValue}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          {selectedEmployee  && (
            <div className="selected-employee-container">
              <div className="selected-employee-info-wrapper">
                <div className="selected-employee-details">
                  <div className="selected-employee-icon-wrapper">
                    <Users className="selected-employee-icon" />
                  </div>
                  <div>
                    <div className="selected-employee-name">
                      {selectedEmployee.firstName} {selectedEmployee.lastName}
                    </div>
                    <div className="selected-employee-department">
                      {selectedEmployee.department} • Seat {selectedEmployee.seatNumber}
                    </div>
                  </div>
                </div>
                <button
                  onClick={clearSelection}
                  className="selected-employee-close-button"
                >
                  <X className="selected-employee-close-icon" />
                </button>
              </div>
              {selectedEmployee.floor === 4 && (
                <button
                  className="map-toggle-button"
                  onClick={() => onShowOnMap(selectedEmployee.seatNumber)}
                >
                  Show on Map
                </button>
              )}
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
                    <div className="selected-employee-name">{selectedRoom.Name}</div>
                    <div className="selected-employee-department">
                      Room {selectedRoom.roomNumber} • Floor {selectedRoom.floor} • Wing {selectedRoom.wing} • Capacity {selectedRoom.capacity} • {selectedRoom.Type} Room
                    </div>
                  </div>
                </div>
                <button
                  onClick={clearSelection}
                  className="selected-employee-close-button"
                >
                  <X className="selected-employee-close-icon" />
                </button>
              </div>
              {selectedRoom.floor === 4 && (
              <button
                className="map-toggle-button"
                onClick={() => onShowOnMap(selectedRoom.roomNumber)}
              >
                Show on Map
              </button>
              )}
            </div>
          )}

          {shouldShowResults && (
            <div className="search-results-container">
              <h4 className="search-results-title">
                Search Results ({filteredEmployees.length + filteredMeetingRooms.length})
              </h4>
              <div className="search-results-list">
                {filteredEmployees.map((employee, index) => (
                  <div
                    key={index}
                    onClick={() => selectEmployee(employee)}
                    className="search-result-item group"
                  >
                    <div className="search-result-content">
                      <div className="search-result-employee-info">
                        <div className="search-result-avatar-wrapper">
                          <span className="search-result-avatar-text">
                            {employee.firstName[0]}
                            {employee.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <div className="search-result-name">
                            {employee.firstName} {employee.lastName}
                          </div>
                          <div className="search-result-department">{employee.department}</div>
                        </div>
                      </div>
                      <div className="search-result-location">
                        <div className="search-result-seat">
                          <MapPin className="search-result-map-pin-icon" />
                          {employee.seatNumber}
                        </div>
                        <div className="search-result-floor-wing">
                          Floor {employee.floor} • Wing {employee.wing}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredMeetingRooms.map((room, index) => (
                  <div
                    key={index}
                    onClick={() => selectMeetingRoom(room)}
                    className="search-result-item group"
                  >
                    <div className="search-result-content">
                      <div className="search-result-employee-info">
                        <div className="search-result-avatar-wrapper">
                          <span className="search-result-avatar-text">{room.Name[0]}</span>
                        </div>
                        <div>
                          <div className="search-result-name">{room.Name}</div>
                          <div className="search-result-department">
                            {room.Type} Room • Capacity {room.capacity}
                          </div>
                        </div>
                      </div>
                      <div className="search-result-location">
                        <div className="search-result-seat">
                          <MapPin className="search-result-map-pin-icon" />
                          {room.roomNumber}
                        </div>
                        <div className="search-result-floor-wing">
                          Floor {room.floor} • Wing {room.wing}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchValue.trim() &&
            filteredEmployees.length === 0 &&
            filteredMeetingRooms.length === 0 &&
            !selectedEmployee &&
            !selectedRoom && (
              <div className="no-employees-found-container">
                <div className="no-employees-found-message">
                  No employees found matching your search
                </div>
                <div className="no-employees-found-tip">
                  Try searching by name, seat number, or department
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SeatFinder;