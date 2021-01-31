import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDghBOy1qJbPsSBls2zgkTx_AWJsIaL5Lg",
    authDomain: "fir-auth-2be0e.firebaseapp.com",
    databaseURL: "https://fir-auth-2be0e-default-rtdb.firebaseio.com",
    projectId: "fir-auth-2be0e",
    storageBucket: "fir-auth-2be0e.appspot.com",
    messagingSenderId: "416984125264",
    appId: "1:416984125264:web:11298a0471ed75dcc66655",
    measurementId: "G-ZF7952VPN5"
})
// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// })
export const auth = app.auth();
export default app;
