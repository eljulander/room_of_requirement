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
    })

    $(".cancel").click(function (e) {
        var parent = e.target.parentElement;

        $(parent).css({
            "display": "none",
        })

        $('#shade').css({
            "display": "none",
        })
    })

    /*
    Runs the data for the checked Modal
    */
    function checked() {
        console.log("checked");
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
