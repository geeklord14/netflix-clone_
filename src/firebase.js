import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCTrQy099e98_gXhsp0RDzSY79p-PdLqes",
    authDomain: "netflix-clone-abaae.firebaseapp.com",
    projectId: "netflix-clone-abaae",
    storageBucket: "netflix-clone-abaae.appspot.com",
    messagingSenderId: "984954542417",
    appId: "1:984954542417:web:93a6a0ad655b2e9ea25b70"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;