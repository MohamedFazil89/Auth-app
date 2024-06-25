import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoOaeZaBJ9iugirfGHcuFQ00uA_nacSF0",
  authDomain: "hackthon-bf4d2.firebaseapp.com",
  databaseURL: "https://hackthon-bf4d2-default-rtdb.firebaseio.com",
  projectId: "hackthon-bf4d2",
  storageBucket: "hackthon-bf4d2.appspot.com",
  messagingSenderId: "274164021188",
  appId: "1:274164021188:web:ae38f4e32a858a5ad45691",
  measurementId: "G-311X4Z6MV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);
const realtimedb = getDatabase(app);
export { auth, db, realtimedb }