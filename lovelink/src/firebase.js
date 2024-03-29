// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhdmultQq0nctRxaEjbCKBRpsiAAzQeY0",
  authDomain: "lovelink-bc9fc.firebaseapp.com",
  projectId: "lovelink-bc9fc",
  storageBucket: "lovelink-bc9fc.appspot.com",
  messagingSenderId: "265221791571",
  appId: "1:265221791571:web:ca3fe4e226e0392ed18ba6",
  measurementId: "G-1LNT7J0PH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const imgDB= getStorage(app);
const textDB = getFirestore(app);


export{app,auth,textDB,imgDB};











