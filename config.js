import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTvYYUEQBcRmabrOZPt7L9hv3HzLXW9Q0",
  authDomain: "near-by-car.firebaseapp.com",
  projectId: "near-by-car",
  storageBucket: "near-by-car.appspot.com",
  messagingSenderId: "387939223266",
  appId: "1:387939223266:web:c8b35bace82309078bc0bb",
  measurementId: "G-0V9XQGQ7RC",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
