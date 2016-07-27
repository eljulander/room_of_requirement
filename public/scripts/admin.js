/*
database is a global variable
*/
(function () {

    var loadedUsers = [],
        timeSpent = [],
        dataSaved;

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
        var parent = e.target.idment;
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
            usersList;

        $.each(inputAssign, function(i, val){

            var userName = val.value,
                id = val.parentElement.getAttribute("data-courseid");

            database.ref("users").once("value", function(snap){
                usersList = snap.val();

                for (var i in usersList){
                    if (usersList[i].displayName === userName) {
                        database.ref(`Mark's Tool/${id}`).update({
                            "checker": usersList[i].uid
                        })
                    }
                }

            })
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
        var idment = e.target.idment,
            courseID = idment.getAttribute("data-courseid");

        database.ref(`Mark's Tool/${courseID}`).update({
            status: "Designer Approved"
        })

        e.target.style.display = "none";
    }

    var statusFunctions = {
        "Student Approved": function (cd, cn) {
            var label = $(`<label data-courseID="${cn}"><a target="_blank" href="${cd['Link']}">${corrData[cn]}</a></label>`),
                check = $(`<span>&#x2713;</span>`);

            Push.create('New Student Approval!', {
                "body": `${corrData[cn]} is ready.`,
                timeout: 7000
            })

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
    Script for coding the report graphs.
    */

    //    for development of chart graphs
    //    document.querySelector(".stats").click();

    /*Default settings for the two graphs*/
    var data = {
            datasets: [{
                    label: 'Data Saved',
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(33, 98, 98, 0.4)",
                    data: dataSaved
                    },
                {
                    label: "Time Spent",
                    backgroundColor: "rgba(23, 56, 234, 0.4)",
                    borderColor: "rgba(0, 11, 72, 0.4)",
                    data: timeSpent
                    }]
        },
        options = {
            responsive: true,
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    scaleLabel: {
                        display: true,
                        labelString: 'Months'
                    }
                    }],
                yAxes: [{
                    type: 'linear',
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: ''
                    }
                }]
            }
        };

    /*Retrieve the data for amount of data saved*/
    function charts() {
        var ctx = $(".chart"),
            myLineChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
    }

    function loadUsers() {
        /*Load all the users from the database*/
        database.ref("users").once("value", function (snap) {
            snap.forEach(function (csnap) {
                var name = csnap.val().displayName;
                loadedUsers.push(name);
            })
        });
    }

    function loadChartData() {

        var months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec"
            ],
            date = new Date(),
            numDay = date.getDate(),
            monthDig = date.getMonth(),
            month = months[monthDig];


        /*
        TIME GATHERER DATA
        {
            "6": {
                "label": "Jul"
                "total": 456,
                "entries": {
                    "PUSH_ID": {
                        "time": 24,
                        "submitter": "Andrew"
                    }
                }
            }
        }

        DATA SAVED
        {
            "data_saved": {
                "month": "6",
                "amount": ""
            }
        }
        */

        /*DATA SAVED*/
        database.ref("Mark's Tool").once("value", function (snap) {
            snap.forEach(function (csnap) {
                var courseData = csnap.val(),
                    dataSaved = courseData["data_saved"];

                for (var i in dataSaved) {
                    var month = +dataSaved[i].month,
                        amount = +dataSaved[i].amount,
                        coor = {
                            "x": month,
                            "y": amount
                        };

                    dataSaved.push(coor)
                }
            })
        })


        /*TIME GATHERER*/
        database.ref("Mark's Tool").once("value", function (snap) {
            snap.forEach(function (csnap) {
                var courseData = csnap.val(),
                    timeData = courseData["time_spent"];

                for (var i in timeData) {
                    var timeData = +timeData[i].total,
                        numMonth = +i,
                        coor = {
                            "x": numMonth,
                            "y": timeData
                        };

                    timeSpent.push(coor);
                }
            })
        })
    }

    /*
    Determine that the location is the admin page and load
    all of the data with the administrator role.
    */
    if (location.pathname.includes("admin")) {

        loadUsers();
        //        loadChartData();

        checked();
        finished();
        //        charts();
        userSelect();
    }

}());
