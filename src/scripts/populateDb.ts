import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { employeeList, meetingRoomList } from "../data/seatPlan";
import * as dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function populateDatabase() {
  try {
    // const auth = getAuth(app);
    // TODO: Replace with your actual user credentials
    // const userCredential = await signInWithEmailAndPassword(auth, "yshauser@gmail.com", "y030579H!");
    // console.log("Signed in as:", userCredential.user.email);

    console.log("Populating employees...");
    for (const employee of employeeList) {
      await addDoc(collection(db, "employees"), employee);
    }
    console.log("Employees populated successfully.");

    console.log("Populating meeting rooms...");
    for (const room of meetingRoomList) {
      await addDoc(collection(db, "meetingRooms"), room);
    }
    console.log("Meeting rooms populated successfully.");
  } catch (error) {
    console.error("Error populating database:", error);
  }
}

populateDatabase();