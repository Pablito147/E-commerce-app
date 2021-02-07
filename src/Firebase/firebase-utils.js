import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCpySOK9q0Cm--252O-ddgQsJg7-utMD0",
    authDomain: "crwn-db-cdfe5.firebaseapp.com",
    projectId: "crwn-db-cdfe5",
    storageBucket: "crwn-db-cdfe5.appspot.com",
    messagingSenderId: "895890764965",
    appId: "1:895890764965:web:85673718504e7edf0c894c",
    measurementId: "G-L9V7YSHBPZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signUpWithGoole = () => auth.signInWithPopup(provider);

export default firebase;