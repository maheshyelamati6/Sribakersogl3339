import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAmUEYBPaVTgNDX5226WptdMhy7kzjvxJU",
  authDomain: "sribakersogl3339.firebaseapp.com",
  databaseURL: "https://sribakersogl3339-default-rtdb.firebaseio.com",
  projectId: "sribakersogl3339",
  storageBucket: "sribakersogl3339.appspot.com",
  messagingSenderId: "714549386799",
  appId: "1:714549386799:web:b447cde453cab71573f0da",
  measurementId: "G-6SV6Y30BTE"
};



const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
export {database}



