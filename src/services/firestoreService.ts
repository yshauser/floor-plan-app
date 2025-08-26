import { 
  collection, 
  getDocs, 
  doc, 
//   setDoc, 
//   deleteDoc, 
//   query, 
//   where,
//   updateDoc,
//   addDoc,
//   writeBatch,
  getDoc,
  // type DocumentData
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Point, Employee, MeetingRoom } from '../types';

const EMPLOYEES_COLLECTION = 'employees';
const MEETINGROOMS_COLLECTION = 'meetingRooms';
const POINTS_COLLECTION = 'points';
const POINTS_DOCUMENT = 'allPoints';
const JUNCTIONS_COLLECTION = 'junctions';
const JUNCTIONS_DOCUMENT = 'allJunctions';

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

// Get points specifically  
export const getAllPointsFromAllMaps = async (): Promise<Record<string, Point[]>> => {
  return getDocumentArrayOfMapsData<Point>(POINTS_COLLECTION, POINTS_DOCUMENT);
};

export const getAllJunctionsFromAllMaps = async (): Promise<Record<string, Record<string, string[]>>> => {
  return getDocumentMapsOfArraysData<string>(JUNCTIONS_COLLECTION, JUNCTIONS_DOCUMENT);
};

//generic function to retrieve doucment data when the data is saved in Map format 
export const getDocumentMapsData= async <T>(collectionName: string, documentName: string): Promise<Record<string, T[]>> => {
  const docRef = doc(db, collectionName, documentName);
  const allMapsData: Record<string, T[]> = {};
  
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // const allPointsData = docSnap.data();
      const data = docSnap.data();

      console.log ('Debug - doc data', {collectionName, documentName,data})

      // Iterate over all map keys
      Object.keys(data).forEach(mapKey => {
        const mapData = data[mapKey];
        
        if (mapData && typeof mapData === 'object' && mapData !== null) {
          // Access the "default" array within each map
          const def = mapData.default;
          
          if (Array.isArray(def)) {
            allMapsData[mapKey] = def as unknown as T[];
            console.log(`Points from map '${mapKey}':`, def.length, "points");
          } else if (def && typeof def === "object") {
            const merged = (Object.values(def) as T[][]).flat();
            allMapsData[mapKey] = merged;
            console.log(`Points from map '${mapKey}':`, merged.length, 'points');
          } else {
            console.log(`The 'default' field inside map '${mapKey}' is not an array or does not exist.`);
            allMapsData[mapKey] = []; //as unknown as T[]
          }
        } else {
          console.log(`Map '${mapKey}' field is not an object.`);
          allMapsData[mapKey] = []; // as unknown as T[];
        }
      });
      
      return allMapsData;
    } else {
      console.log("No ", documentName, " document found in the ", collectionName," collection.");
      return {};
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return {};
  }
}

export const getDocumentArrayOfMapsData = async <T>(
  collectionName: string,
  documentName: string
): Promise<Record<string, T[]>> => {
  const docRef = doc(db, collectionName, documentName);
  const allMapsData: Record<string, T[]> = {};

  try {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return {};

    const data = docSnap.data();

    Object.keys(data).forEach((mapKey) => {
      const mapData = data[mapKey];

      if (mapData && Array.isArray(mapData.default)) {
        allMapsData[mapKey] = mapData.default as T[];
      } else {
        allMapsData[mapKey] = [];
      }
    });

    return allMapsData;
  } catch (error) {
    console.error("Error getting document:", error);
    return {};
  }
};

export const getDocumentMapsOfArraysData = async <T>(
  collectionName: string,
  documentName: string
): Promise<Record<string, Record<string, T[]>>> => {
  const docRef = doc(db, collectionName, documentName);
  const allMapsData: Record<string, Record<string, T[]>> = {};
  try {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return {};

    const data = docSnap.data();

    Object.keys(data).forEach((mapKey) => {
      const mapData = data[mapKey];

      if (mapData && typeof mapData.default === "object") {
        allMapsData[mapKey] = mapData.default as Record<string, T[]>;
      } else {
        allMapsData[mapKey] = {};
      }
    });
  // console.log ('DEBUG - getDocumentMapsOfArraysData', {allMapsData})

    return allMapsData;
  } catch (error) {
    console.error("Error getting document:", error);
    return {};
  }
  return allMapsData;
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

