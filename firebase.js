// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fP3uote2JXRKCHyg4wlf_HdskzZdGZI",
  authDomain: "bjj-interface-stripe.firebaseapp.com",
  projectId: "bjj-interface-stripe",
  storageBucket: "bjj-interface-stripe.appspot.com",
  messagingSenderId: "775751357585",
  appId: "1:775751357585:web:d3a7c211a27d7cbc48db30",
  measurementId: "G-5MJ8LBK2V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
