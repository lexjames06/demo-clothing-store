import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0T_nFngqmTBugMB5kMCsY8iv_YE3fGvA",
    authDomain: "fir-store-db.firebaseapp.com",
    databaseURL: "https://fir-store-db.firebaseio.com",
    projectId: "fir-store-db",
    storageBucket: "fir-store-db.appspot.com",
    messagingSenderId: "39854679475",
    appId: "1:39854679475:web:27c7c9bab24aea7d3517c6",
    measurementId: "G-FP3V3XJXQB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;