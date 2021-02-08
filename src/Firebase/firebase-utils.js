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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const useRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShop = await useRef.get();
    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await useRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch {
            console.log("error msg");
        }
    }
    return useRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signUpWithGoole = () => auth.signInWithPopup(provider);

export default firebase;