const firebase = require('firebase/app');

const firebaseConfig = require('../secret/firebaseConfig');

var admin = require("firebase-admin");

var serviceAccount = require("../secret/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


firebase.initializeApp(firebaseConfig);


module.exports = firebase;



