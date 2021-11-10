import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDa-DVCpThEuRwWFYHBOV5v27nXlnan9x4",
  authDomain: "blog-cf4c1.firebaseapp.com",
  projectId: "blog-cf4c1",
  storageBucket: "blog-cf4c1.appspot.com",
  messagingSenderId: "618113615538",
  appId: "1:618113615538:web:29c4b7af140b787fabebab"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)