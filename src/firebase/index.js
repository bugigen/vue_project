import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA4mbUma7djO4NWyEOb6ktXRTJOgNX2chM",
  authDomain: "vue-poject.firebaseapp.com",
  projectId: "vue-poject",
  storageBucket: "vue-poject.appspot.com",
  messagingSenderId: "262380822458",
  appId: "1:262380822458:web:26259b7fb1958cf6cd8783"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
