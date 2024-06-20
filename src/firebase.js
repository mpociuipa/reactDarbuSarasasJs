import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCO3hAA8EEcR6VT22Pzp9fe_RGu_1ci-co",
  authDomain: "crud-project-30db0.firebaseapp.com",
  projectId: "crud-project-30db0",
  storageBucket: "crud-project-30db0.appspot.com",
  messagingSenderId: "768239128752",
  appId: "1:768239128752:web:600ace038913d00e462b75"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export default firebase;

export {
    app
}
