(function (window) {
    'use strict';

    var course_id,
        course_details;

    function generateCoursePreview(id, details) {
        var section = wand.crtElm("section");
        var header = wand.crtElm("h2", `Project Number ${id}`);
            header.className = "courseTitle";
        wand.apndr(section, header);

        wand.querApndr("main article", section);
    }

    window.startCourseLoad = function() {
        database.ref("Mark's Tool").once("child_added", function (snap) {
            course_details = snap.val();
            course_id = snap.key;

            generateCoursePreview(course_id, course_details);
        });
    }

    window.onload = function() {
        window.startCourseLoad();
        initApp();
    }
}(window));
