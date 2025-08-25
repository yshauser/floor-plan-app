import { initializeApp } from "firebase/app";
import { getFirestore,  doc, setDoc } from "firebase/firestore";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as dotenv from 'dotenv';

import * as points1 from '../data/points_1.json';
import * as points2 from '../data/points_2.json';
import * as points3 from '../data/points_3.json';
import * as points4 from '../data/points_4.json';
import * as junctions3 from '../data/junctions_3.json';
import * as junctions4 from '../data/junctions_4.json';

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
    // const userCredential = await signInWithEmailAndPassword(auth, "test@test.com", "123456");
    // console.log("Signed in as:", userCredential.user.email);

    console.log("Populating points...");
    const pointsData = {
        '1': points1,
        '2': points2,
        '3': points3,
        '4': points4
    };
    await setDoc(doc(db, "points", "allPoints"), pointsData);
    console.log("Points populated successfully.");

    console.log("Populating junctions...");
    const junctionsData = {
        '3': junctions3,
        '4': junctions4
    };
    await setDoc(doc(db, "junctions", "allJunctions"), junctionsData);
    console.log("Junctions populated successfully.");

  } catch (error) {
    console.error("Error populating database:", error);
  }
}

populateDatabase();