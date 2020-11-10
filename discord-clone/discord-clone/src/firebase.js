import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAuD4WlpPPKYKIT1dVCDtHZ_kkeQhDBUF0",
    authDomain: "discord-clone-96b4d.firebaseapp.com",
    databaseURL: "https://discord-clone-96b4d.firebaseio.com",
    projectId: "discord-clone-96b4d",
    storageBucket: "discord-clone-96b4d.appspot.com",
    messagingSenderId: "357996454898",
    appId: "1:357996454898:web:40672fd6857735e398c16b",
    measurementId: "G-10887VMLKN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;