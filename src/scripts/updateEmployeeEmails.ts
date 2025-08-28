// a one-time script to load employees from DB and add an email attribute to each employee document

import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import * as dotenv from 'dotenv';
dotenv.config();

const EMPLOYEES_COLLECTION = 'employees';

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

const updateEmployeeEmails = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, EMPLOYEES_COLLECTION));

    const updatePromises = querySnapshot.docs.map(async (employeeDoc) => {
      const data = employeeDoc.data();
      const { firstName, lastName } = data;

      if (firstName && lastName) {
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@rbbn.com`;
        const docRef = doc(db, EMPLOYEES_COLLECTION, employeeDoc.id);
        await updateDoc(docRef, { email });
        console.log(`✅ Updated ${employeeDoc.id} with email: ${email}`);
      } else {
        console.warn(`⚠️ Missing firstName or lastName for document ID: ${employeeDoc.id}`);
      }
    });

    await Promise.all(updatePromises);
    console.log('🎉 All employee emails updated successfully.');
  } catch (error) {
    console.error('❌ Error updating employee emails:', error);
  }
};

updateEmployeeEmails();