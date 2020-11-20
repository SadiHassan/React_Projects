import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDB75rTdZqxAi9yEVvbCg5VifqzgOEothw",
    authDomain: "hudai-alap.firebaseapp.com",
    databaseURL: "https://hudai-alap.firebaseio.com",
    projectId: "hudai-alap",
    storageBucket: "hudai-alap.appspot.com",
    messagingSenderId: "417842508033",
    appId: "1:417842508033:web:9d0420085aed448307ab00",
    measurementId: "G-09GBTR03VC"
  };

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; // import { auth, provider } from './firebase'
export default db; // import db from './firebase'
