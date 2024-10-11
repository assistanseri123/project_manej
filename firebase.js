import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAmo4uoS7oUuEkfAc5t5nRA9MCf6-HjHCI",
  authDomain: "crud-operation-40701.firebaseapp.com",
  projectId: "crud-operation-40701",
  storageBucket: "crud-operation-40701.appspot.com",
  messagingSenderId: "667130697604",
  appId: "1:667130697604:web:6f30e78f2e22868e4c6fd1",
  measurementId: "G-T0KYZZJZHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export { db ,auth }