export interface Employee {
  firstName: string;
  lastName: string;
  seatNumber: string;
  floor: number;
  wing: string;
  department: string;
  email: string; // Added email field
}

export interface MeetingRoom {
  Name: string;
  Type: string;
  roomNumber: string;
  floor: number;
  wing: string;
  capacity: number;
}

export interface Point {
    x: number;
    y: number;
    label: string;
  }

export interface FacilityRoom {
  Type: string;
  roomNumber: string;
  floor: number;
  wing: string;
}