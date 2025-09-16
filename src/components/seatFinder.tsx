import React, { useState, useEffect, useMemo } from 'react';
import { getEmployees, getMeetingRooms, getFacilityRooms } from '../services/firestoreService';
import type { Employee, MeetingRoom, FacilityRoom } from '../types';
import { Search, MapPin, Users, X, Building2 } from 'lucide-react';
import './seatFinder.css';
// some icons to consider in the future: 📍🧭🎯

interface SeatFinderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onShowOnMap: (valueSearch: string, valueLocation:string) => void;
  myLocation: string; // New prop
  setMyLocation: (location: string) => void; // New prop
  onSetTargetLocation: (location: string) => void;
  userSeatNumber: string;
}

type SortBy = 'firstName' | 'lastName' | 'seat';
type OrderBy = 'asc' | 'desc';



const SeatFinder: React.FC<SeatFinderProps> = ({ onShowOnMap, myLocation, setMyLocation, onSetTargetLocation, userSeatNumber }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [selectedMeetingRoom, setSelectedMeetingRoom] = useState<MeetingRoom | null>(null);
  const [selectedFacilityRoom, setSelectedFacilityRoom] = useState<FacilityRoom | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>('firstName');
  const [orderBy, setOrderBy] = useState<OrderBy>('asc');
  const [showOnlyMeetingRooms, setShowOnlyMeetingRooms] = useState(false);

const [employeeList, setEmployeeList] = useState<Employee[]>([]);
const [meetingRoomList, setMeetingRoomList] = useState<MeetingRoom[]>([]);
const [facilityRoomList, setFacilityRoomList] = useState<FacilityRoom[]>([]);

console.log ('for removing errors after removing saveLocation option', setMyLocation, onSetTargetLocation) // TBD - check if needed...
// console.log ('debug - user seat', {userEmail, userSeatNumber, myLocation});
useEffect(() => {
  const fetchData = async () => {
    try {
      const employees = await getEmployees();
      const meetingRooms = await getMeetingRooms();
      const facilityRooms = await getFacilityRooms();
      setEmployeeList(employees);
      setMeetingRoomList(meetingRooms);
      setFacilityRoomList(facilityRooms);
      // console.log ('Debug - FETCH EMPLOYEES', {employees})
      // console.log ('Debug - FETCH MEETING ROOMS', {meetingRooms})
      // console.log ('Debug - FETCH FACILITY ROOMS', {facilityRooms})
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };
  fetchData();
}, []);

      // console.log ('Debug - LOADED EMPLOYEES', {employeeList})
      // console.log ('Debug - LOADED MEETING ROOMS', {meetingRoomList})
      // console.log ('Debug - LOADED FACILITY ROOMS', {facilityRoomList});

  const filteredEmployees = useMemo(() => {
        if (selectedEmployee){
      setSelectedEmployee(null);
    }
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
    if (selectedMeetingRoom){
      setSelectedMeetingRoom(null);
    }
    const trimmedQuery = searchValue.trim().toLowerCase();
    if (!trimmedQuery) return [];
    return meetingRoomList.filter((room) => {
      const roomName = room.Name.toLowerCase();
      const roomNumber = room.roomNumber.toLowerCase();
      return roomName.includes(trimmedQuery) || roomNumber.includes(trimmedQuery);
    });
  }, [searchValue]);

  const filteredFacilityRooms = useMemo(() => {
    if (selectedFacilityRoom){
      setSelectedFacilityRoom(null);
    }
    const trimmedQuery = searchValue.trim().toLowerCase();
    if (!trimmedQuery) return [];
    return facilityRoomList.filter((room) => {
      const roomType = room.Type.toLowerCase();
      const roomNumber = room.roomNumber.toLowerCase();
      return roomType.includes(trimmedQuery) || roomNumber.includes(trimmedQuery);
    });
  }, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (showOnlyMeetingRooms && filteredMeetingRooms.length === 0) {
      setShowOnlyMeetingRooms(false);
    }
    setSearchValue((event.target.value));//.trim()
    // console.log ('Debug - search value', event.target.value, "xx ", filteredMeetingRooms.length, filteredEmployees.length, filteredFacilityRooms.length, {showOnlyMeetingRooms},);

    // clearSelection();
  };
  const clearSearch = () => setSearchValue('');

  const selectEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setSelectedMeetingRoom(null);
    setSelectedFacilityRoom(null);
    // setSearchValue(`${employee.firstName} ${employee.lastName}`);
  };

  const selectMeetingRoom = (room: MeetingRoom) => {
    setSelectedMeetingRoom(room);
    setSelectedFacilityRoom(null);
    setSelectedEmployee(null);
    // setSearchValue((room.Name).trim());
  };

  const selectFacilityRoom = (room: FacilityRoom) => {
    setSelectedMeetingRoom(null);
    setSelectedFacilityRoom(room);
    setSelectedEmployee(null);
    // setSearchValue((room.Name).trim());
  };

  const clearSelection = () => {
    setSelectedEmployee(null);
    setSelectedFacilityRoom(null);
    setSelectedMeetingRoom(null);
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
    // (filteredEmployees.length > 0 || filteredMeetingRooms.length > 0) && 
      (
    (showOnlyMeetingRooms && filteredMeetingRooms.length > 0) ||
    (!showOnlyMeetingRooms && (filteredEmployees.length > 0 || filteredMeetingRooms.length > 0 || filteredFacilityRooms.length > 0))
  ) &&
    !selectedEmployee && 
    !selectedMeetingRoom && 
    !selectedFacilityRoom;

  const hadnleShowOnlyMeetingRooms = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setShowOnlyMeetingRooms(checked);
 }

  const handleShowOnMap = () => {
  console.log ('debug - show on map',{searchValue,myLocation}, selectedMeetingRoom?.roomNumber, selectedFacilityRoom?.roomNumber);
    let location = myLocation;
    
    if (selectedEmployee!==null) {onShowOnMap(selectedEmployee.seatNumber,location);}
    else if (selectedMeetingRoom?.roomNumber) {onShowOnMap(selectedMeetingRoom.roomNumber,location);}
    else if (selectedFacilityRoom?.roomNumber) {onShowOnMap(selectedFacilityRoom.roomNumber,location);}
    else {onShowOnMap('',location);}
  }

  const handleShowMe = () => {
    let target = '';
    if (selectedEmployee!==null) {target = selectedEmployee.seatNumber}
    else if (selectedMeetingRoom?.roomNumber) {target = selectedMeetingRoom.roomNumber}
    else if (selectedFacilityRoom?.roomNumber) {target = selectedFacilityRoom.roomNumber}
    onShowOnMap(target, userSeatNumber )
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
                <div className="selected-item-actions">
                  <button
                    className="map-toggle-button"
                    onClick={handleShowOnMap}
                  >
                    Show on Map 
                  </button>
                  </div>
                )}
              </div>
            )}
  
            {selectedMeetingRoom && (
              <div className="selected-employee-container">
                <div className="selected-employee-info-wrapper">
                  <div className="selected-employee-details">
                    <div className="selected-employee-icon-wrapper">
                      <Building2 className="selected-employee-icon" />
                    </div>
                    <div>
                      <div className="selected-employee-name">{selectedMeetingRoom.Name}</div>
                      <div className="selected-employee-department">
                        Room {selectedMeetingRoom.roomNumber} • Floor {selectedMeetingRoom.floor} • Wing {selectedMeetingRoom.wing} • Capacity {selectedMeetingRoom.capacity} • {selectedMeetingRoom.Type} Room
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
                {(selectedMeetingRoom.floor === 4 || selectedMeetingRoom.floor === 3 || selectedMeetingRoom.floor === 2 || selectedMeetingRoom.floor === 1) && (
                  <div className="selected-item-actions">
                    <button
                      className="map-toggle-button"
                      onClick={handleShowOnMap}
                    >
                      Show on Map
                    </button>
                  </div>
                )}
              </div>
            )}
  
            {selectedFacilityRoom && (
              <div className="selected-employee-container">
                <div className="selected-employee-info-wrapper">
                  <div className="selected-employee-details">
                    <div className="selected-employee-icon-wrapper">
                      <Building2 className="selected-employee-icon" />
                    </div>
                    <div>
                      <div className="selected-employee-name">{selectedFacilityRoom.Type}</div>
                      <div className="selected-employee-department">
                        Room <strong>{selectedFacilityRoom.roomNumber}</strong> • Floor {selectedFacilityRoom.floor} • Wing {selectedFacilityRoom.wing}
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
                {(selectedFacilityRoom.floor === 4 || selectedFacilityRoom.floor === 3 || selectedFacilityRoom.floor === 2 || selectedFacilityRoom.floor === 1) && (
                  <div className="selected-item-actions">
                    <button
                      className="map-toggle-button"
                      onClick={handleShowOnMap}
                    >
                      Show on Map
                    </button>
                  </div>
                )}
              </div>
            )}

          {shouldShowResults && (
            <div className="search-results-container">
              <div className="search-results-header">
                <div>
              <h4 className="search-results-title">
                Search Results ({filteredEmployees.length + filteredMeetingRooms.length + filteredFacilityRooms.length})
              </h4>
                {(filteredEmployees.length > 0 || filteredFacilityRooms.length > 0 )&& filteredMeetingRooms.length > 0 && (
                  <div className="sort-control">
                    <label>
                      <input
                        type="checkbox"
                        checked={showOnlyMeetingRooms}
                        onChange={hadnleShowOnlyMeetingRooms}
                      />
                      Only meeting rooms
                    </label>
                  </div>
                )}
                  
                  </div>
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
                {!showOnlyMeetingRooms && filteredEmployees.map((employee, index) => (
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
                {filteredMeetingRooms.map((meeting, index) => (
                  <div
                    key={index}
                    onClick={() => selectMeetingRoom(meeting)}
                    className="search-result-item group"
                  >
                    <div className="search-result-content">
                      <div className="search-result-employee-info">
                        <div className="search-result-avatar-wrapper">
                          <span className="search-result-avatar-text">{meeting.Name[0]}</span>
                        </div>
                        <div>
                          <div className="search-result-name">{meeting.Name}</div>
                          <div className="search-result-department">
                            {meeting.Type} Room • Capacity {meeting.capacity}
                          </div>
                        </div>
                      </div>
                      <div className="search-result-location">
                        <div className="search-result-seat">
                          <MapPin className="search-result-map-pin-icon" />
                          {meeting.roomNumber}
                        </div>
                        <div className="search-result-floor-wing">
                          Floor {meeting.floor} • Wing {meeting.wing}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {!showOnlyMeetingRooms && filteredFacilityRooms.map((facility, index) => (
                  <div
                    key={index}
                    onClick={() => selectFacilityRoom(facility)}
                    className="search-result-item group"
                  >
                    <div className="search-result-content">
                      <div className="search-result-employee-info">
                        <div className="search-result-avatar-wrapper">
                          <span className="search-result-avatar-text">{facility.Type[0]}</span>
                        </div>
                        <div>
                          <div className="search-result-name">{facility.Type}</div>
                        </div>
                      </div>
                      <div className="search-result-location">
                        <div className="search-result-seat">
                          <MapPin className="search-result-map-pin-icon" />
                          {facility.roomNumber}
                        </div>
                        <div className="search-result-floor-wing">
                          Floor {facility.floor} • Wing {facility.wing}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
            {/* remove this condition so the button will appear even if myLocation is empty (which will be filled automatically with user's seat) */}
            {/* {myLocation!== ''&& ( */}
            <label>
                     <button
                      className="map-toggle-button"
                      onClick={handleShowMe}
                    >
                      Find me on map
                    </button>
              {/* {' '}show my location ({userSeatNumber}) */}
            </label>
            {/* )} */}


          {searchValue.trim() &&
            filteredEmployees.length === 0 &&
            filteredMeetingRooms.length === 0 &&
            filteredFacilityRooms.length === 0 &&
            !selectedEmployee &&
            !selectedMeetingRoom &&
            !selectedFacilityRoom && (
              <div className="no-employees-found-container">
                <div className="no-employees-found-message">
                  No results found matching your search
                </div>
                <div className="no-employees-found-tip">
                  Try searching by name or seat number
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SeatFinder;
