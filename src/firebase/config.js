import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBBagrn_lFRQ6PsQi-yS-azG8sXpZGV5YU",
    authDomain: "olx-clone-45202.firebaseapp.com",
    projectId: "olx-clone-45202",
    storageBucket: "olx-clone-45202.appspot.com",
    messagingSenderId: "571989147645",
    appId: "1:571989147645:web:6ad90090b75117ab78a394",
    measurementId: "G-XRMYE084C0"
  };


  export default firebase.initializeApp(firebaseConfig)