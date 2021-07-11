import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
// firebase/auth


const firebaseConfig = {
    apiKey: "AIzaSyBVdnftI1R1BVwTxRYTsrNns_8uu0Rl9hI",
    authDomain: "appland-e-commerce.firebaseapp.com",
    projectId: "appland-e-commerce",
    storageBucket: "appland-e-commerce.appspot.com",
    messagingSenderId: "985601746686",
    appId: "1:985601746686:web:4fe603d63ad1be1c4a27af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Ref db
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

//Facebook provider

export {
    db,
    googleAuthProvider,
    firebase,
    facebookAuthProvider
}