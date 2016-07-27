var config = {
    apiKey: "AIzaSyCRfRp20kEkpwO1Bs30sDyBkC4Qf-rsuNM",
    authDomain: "course-file-auditor.firebaseapp.com",
    databaseURL: "https://course-file-auditor.firebaseio.com",
    storageBucket: "course-file-auditor.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();



/*
Below is a set of query scripts to modify the database
*/

/*
database.ref("Mark's Tool").once("value", function(snap){
    snap.forEach(function (csnap){
        database.ref(`Mark's Tool/${csnap.key}`).update({
            Completed: "False",
        })
    })
})
*/

