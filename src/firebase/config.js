import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBAIOV4E_0bDVq8n8-B7jz51fYVyjHjyvc",
  authDomain: "firegram-7cbc7.firebaseapp.com",
  databaseURL: "https://firegram-7cbc7.firebaseio.com",
  projectId: "firegram-7cbc7",
  storageBucket: "firegram-7cbc7.appspot.com",
  messagingSenderId: "28835613633",
  appId: "1:28835613633:web:c037c20f6a74425e8cfd40",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
