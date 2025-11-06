// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmjbxjeUi7Z-TIYFXFPBEcXvQRblOe_fw",
  authDomain: "romance-retreat-xsavlab.firebaseapp.com",
  projectId: "romance-retreat-xsavlab",
  storageBucket: "romance-retreat-xsavlab.firebasestorage.app",
  messagingSenderId: "1082057359683",
  appId: "1:1082057359683:web:5cfcd253b2fc61a7712ff6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };