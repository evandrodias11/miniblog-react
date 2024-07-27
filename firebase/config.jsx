import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw0obPKZ4dALTnja6Zr1lfGewv9VRy4pQ",
  authDomain: "miniblog-86d16.firebaseapp.com",
  projectId: "miniblog-86d16",
  storageBucket: "miniblog-86d16.appspot.com",
  messagingSenderId: "193129041512",
  appId: "1:193129041512:web:a326319a756c443ba275dd",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
