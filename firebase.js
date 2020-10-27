const firebase = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyAhnvkz0eArJhJOsPnEHQFzPeYC8oeBRFI",
    authDomain: "protfolio-db.firebaseapp.com",
    databaseURL: "https://protfolio-db.firebaseio.com",
    projectId: "protfolio-db",
    storageBucket: "protfolio-db.appspot.com",
    messagingSenderId: "62003345737",
    appId: "1:62003345737:web:76506c1bb85e029a8d4298"
};

const db = firebase.initializeApp(firebaseConfig);
module.exports = db;