(function () {
    'use strict';

    var navig = {
        home: "Home",
        profile: `My Profile`
    }

    wand.querApndr("nav", "button", navig.home);
    wand.querApndr("nav", "button", navig.profile);

}());
