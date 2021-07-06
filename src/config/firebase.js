import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXf2V6ZHYXTxvVFp_gzbYH9wBvlG805MM",
    authDomain: "souviktalks-2021.firebaseapp.com",
    projectId: "souviktalks-2021",
    storageBucket: "souviktalks-2021.appspot.com",
    messagingSenderId: "834885789556",
    appId: "1:834885789556:web:1ea16e4d8f9fce19fa2e21",
    measurementId: "G-JXHSFQ56M3"
  };

  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;