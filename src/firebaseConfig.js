// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM8t0JVzSkfkYskKqmAeWTgTCc3ZEBfO0",
  authDomain: "g-oauth-6264f.firebaseapp.com",
  projectId: "g-oauth-6264f",
  storageBucket: "g-oauth-6264f.appspot.com",
  messagingSenderId: "443147254525",
  appId: "1:443147254525:web:682826bd3caa4d586d5c94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
    const name= result.user.displayName;
    const email= result.user.email;
    const profilePic= result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
    window.location.reload();
  }).catch((error) => {
    console.log(error);
  })
}