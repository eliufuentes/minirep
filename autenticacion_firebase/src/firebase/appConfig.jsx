// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importamos el servicio de la autenticacion
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//firestore

const firebaseConfig = {
    apiKey: "AIzaSyCaqMVq4pnG7JFPSKU9k3ZebOhYX8-19NU",
    authDomain: "app-authentication-a663f.firebaseapp.com",
    projectId: "app-authentication-a663f",
    storageBucket: "app-authentication-a663f.appspot.com",
    messagingSenderId: "662555941756",
    appId: "1:662555941756:web:cd19242c8d8cc5d2fde2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore
//auth
//Indicamos que se va utilizar el servicio de la autenticacion con la app
const auth_user = getAuth(app)
const providerGoogle = new GoogleAuthProvider()
export { auth_user, providerGoogle };
