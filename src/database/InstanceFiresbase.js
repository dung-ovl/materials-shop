import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDEgWf615yQYhacGMiQe1BzoDg87ComQ9E",
    authDomain: "material-shop-7756e.firebaseapp.com",
    projectId: "material-shop-7756e",
    storageBucket: "material-shop-7756e.appspot.com",
    messagingSenderId: "806482380008",
    appId: "1:806482380008:web:2b514d3c91d4a6974cb55d",
};


let _firebaseApp = null
let _firebaseFirestore = null
let _firebaseStorage = null

let firebaseApp = _firebaseApp == null ? (_firebaseApp = initializeApp(firebaseConfig)) : _firebaseApp

let firebaseFirestore = _firebaseFirestore == null ? (_firebaseFirestore = getFirestore(firebaseApp)) : _firebaseFirestore

let firebaseStorage = _firebaseStorage == null ? (_firebaseStorage = getStorage(firebaseApp)) : _firebaseStorage

export { firebaseFirestore, firebaseStorage, firebaseApp };

