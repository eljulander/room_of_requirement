var config = {
    apiKey: "AIzaSyCBNNxQ8ewVWXxMUFYXmGAGTv0IQ3ejje0",
    authDomain: "room-of-requirement.firebaseapp.com",
    databaseURL: "https://room-of-requirement.firebaseio.com",
    storageBucket: "firebase-room-of-requirement.appspot.com",
  };
firebase.initializeApp(config);

var database = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();
