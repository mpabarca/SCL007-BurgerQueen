import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBSR4N5WZno9QVDiGJVg3Lq6s4yEj9Ug6o",
  authDomain: "burger-queen2019.firebaseapp.com",
  databaseURL: "https://burger-queen2019.firebaseio.com",
  projectId: "burger-queen2019",
  storageBucket: "burger-queen2019.appspot.com",
  messagingSenderId: "801610163321"
});
let db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;
