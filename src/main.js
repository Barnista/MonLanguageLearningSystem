import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS (optional, if you need JavaScript components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).mount('#app')

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK0FApPkynU6TcLwgMBfbx_8v5lsfnoWk",
  authDomain: "mon-language-learning-system.firebaseapp.com",
  projectId: "mon-language-learning-system",
  storageBucket: "mon-language-learning-system.firebasestorage.app",
  messagingSenderId: "752573672851",
  appId: "1:752573672851:web:9db11be722991bf3e14c66",
  measurementId: "G-XX92GNENYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/


