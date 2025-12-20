// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDK0FApPkynU6TcLwgMBfbx_8v5lsfnoWk",
    authDomain: "mon-language-learning-system.firebaseapp.com",
    projectId: "mon-language-learning-system",
    storageBucket: "mon-language-learning-system.firebasestorage.app",
    messagingSenderId: "752573672851",
    appId: "1:752573672851:web:9db11be722991bf3e14c66",
    measurementId: "G-XX92GNENYR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

export default {
    firebaseApp,
    analytics,
    logPageView,
    logCustomEvent
}

export function logPageView(pageName) {
    if (analytics) {
        logEvent(analytics, 'page_view', { page_title: pageName });
    }
}

export function logCustomEvent(eventName, eventParams = {}) {
    if (analytics) {
        logEvent(analytics, eventName, eventParams);
    }
}

export function parseAuthError(err) {
    if (!err || !err.code) return String(err || 'Unknown error')
    switch (err.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Invalid email or password.'
        case 'auth/email-already-in-use':
            return 'Email already in use.'
        case 'auth/invalid-email':
            return 'Invalid email address.'
        case 'auth/popup-closed-by-user':
            return 'Popup closed before completing sign in.'
        case 'auth/popup-blocked':
            return 'Popup blocked by the browser.'
        default:
            return err.message || err.code
    }
}