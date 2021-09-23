import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD8x3RQUy5ZOPpKHRkBMgOixht3nupt7JU",
    authDomain: "bethehero-db.firebaseapp.com",
    projectId: "bethehero-db",
    storageBucket: "bethehero-db.appspot.com",
    messagingSenderId: "1045270804893",
    appId: "1:1045270804893:web:09a6229c5aa9944e825774",
    measurementId: "G-V0WWWDPWMT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






