// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChpX3VEyWzPSVzidJPGpnBRAndBpFvw7A",
  authDomain: "eshop-41733.firebaseapp.com",
  projectId: "eshop-41733",
  storageBucket: "eshop-41733.appspot.com",
  messagingSenderId: "878607428405",
  appId: "1:878607428405:web:741ff7800f354b1ae13a7c",
  measurementId: "G-32XYDMX8JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);