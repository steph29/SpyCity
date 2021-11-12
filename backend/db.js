const firebase = require("firebase/app");
const firestore = require("firebase/firestore");
const config = require("./firebaseConfig");

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = { db, firestore };
