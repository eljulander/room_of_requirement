database.ref("courses").on("value", function(snap) {
    console.log(snap.val());
})
