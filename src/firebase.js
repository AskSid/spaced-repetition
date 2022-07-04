// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKBtyXpywLLbbEzD5sXTwqJhYBRAP-_P0",
  authDomain: "spaced-repetition-852e6.firebaseapp.com",
  projectId: "spaced-repetition-852e6",
  storageBucket: "spaced-repetition-852e6.appspot.com",
  messagingSenderId: "70544167759",
  appId: "1:70544167759:web:c14ba632e535cd1e256b3a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("name", result.user.displayName)
        localStorage.setItem("email", result.user.email)
        localStorage.setItem("profilePic", result.user.photoURL)
    }).catch((error) => {
        console.log(error)
    })
}

export const db = getFirestore(app)