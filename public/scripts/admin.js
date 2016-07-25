/*
database is a global variable
*/
(function () {

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

    $(".cancel").click(function (e) {
        var parent = e.target.parentElement;
        $(parent).css({
            "display": "none",
        })
        $('#shade').css({
            "display": "none",
        })
    });

    /*
    Runs the data for the checked Modal
    */
    function userSelect() {
        var select = $("<select></select>");

        database.ref("users").once("value", function (snap) {
            snap.forEach(function (csnap) {
                var name = csnap.val().displayName,
                    option = $(`<option>${name}</option>`);

                select.append(option);
            })
        });

        return select;
    }

    function populateCheckout(cd, cn) {

        var populate = $("#unassigned"),
            courseName = $(`<label><a target="_blank" href="${cd['Link']}">${corrData[cn]}</a></label>`),
            select = userSelect();

        courseName.append(select);

        populate.append(courseName);
    }

    function checked() {

        database.ref("Mark's Tool").once("value", function (snap) {
            snap.forEach(function (csnap) {
                var courseData = csnap.val(),
                    courseName = csnap.key,
                    nothing = "There is nothing here!";

                if (courseData["Content Pages"] !== nothing || courseData["Quizzes"] !== nothing) {
                    populateCheckout(courseData, courseName);
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
    }

}());
