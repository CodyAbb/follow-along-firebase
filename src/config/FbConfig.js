import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

export const fbConfig = {
  apiKey: "AIzaSyABhKw1UD-mFMzUR6EsLlYg6LKKOWhiaV4",
  authDomain: "projectkeeper-39c7a.firebaseapp.com",
  databaseURL: "https://projectkeeper-39c7a.firebaseio.com",
  projectId: "projectkeeper-39c7a",
  storageBucket: "projectkeeper-39c7a.appspot.com",
  messagingSenderId: "949538932103",
  appId: "1:949538932103:web:00c82b28d56243d523bf22",
  measurementId: "G-F4B0KV5S4M"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();
firebase.analytics();

export default firebase;
