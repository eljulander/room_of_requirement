(function () {
    'use strict';
    var article = wand.querApndr("article");

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
        if (e.target.innerText.indexOf("Project") > -1) {
            console.log("Project Clicked!");
            clearArticle();
            loadCourseDetails(e);
        } else if (e.target.innerText.indexOf("Home") > -1) {
            console.log("Home Clicked!");
            clearArticle();
            window.startCourseLoad();
        } else if (e.target.innerText.indexOf("Profile") > -1) {
            console.log("Profile clicked!");
        }
    };
}());
