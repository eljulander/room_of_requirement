(function () {
    "use strict";
    var rrRef = new Firebase("https://room-of-requirement.firebaseio.com/"),
        main = document.querySelector("main"),
        nav = document.querySelector("nav"),
        homePara = document.createElement("p"),
        homeParaText = document.createTextNode("Home");

    homePara.id = "home";

    homePara.appendChild(homeParaText);
    nav.appendChild(homePara);

    function getDashboard(e) {
        var course = e.srcElement.parentNode.id;
        main.innerHTML = "";
        rrRef.child("courses/" + course).once("value", function (snap) {
            var courseData = snap.val();
            console.log(courseData);
        });
    }

    function generatePreview(specificCourse, courseKey) {
        var courseContainer = document.createElement("article"),
            headerCourse = document.createElement("h1"),
            headerText = document.createTextNode(courseKey),
            checkerHeader = document.createElement("h2"),
            checkerText = document.createTextNode(specificCourse["employee-checker"]),
            checkbox = document.createElement("input");
        courseContainer.id = courseKey;
        courseContainer.appendChild(headerCourse);
        courseContainer.appendChild(checkerHeader);
        courseContainer.appendChild(checkbox);

        checkbox.type = "checkbox";
        headerCourse.appendChild(headerText);
        checkerHeader.appendChild(checkerText);
        main.appendChild(courseContainer);

        courseContainer.onclick = getDashboard;
    }

    /*rrRef.child("mark-report").on("child-added", function (snap, prevKey) {
        var course = snap.key();
        console.log(course);
        rrRef.child("courses/" + course).update({
            "is-checked-out": false,
            "employee-checker": "",
            "links": {
                "il3-link": "",
                "equella-link": ""
            },
            "dir": {
                "ocr": {
                    "name": "",
                    "email": ""
                },
                "course-lead": {
                    "name": "",
                    "email": ""
                }
            },
            "exports": {
                "il3": false,
                "box": false
            }
        });
    });*/

    function loadHome() {
        rrRef.child("courses").once("value", function (snap) {
            var courses = snap.val();
            snap.forEach(function (csnap) {
                var specificCourse = csnap.val(),
                    courseKey = csnap.key();
                console.log(specificCourse, courseKey);
                generatePreview(specificCourse, courseKey);
            })
        });
    }

    window.onload = function () {
        console.log("onload");
        loadHome();
    };

    homePara.onclick = function () {
        console.log("User wants to go home.");
        loadHome();
    };

}());
