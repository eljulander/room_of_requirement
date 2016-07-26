/*
database is a global variable
*/
(function () {

    var loadedUsers = [];

    /*
    Events to handle modals
    */
    $("a").click(function (e) {
        var classID = e.target.className;
        $(`#${classID}`).css({
            "display": "block"
        })
        $(`#shade`).css({
            "display": "block"
        })
        $(`#namePopup`).css({
            "display": "block"
        })
    });

    $(".cancel").click(function (e) {
        var parent = e.target.parentElement;
        $(parent).css({
            "display": "none",
        })
        $('#shade').css({
            "display": "none",
        })
        $(`#namePopup`).css({
            "display": "none"
        })
    });

    $("#assign").click(function (e) {

        var inputAssign = $("[data-courseid] > input"),
            courseID = $("[data-courseid]"),
            userName,
            userData = JSON.parse(localStorage["ManagementAuthO"]);

        $.each(courseID, function (i, va) {
            var userName = inputAssign[i].value;

            if (userName === userData.displayName) {
                var courseID = $(va).attr("data-courseid");

                database.ref(`Mark's Tool/${courseID}`).update({
                    checker: userData.uid
                });

            }
            inputAssign[i].value = "";
        })

    });

    database.ref("users").once("value", function (snap) {
        snap.forEach(function (csnap) {
            var name = csnap.val().displayName;
            loadedUsers.push(name);
        })
    });

    function userSelect() {
        var input = $("<input></input>");

        input.keyup(function (e) {
            $("#userNames").html("");

            var inputVal = e.target.value,
                selectedInput = e.target

            for (var i = 0; i < loadedUsers.length; i++) {

                if (loadedUsers[i].includes(inputVal)) {
                    var para = $(`<p>${loadedUsers[i]}</p>`);

                    para.attr("id", "empName")
                        .click(function (e) {
                            $(selectedInput).val(e.target.innerText);
                        })

                    $("#userNames").append(para);
                }
            }

        });

        return input;
    }

    function uncheckout(e) {
        var clickedElement = e.target,
            courseID = $(clickedElement).attr("data-courseid");

        database.ref(`Mark's Tool/${courseID}`).update({
            checker: ""
        })

        $(e.target).css({
            "display": "none",
        })
    }

    /*
    Runs the data for the checked Modal
    */
    function populateCheck(cd, cn, tar) {
        var populate = $(`#${tar}`),
            courseName = $(`<label data-courseID="${cn}"><a target="_blank" href="${cd['Link']}">${corrData[cn]}</a></label>`),
            input;

        if (cd.checker !== "" && tar === "checkedOut") {
            database.ref(`users/${cd.checker}`).once("value", function (snap) {
                var displayName = snap.val().displayName;

                    courseName
                        .append(`<p>${displayName}</p>`)
                        .append(" &times;")
                        .css({
                            "cursor": "pointer"
                        })
                        .click(uncheckout);
            })
        }

        if (tar === "unassigned") {
            input = userSelect();
        }

        courseName.append(input);

        populate.append(courseName);
    }

    function checked() {

        database.ref("Mark's Tool").on("value", function (snap) {
            snap.forEach(function (csnap) {
                var courseData = csnap.val(),
                    courseName = csnap.key,
                    nothing = "There is nothing here!";

                if (courseData["Content Pages"] !== nothing || courseData["Quizzes"] !== nothing) {
                    !courseData.checker ? populateCheck(courseData, courseName, "unassigned") : populateCheck(courseData, courseName, "checkedOut");
                }
            })
        })

    }

    /*
    Runs the data for the finished modal
    */
    function finished() {
        console.log("finished");
    }

    /*
    Retrieve the data for amount of data saved in Equella
    */
    function dataSaved() {
        console.log("dataSaved");
    }

    /*
    Retrieve the data for amount of time spent
    */
    function timeSpent() {
        console.log("timeSpent");
    }

    /*
    Determine that the location is the admin page and load
    all of the data with the administrator role.
    */
    if (location.pathname.includes("admin")) {
        checked();
        finished();
        dataSaved();
        timeSpent();
        userSelect();
    }

}());
