// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCOymw7I5vjPMiseAAOsvTTkJNPHbadE",
  authDomain: "u-pay-shop-300f7.firebaseapp.com",
  projectId: "u-pay-shop-300f7",
  storageBucket: "u-pay-shop-300f7.appspot.com",
  messagingSenderId: "1050141837999",
  appId: "1:1050141837999:web:9668878b29074874b0e25a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);