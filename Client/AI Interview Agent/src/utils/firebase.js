import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-faf20.firebaseapp.com",
  projectId: "interviewiq-faf20",
  storageBucket: "interviewiq-faf20.firebasestorage.app",
  messagingSenderId: "1096907883822",
  appId: "1:1096907883822:web:9bfc9b29b5d4fff6c6e6bf",
  measurementId: "G-HF2ZRPCY40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export { auth, provider, analytics };