import firebase from "firebase";
//authentication
import "firebase/auth";
//realtime database
import "firebase/database";
//storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj7-iGig0MCT8FPubnm8J4kED42m2wU9s",
  authDomain: "krishwork-proj.firebaseapp.com",
  projectId: "krishwork-proj",
  storageBucket: "krishwork-proj.appspot.com",
  messagingSenderId: "105405800890",
  appId: "1:105405800890:web:260a727359f353cc777d83"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
