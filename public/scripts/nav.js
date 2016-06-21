$(document).ready(function() {
    var navig = {
        home: "Home",
        profile: "My Profile",
        stats: "Stats"
    }

    $.each(navig, function(key, value) {
        $("nav").append(`<button>${value}</button>`)
        console.log(key, value);
    })
})
