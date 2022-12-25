import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD57zUq_FpYAjJH3lgw4Fsr8AhNwdjUdps",
  authDomain: "linked-in-react-master.firebaseapp.com",
  projectId: "linked-in-react-master",
  storageBucket: "linked-in-react-master.appspot.com",
  messagingSenderId: "345427023884",
  appId: "1:345427023884:web:6e86c6f5c1820e531fb629",
  measurementId: "G-2M9NQ2Y6XG"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };