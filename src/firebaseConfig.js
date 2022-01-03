import firebase, { auth } from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSENGER_ID,
  appId: process.env.REACT_APP_ID,
};

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// export const db = firebase.firestore();

// export default firebase;
