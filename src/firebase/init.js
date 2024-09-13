// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoBDIwJ8TW-2FoOhUaspquXD_ZL38VdQE",
  authDomain: "fit5032-efolio-10ead.firebaseapp.com",
  projectId: "fit5032-efolio-10ead",
  storageBucket: "fit5032-efolio-10ead.appspot.com",
  messagingSenderId: "731475454402",
  appId: "1:731475454402:web:bceb995d6b421c4a21ce5b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db