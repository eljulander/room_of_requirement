(function () {

    "use strict";
    var rrRef = new Firebase("https://room-of-requirement.firebaseio.com/"),
        main = document.querySelector("main"),
        nav = document.querySelector("nav"),
        equellaPara = document.createElement("p"),
        homePara = document.createElement("p"),
        equellaText = document.createTextNode("Create New Equella Transition Course"),
        homeParaText = document.createTextNode("Home");

    equellaPara.id = "equellaForm";
    homePara.id = "home";

    equellaPara.appendChild(equellaText);
    homePara.appendChild(homeParaText);
    nav.appendChild(homePara);
    nav.appendChild(equellaPara);

    function generatePreview(specificCourse, courseKey) {
        var courseContainer = document.createElement("article"),
            headerCourse = document.createElement("h1"),
            headerText = document.createTextNode(courseKey),
            checkerHeader = document.createElement("h2"),
            checkerText = document.createTextNode(specificCourse["employee-checker"]),
            checkbox = document.createElement("input");

        courseContainer.id = courseKey.replace(/\s+/, "");
        checkbox.type = "checkbox";

        headerCourse.appendChild(headerText);
        checkerHeader.appendChild(checkerText);

        courseContainer.appendChild(headerCourse);
        courseContainer.appendChild(checkerHeader);
        courseContainer.appendChild(checkbox);

        main.appendChild(courseContainer);
    }

    rrRef.child("courses").once("value", function (snap) {
        var courses = snap.val();

        snap.forEach(function (csnap) {
            var specificCourse = csnap.val(),
                courseKey = csnap.key();
            console.log(specificCourse, courseKey);
            generatePreview(specificCourse, courseKey);
        })
    });

    equellaPara.onclick = function () {
        console.log("New Form to be made");
    };

    homePara.onclick = function () {
        console.log("User wants to go home.");
    };

}());
