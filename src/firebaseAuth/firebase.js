import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIZKLjLFSNeO8qdAgb65ZzSjaGuASVThY",
  authDomain: "shopping-cart-app-613c5.firebaseapp.com",
  projectId: "shopping-cart-app-613c5",
  storageBucket: "shopping-cart-app-613c5.appspot.com",
  messagingSenderId: "733691574825",
  appId: "1:733691574825:web:a3b2aac2eea352390e7a38",
  measurementId: "G-3S0CSFDGCK"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db =getFirestore()
export {auth}
