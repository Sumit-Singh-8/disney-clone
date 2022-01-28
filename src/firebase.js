import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2UJzFkQedZ8ggTC2HcfyeivlD4x1xARg",
  authDomain: "disneyplus-clone-d7a78.firebaseapp.com",
  projectId: "disneyplus-clone-d7a78",
  storageBucket: "disneyplus-clone-d7a78.appspot.com",
  messagingSenderId: "439805838354",
  appId: "1:439805838354:web:ea45de8c104f873cf904cb",
  measurementId: "G-5CRHSBF9FN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
