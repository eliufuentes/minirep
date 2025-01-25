import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ78HxyCFij9dV471j21NbytwS_DSdt_I",
  authDomain: "mini-d3e28.firebaseapp.com",
  projectId: "mini-d3e28",
  storageBucket: "mini-d3e28.appspot.com",
  messagingSenderId: "12445634747",
  appId: "1:12445634747:web:b9b16a1b6a8777dd14d99e",
  measurementId: "G-WKFPZ819TS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
