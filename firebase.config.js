// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAobw4nqLeqF5pMqrwn2gy18LgQkuJMeIA",
  authDomain: "nc-games-3f4d0.firebaseapp.com",
  projectId: "nc-games-3f4d0",
  storageBucket: "nc-games-3f4d0.appspot.com",
  messagingSenderId: "89651550795",
  appId: "1:89651550795:web:0f22c893eb6c1d47c30bce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);