import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  

const app = initializeApp(firebaseConfig);

// ! Google Sağlayıcısınu Kur
export const google = new GoogleAuthProvider()

//!  auth hizmetlerinin referanslarını al
export const auth = getAuth(app)

// ! database hizmetinin referansını al
export const db = getFirestore(app) // veritabanı kurulumu 

// ! medya depolama alanının referansını al
export const storage = getStorage(app);