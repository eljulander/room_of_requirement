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
    });

    $(".checked").click(function (e) {
        $(`#namePopup`).css({
            "display": "block"
        })
    })

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

    /*Load all the users from the database*/
    database.ref("users").once("value", function (snap) {
        snap.forEach(function (csnap) {
            var name = csnap.val().displayName;
            loadedUsers.push(name);
        })
    });

    /*
    The userSelect, uncheckout, populateCheck, and checked
    are all used for the checkout feature.
    */
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
                    if (courseData.status === "Pending") {
                        !courseData.checker ? populateCheck(courseData, courseName, "unassigned") : populateCheck(courseData, courseName, "checkedOut");
                    }
                }
            })
        })

    }

    /*
    Runs the data for the finished modal.  See which courses
    have a "Student Approved" and a "Designer Approval"
    on their status node in the database.
    */
    function approved(e) {
        var parentElement = e.target.parentElement,
            courseID = parentElement.getAttribute("data-courseid");

        database.ref(`Mark's Tool/${courseID}`).update({
            status: "Designer Approved"
        })

        e.target.style.display = "none";
    }

    var statusFunctions = {
        "Student Approved": function (cd, cn) {
            var label = $(`<label data-courseID="${cn}"><a target="_blank" href="${cd['Link']}">${corrData[cn]}</a></label>`),
                check = $(`<span>&#x2713;</span>`);

            $(check)
                .css({
                    "cursor": "pointer"
                })
                .click(approved);

            $(label)
                .append(check);

            $("#completed").append(label);
        },
        "Designer Approved": function (cd, cn) {
            $("#approved").append(`<label data-courseID="${cn}"><a target="_blank" href="${cd['Link']}">${corrData[cn]}</a></label>`);
        },
    }

    function finished() {
        database.ref("Mark's Tool").once("value", function (snap) {
            snap.forEach(function (csnap) {
                var courseData = csnap.val()
                statusFunctions[courseData.status](courseData, csnap.key);
            })
        })
    }

    /*
    Retrieve the data for amount of data saved in Equella
    */
    var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
                }]
        };

    function dataSaved() {
        var ctx = $(".dataSaved"),
            myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
    }

    /*
    Retrieve the data for amount of time spent
    */
    function timeSpent() {
        var ctx = $(".timeSpent"),
            myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
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
