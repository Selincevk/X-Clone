import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyDOJ3S5dRXIKKrAjVePiJLv5OKrfd7Vq38",
  authDomain: "twitterclone-1dd22.firebaseapp.com",
  projectId: "twitterclone-1dd22",
  storageBucket: "twitterclone-1dd22.firebasestorage.app",
  messagingSenderId: "846637779340",
  appId: "1:846637779340:web:54ed74dc5a69b0b81e6ea9"
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