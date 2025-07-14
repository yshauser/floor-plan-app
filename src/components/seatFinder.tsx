import React, { useState, useMemo } from 'react';
import { employeeList, meetingRoomList } from '../data/seatPlan';
import type { MeetingRoom } from '../data/seatPlan';
import { Search, MapPin, Users, X, Building2 } from 'lucide-react';
import './seatFinder.css';

interface SeatFinderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onShowOnMap: (valueSearch: string, valueLocation:string) => void;
}

type SortBy = 'firstName' | 'lastName' | 'seat';
type OrderBy = 'asc' | 'desc';

const SeatFinder: React.FC<SeatFinderProps> = ({ onShowOnMap }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [selectedRoom, setSelectedRoom] = useState<MeetingRoom | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>('firstName');
  const [orderBy, setOrderBy] = useState<OrderBy>('asc');
  const [myLocation, setMyLocation] = useState(() => {
    return localStorage.getItem('myLocation') || '';
  });
  const [showMyLocation, setShowMyLocation] = useState(false);
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [tempLocation, setTempLocation] = useState(myLocation);

  const filteredEmployees = useMemo(() => {
    const trimmedQuery = searchValue.trim().toLowerCase();
    if (!trimmedQuery) return [];
    const filtered = employeeList.filter((employee) => {
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

  return filtered.sort((a, b) => {
      let valueA: string;
      let valueB: string;

      switch (sortBy) {
        case 'firstName':
          valueA = a.firstName.toLowerCase();
          valueB = b.firstName.toLowerCase();
          break;
        case 'lastName':
          valueA = a.lastName.toLowerCase();
          valueB = b.lastName.toLowerCase();
          break;
        case 'seat':
          valueA = a.seatNumber.toLowerCase();
          valueB = b.seatNumber.toLowerCase();
          break;
        default:
          valueA = a.firstName.toLowerCase();
          valueB = b.firstName.toLowerCase();
      }

      const comparison = valueA.localeCompare(valueB);
      return orderBy === 'asc' ? comparison : -comparison;
    });
  }, [searchValue, employeeList, sortBy, orderBy]);

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
  const clearSearch = () => setSearchValue('');

  const selectEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setSelectedRoom(null);
    // setSearchValue(`${employee.firstName} ${employee.lastName}`);
  };

  const selectMeetingRoom = (room: MeetingRoom) => {
    setSelectedRoom(room);
    setSelectedEmployee(null);
    // setSearchValue((room.Name).trim());
  };

  const clearSelection = () => {
    setSelectedEmployee(null);
    setSelectedRoom(null);
    // Keep the search value to re-show the results
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortBy);
  };

  const handleOrderByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value as OrderBy);
  };

  // Check if we should show search results
  const shouldShowResults = searchValue.trim() && 
    (filteredEmployees.length > 0 || filteredMeetingRooms.length > 0) && 
    !selectedEmployee && 
    !selectedRoom;

  const handleSetLocationClick= () => {
    setTempLocation(myLocation);
    setShowLocationInput(true);
  }
  const handleSaveLocation = () => {
    setMyLocation(tempLocation);
    localStorage.setItem('myLocation', tempLocation);
    setShowLocationInput(false);
    if (showMyLocation){ 
      // push to FloorPlan if checkbox checked
      if (selectedEmployee!==null) {onShowOnMap(selectedEmployee.seatNumber,tempLocation)}
      else if (selectedRoom?.roomNumber) {onShowOnMap(selectedRoom.roomNumber,tempLocation);}
      else {onShowOnMap('',tempLocation);}
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setShowMyLocation(checked);
    if (checked && myLocation !== '') {
      if (selectedEmployee!==null) {onShowOnMap(selectedEmployee.seatNumber,myLocation)}
      else if (selectedRoom?.roomNumber) {onShowOnMap(selectedRoom.roomNumber,myLocation);}
      else {onShowOnMap('',myLocation);}
    }else if (!checked){
      setTempLocation('');
    }
  };

  const handleShowOnMap = () => {
  console.log ('show on map',{searchValue,myLocation}, selectedRoom?.roomNumber);
    let location = '';
    if (showMyLocation) {location = myLocation}
    if (selectedEmployee!==null) {onShowOnMap(selectedEmployee.seatNumber,location)}
    else if (selectedRoom?.roomNumber) {onShowOnMap(selectedRoom.roomNumber,location);}
    else {onShowOnMap('',location);}
  }



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
            
            {searchValue && (
              <button
              className="clear-search-button"
              onClick={clearSearch}
              aria-label="Clear search"
              >
              <X className="search-icon" />
              </button>
            )}

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
              {(selectedEmployee.floor === 4 || selectedEmployee.floor === 3 || selectedEmployee.floor === 2 || selectedEmployee.floor === 1) && (
                <button
                  className="map-toggle-button"
                  onClick={handleShowOnMap}
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
              {(selectedRoom.floor === 4 || selectedRoom.floor === 3 || selectedRoom.floor === 2 || selectedRoom.floor === 1) && (
              <button
                className="map-toggle-button"
                onClick={handleShowOnMap}
              >
                Show on Map
              </button>
              )}
            </div>
          )}

          {shouldShowResults && (
            <div className="search-results-container">
              <div className="search-results-header">
              <h4 className="search-results-title">
                Search Results ({filteredEmployees.length + filteredMeetingRooms.length})
              </h4>
                <div className="sorting-controls">
                  <div className="sort-control">
                    <label htmlFor="sort-by" className="sort-label">Sort by:</label>
                    <select
                      id="sort-by"
                      value={sortBy}
                      onChange={handleSortByChange}
                      className="sort-select"
                    >
                      <option value="firstName">First Name</option>
                      <option value="lastName">Last Name</option>
                      <option value="seat">Seat</option>
                    </select>
                  </div>
                  <div className="sort-control">
                    <label htmlFor="order-by" className="sort-label">Order by:</label>
                    <select
                      id="order-by"
                      value={orderBy}
                      onChange={handleOrderByChange}
                      className="sort-select"
                    >
                      <option value="asc">A to Z</option>
                      <option value="desc">Z to A</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="search-results-list">
                {filteredEmployees.map((employee, index) => (
                  <div
                    key={index}
                    onClick={() => {selectEmployee(employee)}}
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

          <div className="my-location-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            {myLocation!== ''&& (
            <label>
              <input
                type="checkbox"
                checked={showMyLocation}
                onChange={handleCheckboxChange}
              />
              {' '}show my location ({myLocation})
            </label>
            )}
            <button className="set-location-button" 
              onClick={handleSetLocationClick}
              disabled={showLocationInput}
              >
              {myLocation === '' ? 'set my location' : 'edit my location'}
            </button>
          </div>
          {showLocationInput && (
            <div className="my-location-input" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={tempLocation}
                onChange={(e) => setTempLocation(e.target.value.toUpperCase().replace(/\s+/g, ''))} 
                placeholder="Location not defined"
                style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
              />
              <button onClick={handleSaveLocation}>Save</button>
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