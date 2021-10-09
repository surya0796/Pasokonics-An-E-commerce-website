import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc  } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyD8x3RQUy5ZOPpKHRkBMgOixht3nupt7JU",
    authDomain: "bethehero-db.firebaseapp.com",
    projectId: "bethehero-db",
    storageBucket: "bethehero-db.appspot.com",
    messagingSenderId: "1045270804893",
    appId: "1:1045270804893:web:09a6229c5aa9944e825774",
    measurementId: "G-V0WWWDPWMT"
});

export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)




const google_provider = new GoogleAuthProvider(auth);

export const signInWithGoogle = () => 
{
    signInWithPopup(auth , google_provider)
    
};

export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`)
    const snapShot = await getDoc(userRef)

    if (!snapShot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date(); 
        try{
            await setDoc(userRef,
            {
                displayName,
                email,
                createdAt,
                ...additionalData
            }
        )
    } catch(err){
        console.log('Data is not created',err)
    }}
    return userRef;
}

// export const signUpNewUser = () => 
// {
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// };
    


export default firebaseApp;






