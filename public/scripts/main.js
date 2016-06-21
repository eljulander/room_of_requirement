    var course_id,
        course_details;

    function generateCoursePreview(id, details) {
        var section = $("<section></section"),
            header = $(`<h2>Project Number ${id}</h2>`).addClass("courseTitle");

        $(section).append(header);

        $("main article").append(section);
    }

    function startCourseLoad() {
        database.ref("Mark's Tool").once("value", function (snap) {
            snap.forEach(function (csnap) {
                course_details = csnap.val();
                course_id = csnap.key;
                generateCoursePreview(course_id, course_details);
            })
        });
    }

    $(document).ready(function() {
        startCourseLoad();
        initApp();
    });
