import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE1EaTg0-KIlK-iYUnrSio-iB24iGA8CY",
  authDomain: "hiro-d60ce.firebaseapp.com",
  projectId: "hiro-d60ce",
  storageBucket: "hiro-d60ce.appspot.com",
  messagingSenderId: "199211633767",
  appId: "1:199211633767:web:f697505309cac2d65698c2",
  measurementId: "G-7HGDB73Y8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
