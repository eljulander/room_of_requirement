/*
(function () {
    'use strict';
    var article = wand.querApndr("article");

    function loadProfile() {
        wand.querApndr("article", "h1", "Profile want to be seen?  Not yet!");
    }

    function loadStats() {
        wand.querApndr("article", "h1", "Stats want to be seen?  Not yet!");
    }

    function loadChecked(input, searchQuer) {
        database.ref(searchQuer).once("value", function (snap) {
            var personalData = snap.val();
            if (personalData.Checked === "False") {
                input.checked = false;
            } else if (personalData.Checked === "True") {
                input.checked = true;
            }
        })

        input.onclick = function (e) {
            if (input.checked === false) {
                console.log(false);
                database.ref(searchQuer).update({
                    "Checked": "False",
                })
            } else if (input.checked === true) {
                console.log(input, searchQuer);
                database.ref(searchQuer).update({
                    "Checked": "True",
                })
            }
        };
    }

    function loadContentTodo(cp, cn) {
        var todoContain = wand.crtElm("div");
        todoContain.id = "todoContain";

        for (var i in cp) {

            var h3 = wand.crtElm("h3", i),
                todo = wand.crtElm("div"),
                divsub = wand.crtElm("div");

            todo.id = "todo";
            divsub.id = "details";
            divsub.setAttribute("display", "false");

            if (divsub.getAttribute("display") === "false") {
                divsub.style.display = "none";
            }

            for (var j in cp[i]) {
                var subp = wand.crtElm("label", `${j} | `),
                    input = wand.crtElm("input"),
                    numLinks = wand.txt(` ${cp[i][j]['Links Broken']} broken Links | `),
                    searchQuer = `Mark's Tool/${cn}/Content Pages/${i}/${j}`;

                input.type = "checkbox";

                loadChecked(input, searchQuer);

                wand.apndr(subp, numLinks);
                wand.apndr(subp, input);
                wand.apndr(divsub, subp);
            }

            wand.apndr(todo, h3);
            wand.apndr(todoContain, todo);
            wand.apndr(todoContain, divsub);
            wand.querApndr("article", todoContain);
        }
    }

    function quizLoad(q) {
        if (q === "There is nothing here!") {
            wand.querApndr("article", "p", `Quizzes are okay! ${q}`)
        } else {
            console.log("Load a quiz table for the conversion!")
        }
    }

    function disLink(l) {
        var link = wand.crtElm("a", "IL3 Link"),
            para = wand.crtElm("p");
        link.href = l;
        wand.apndr(para, link);

        wand.querApndr("article", para);
    }

    function displayDetails(cd, cn) {
        disLink(cd.Link);
        quizLoad(cd.Quizzes);
        loadContentTodo(cd["Content Pages"], cn);
    }

    function loadCourseDetails(e) {
        var courseNum = e.target.innerText.split("Project Number ")[1],
            courseDetails;

        database.ref(`Mark's Tool/${courseNum}`).once("value", function (snap) {
            courseDetails = snap.val();
            displayDetails(courseDetails, courseNum);
        })
    }

    function clearArticle() {
        article.innerHTML = "";
    }

    function dropdown(disBool, nextSib) {
        if (disBool === "false") {
            nextSib.style.display = "block";
            nextSib.setAttribute("display", "true");
        } else if (disBool === "true") {
            nextSib.style.display = "none";
            nextSib.setAttribute("display", "false");
        }
    }

    document.onclick = function (e) {
        var project = e.target.innerText.indexOf("Project") > -1,
            h2local = e.target.localName === "h2",
            buttonlocal = e.target.localName === "button",
            home = e.target.innerText.indexOf("Home") > -1,
            profile = e.target.innerText.indexOf("Profile") > -1,
            stats = e.target.innerText.indexOf("Stats") > -1,
            h3local = e.target.localName,
            lessonNum = e.target.innerText.indexOf("Lesson") > -1 || e.target.innerText.indexOf("Module") > -1 || e.target.innerText.indexOf("Welcome") > -1,
            checked = e.target.type === "checkbox";

            console.log(h3local, lessonNum);

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
        } else if (h3local && lessonNum) {
            var nextSib = e.target.parentElement.nextElementSibling,
                disBool = nextSib.getAttribute("display");
            dropdown(disBool, nextSib);
        } else {
            return;
        }
    };
}());
*/
