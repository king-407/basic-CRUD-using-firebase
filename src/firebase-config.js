import { initializeApp } from "firebase/app";
import{getFirestore} from '@firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDiMgLXVBVKPbprEDssq2ftrlWK6tC4jr0",
    authDomain: "fir-learn-6ee27.firebaseapp.com",
    projectId: "fir-learn-6ee27",
    storageBucket: "fir-learn-6ee27.appspot.com",
    messagingSenderId: "1014541651927",
    appId: "1:1014541651927:web:d4b0aa33a56ea875e54592",
    measurementId: "G-NLSDRQ7X73"
  };
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app)