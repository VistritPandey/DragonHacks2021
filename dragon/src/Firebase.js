import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOqCcpQ5ZfTZz6mWWzX-0_xQ4wluQH9Dg",
  authDomain: "social-dragon.firebaseapp.com",
  projectId: "social-dragon",
  storageBucket: "social-dragon.appspot.com",
  messagingSenderId: "166590375234",
  appId: "1:166590375234:web:0b9f1218789289230914db",
  measurementId: "G-DB79DCS84G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
