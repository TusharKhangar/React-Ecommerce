import { initializeApp } from 'firebase/app';
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider ,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore , doc , getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig  = {
    apiKey: "AIzaSyB6G3O0Vgg8pDBqPyWPAroLbAN8cRTojLQ",
    authDomain: "react-ecommerce-bd321.firebaseapp.com",
    projectId: "react-ecommerce-bd321",
    storageBucket: "react-ecommerce-bd321.appspot.com",
    messagingSenderId: "833891576610",
    appId: "1:833891576610:web:4c82d25d60920c7ae5937b",
    measurementId: "G-2DLGGE5J2J"
};

const firebaseApp = initializeApp(firebaseConfig);

 const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : 'select_account'
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const  userDocref = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocref);

    if (!userSnapshot.exists()) {
        const{displayName , email} = userAuth;
        const createdAt  = new Date();
        try {
            await setDoc(userDocref , {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user',error.message);
        }
    }

    return userDocref;
}
export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth , email , password);
}