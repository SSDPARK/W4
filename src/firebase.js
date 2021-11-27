// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBI3VO3bs-7W-gyr2Z7IsACb8DqevxTWdM',
  authDomain: 'diction-a5c1a.firebaseapp.com',
  projectId: 'diction-a5c1a',
  storageBucket: 'diction-a5c1a.appspot.com',
  messagingSenderId: '110835794609',
  appId: '1:110835794609:web:26210a39d7bc5d0edd1890',
  measurementId: 'G-MR4H49KQ0W',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
