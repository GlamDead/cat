/* eslint-disable unicorn/explicit-length-check */
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDVB6FMDQjqYCI1o5_pCOiBqh9XkvF8OCI",
  authDomain: "funbox-test-b0399.firebaseapp.com",
  databaseURL: "https://funbox-test-b0399.firebaseio.com",
  projectId: "funbox-test-b0399",
  storageBucket: "funbox-test-b0399.appspot.com",
  messagingSenderId: "215536702188",
  appId: "1:215536702188:web:77304959ed603b85fc4bc9",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const database = firebase.firestore()
