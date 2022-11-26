import firebase from "firebase/app";
import "firebase/firestore";
import {firebaseConfig } from "./variables";
const config = {
  ...firebaseConfig
};
firebase.initializeApp(config);
export default firebase.firestore();

