(function () {

    var authData = JSON.parse(localStorage['ManagementAuthO']),
        role,
        nav = $("nav"),
        homeButton = $("<button>Home</button>"),
        adminButton;

    homeButton.click(function (e) {
        var root = location.origin;
        location.assign(`${root}/index.html`);
    });

    nav.append(homeButton);

    database.ref(`users/${authData.uid}`).once("value", function (snap) {
        role = snap.val().role,
        adminButton = $("<button>Admin</button>");

        if (role >= 8) {
            console.log("User logged in is Administrator");

            adminButton.click(function (e) {
                console.log("li")

                var page = e.target.innerText.toLowerCase(),
                    root = location.origin;

                location.assign(`${root}/${page}.html`);
            });

            nav.append(adminButton);
        }
    });
}());
