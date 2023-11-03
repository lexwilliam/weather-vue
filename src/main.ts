import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { initializeApp } from "firebase/app";

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyDayBWlKA-j5un_ny4KFuVePgSQrfBUV5o",
    authDomain: "weather-app-50c4b.firebaseapp.com",
    projectId: "weather-app-50c4b",
    storageBucket: "weather-app-50c4b.appspot.com",
    messagingSenderId: "613618065019",
    appId: "1:613618065019:web:6a1cc59a797579135e4cde",
    measurementId: "G-37P56G1Y6F",
};

initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')
