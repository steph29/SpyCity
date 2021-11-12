const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

assert(PORT, "Port is requireed");
assert(HOST, "Host is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
  },
};

// // Firebase module
// const firebase = require("firebase/app");
// // /lite reduce data
// const dbFirebase = require("firebase/firestore/lite");

// const firebaseConfig = {
//   production: false,
//   firebaseConfig: {
//     apiKey: "AIzaSyBLKlKbv3DxfmtGxAwAU1zU-nUjcr5dXEc",
//     authDomain: "spyfield-b2064.firebaseapp.com",
//     databaseURL:
//       "https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "spyfield-b2064",
//     storageBucket: "spyfield-b2064.appspot.com",
//     messagingSenderId: "232064703995",
//     appId: "1:232064703995:web:7d35341c2079e173c5ff5e",
//     measurementId: "G-NMSJFPR835",
//   },
// };
// firebase.initializeApp(firebaseConfig);
// const db = dbFirebase.Firestore;
// const Users = "";
// module.exports = Users;
