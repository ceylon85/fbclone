import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7KwIJ8b3ZZZyjeG7vxnfHbd13A13FCNI",
  authDomain: "facebook-clone-8cb2b.firebaseapp.com",
  projectId: "facebook-clone-8cb2b",
  storageBucket: "facebook-clone-8cb2b.appspot.com",
  messagingSenderId: "473209989513",
  appId: "1:473209989513:web:431c94ffeabb725813d958",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
