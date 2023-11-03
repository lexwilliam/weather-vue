import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDayBWlKA-j5un_ny4KFuVePgSQrfBUV5o",
  authDomain: "weather-app-50c4b.firebaseapp.com",
  projectId: "weather-app-50c4b",
  storageBucket: "weather-app-50c4b.appspot.com",
  messagingSenderId: "613618065019",
  appId: "1:613618065019:web:6a1cc59a797579135e4cde",
  measurementId: "G-37P56G1Y6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);