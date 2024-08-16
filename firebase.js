// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQO6Q1UHb7twaZ-0WwRgLHUlqajXT2BBo",
  authDomain: "flashcardsaas-38bf8.firebaseapp.com",
  projectId: "flashcardsaas-38bf8",
  storageBucket: "flashcardsaas-38bf8.appspot.com",
  messagingSenderId: "935913351662",
  appId: "1:935913351662:web:977d57fd2dad9622e8c6ff",
  measurementId: "G-FGWBWZFMW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}