(function () {
    'use strict';

    var course_id,
        course_details;

    function generateCoursePreview(id, details) {
        var header = wand.crtElm("h2", id);
        console.log(header);
        var section = wand.crtElm("section");
        wand.apndr(section, header);
        console.log(section);

        wand.querApndr("main article", section);
        console.log(id, details);
    }

    database.ref("Mark's Tool").on("child_added", function (snap) {
        course_details = snap.val();
        course_id = snap.key;

        generateCoursePreview(course_id, course_details);
    });
}());
