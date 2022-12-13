// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTjzLNmV_BejsWMQFP0HiFoxlmXEGgr84",
  authDomain: "car-share-9fbbd.firebaseapp.com",
  projectId: "car-share-9fbbd",
  storageBucket: "car-share-9fbbd.appspot.com",
  messagingSenderId: "536391420980",
  appId: "1:536391420980:web:5c0e09555251b0c2210e61",
  measurementId: "G-FS9ZT2JFS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(AsyncStorage)
});
export {auth};
export const database=getFirestore(app);