import firebase from "firebase/compat/app";
import "firebase/compat/auth";



import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyChpX3VEyWzPSVzidJPGpnBRAndBpFvw7A",
  authDomain: "eshop-41733.firebaseapp.com",
  projectId: "eshop-41733",
  storageBucket: "eshop-41733.appspot.com",
  messagingSenderId: "878607428405",
  appId: "1:878607428405:web:741ff7800f354b1ae13a7c",
  measurementId: "G-32XYDMX8JG",
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const firestore = firebase.firestore();

export { auth, firestore };


