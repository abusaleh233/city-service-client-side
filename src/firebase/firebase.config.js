// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCaRDpB_6rVQfYFp-5vRJ5OfYd8Z-FQdw8",
  authDomain: "city-service-8ba7a.firebaseapp.com",
  projectId: "city-service-8ba7a",
  storageBucket: "city-service-8ba7a.firebasestorage.app",
  messagingSenderId: "977163170465",
  appId: "1:977163170465:web:3977269b743c65808b36e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);