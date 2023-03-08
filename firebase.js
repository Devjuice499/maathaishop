var firebaseConfig = {
  apiKey: "AIzaSyBOq-BEbEoXhzFrKgE_iMrwlcaAxnjj__g",
  authDomain: "jmcommerce-c8786.firebaseapp.com",
  projectId: "jmcommerce-c8786",
  storageBucket: "jmcommerce-c8786.appspot.com",
  messagingSenderId: "336115772655",
  appId: "1:336115772655:web:e8e36554c3c543fcfe7f1a",
  measurementId: "G-58SHKE2CX5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth =firebase.auth()
const database = firebase.database()
firebase.analytics();
var db = firebase.firestore();
