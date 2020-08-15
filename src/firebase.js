import firebase from "firebase";

// npm i firebase

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqGykZ7jY430LuIJuGVZ3EmCvn7EL3-CY",
    authDomain: "clone-64209.firebaseapp.com",
    databaseURL: "https://clone-64209.firebaseio.com",
    projectId: "clone-64209",
    storageBucket: "clone-64209.appspot.com",
    messagingSenderId: "887301515500",
    appId: "1:887301515500:web:49e88413bf1c33b3851dc9",
    measurementId: "G-1K6NRPHS5J",
});

const auth = firebase.auth();

export { auth }