(function () {
    'use strict';
    var article = wand.querApndr("article");

    function loadProfile() {
        wand.querApndr("article", "h1", "Profile want to be seen?  Not yet!");
    }

    function loadStats() {
        wand.querApndr("article", "h1", "Stats want to be seen?  Not yet!");
    }

    function loadContentTodo(cp) {
        for (var i in cp) {
            console.log(cp[i]);
            wand.querApndr("article", "p", i);
        }
    }

    function quizLoad(q) {
        if (q === "There is nothing here!") {
            wand.querApndr("article", "h1", q)
        }
    }

    function disLink(l) {
        wand.querApndr("article", "h1", l)
    }

    function displayDetails(cd) {
        console.log(cd);
        disLink(cd.Link);
        quizLoad(cd.Quizzes);
        loadContentTodo(cd["Content Pages"]);
    }

    function clearArticle() {
        article.innerHTML = "";
    }

    function loadCourseDetails(e) {
        var courseNum = e.target.innerText.split("Project Number ")[1],
            courseDetails;

        database.ref(`Mark's Tool/${courseNum}`).once("value", function (snap) {
            courseDetails = snap.val();
            displayDetails(courseDetails);
        })
    }

    document.onclick = function (e) {
        var project = e.target.innerText.indexOf("Project") > -1,
            h2local = e.target.localName === "h2",
            buttonlocal = e.target.localName === "button",
            home = e.target.innerText.indexOf("Home") > -1,
            profile = e.target.innerText.indexOf("Profile") > -1,
            stats = e.target.innerText.indexOf("Stats") > -1;

        if (project && h2local) {
            console.log("Project Clicked!");
            clearArticle();
            loadCourseDetails(e);
        } else if (home && buttonlocal) {
            console.log("Home Clicked!");
            clearArticle();
            window.startCourseLoad();
        } else if (profile && buttonlocal) {
            console.log("Profile clicked!");
            clearArticle();
            loadProfile();
        } else if (stats && buttonlocal) {
            console.log("Stats clicked!");
            clearArticle();
            loadStats();
        } else {
            return;
        }
    };
}());
