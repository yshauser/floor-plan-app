import { 
  collection, 
  getDocs, 
//   doc, 
//   setDoc, 
//   deleteDoc, 
//   query, 
//   where,
//   updateDoc,
//   addDoc,
//   writeBatch,
//   getDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Employee, MeetingRoom } from '../types';

const EMPLOYEES_COLLECTION = 'employees';
const MEETINGROOMS_COLLECTION = 'meetingRooms';
// const POINTS_COLLECTION = 'points';
// const JUNCTIONS_COLLECTION = 'junctions';

// Generic function to get all documents from a collection
export const getCollection = async <T>(collectionName: string): Promise<T[]> => {
  try {
    console.log ('getCollection', collectionName)

    const querySnapshot = await getDocs(collection(db, collectionName));
    const data: T[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() } as T);
    });
    return data;
  } catch (error) {
    console.error(`Error getting ${collectionName} collection:`, error);
    throw error;
  }
};

// Get employees specifically
export const getEmployees = async (): Promise<Employee[]> => {
  return getCollection<Employee>(EMPLOYEES_COLLECTION);
};

// Get meeting rooms specifically  
export const getMeetingRooms = async (): Promise<MeetingRoom[]> => {
  return getCollection<MeetingRoom>(MEETINGROOMS_COLLECTION);
};

// Add real-time listener (optional)
// export const subscribeToCollection = <T>(
//   collectionName: string, 
//   callback: (data: T[]) => void
// ) => {
//   const unsubscribe = onSnapshot(
//     collection(db, collectionName),
//     (querySnapshot) => {
//       const data: T[] = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() } as T);
//       });
//       callback(data);
//     },
//     (error) => {
//       console.error(`Error listening to ${collectionName}:`, error);
//     }
//   );
//   return unsubscribe;
// };

