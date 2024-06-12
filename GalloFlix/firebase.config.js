// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS7wB790NjniZE6gSh5evzo7_Ums_DW6U",
  authDomain: "galloflix-b70c3.firebaseapp.com",
  projectId: "galloflix-b70c3",
  storageBucket: "galloflix-b70c3.appspot.com",
  messagingSenderId: "810988121596",
  appId: "1:810988121596:web:692085ba7ae60d42fd1679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);