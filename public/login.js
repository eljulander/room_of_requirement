(function () {

    "use strict";
    console.log("Login will be accopmlished soon!");

    var rrRef = new Firebase("https://room-of-requirement.firebaseio.com/"),
        nav = document.querySelector("nav"),
        login = document.createElement("p"),
        logout = document.createElement("p"),
        loginText = document.createTextNode("Login"),
        logoutText = document.createTextNode("Logout");

    login.id = "login";
    logout.id = "logout";

    login.appendChild(loginText);
    logout.appendChild(logoutText);
    nav.appendChild(login);
    nav.appendChild(logout);

    login.onclick = function () {
        console.log("User wants to login!");
    }

    logout.onclick = function () {
        console.log("User wants to logout!");
    }
}());
