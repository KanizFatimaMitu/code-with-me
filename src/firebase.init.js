// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqMSqkNFr2tIyNYTAHK7we33E4J8gIJKM",
  authDomain: "code-with-me-53590.firebaseapp.com",
  projectId: "code-with-me-53590",
  storageBucket: "code-with-me-53590.appspot.com",
  messagingSenderId: "407929322772",
  appId: "1:407929322772:web:36003162d27099da719601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;