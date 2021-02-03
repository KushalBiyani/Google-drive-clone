import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    // apiKey: "AIzaSyDghBOy1qJbPsSBls2zgkTx_AWJsIaL5Lg",
    // authDomain: "fir-auth-2be0e.firebaseapp.com",
    // databaseURL: "https://fir-auth-2be0e-default-rtdb.firebaseio.com",
    // projectId: "fir-auth-2be0e",
    // storageBucket: "fir-auth-2be0e.appspot.com",
    // messagingSenderId: "416984125264",
    // appId: "1:416984125264:web:11298a0471ed75dcc66655",
    // measurementId: "G-ZF7952VPN5"
    apiKey: "AIzaSyBp1nl5dWeEotykfDxWrPnJsv94631HC-A",
    authDomain: "drive-clone-70e41.firebaseapp.com",
    projectId: "drive-clone-70e41",
    storageBucket: "drive-clone-70e41.appspot.com",
    messagingSenderId: "751248894478",
    appId: "1:751248894478:web:e1bcd465f17f294049aa5f"
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
const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app