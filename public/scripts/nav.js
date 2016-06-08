(function () {
    'use strict';

    var navig = {
        home: "Home",
        profile: "My Profile",
        stats: "Stats"
    }

    for (var i in navig) {
        wand.querApndr("nav", "button", navig[i]);
    }

}());
