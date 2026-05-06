import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyClI0FLslucNmrKqM3n5xvO5AXePcy_2cE",
authDomain: "digital-np-store.firebaseapp.com",
projectId: "digital-np-store",
storageBucket: "digital-np-store.firebasestorage.app",
messagingSenderId: "455262843691",
appId: "1:455262843691:web:f97288550606a474884b6e",
measurementId: "G-HT8M92X0T0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// EXPORT
export { db, collection, addDoc, getDocs };
