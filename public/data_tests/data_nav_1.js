var data = [];

var courseData = [];
var userData = [];

var loaded = false;

database.ref().on("value", function(e){
    if(!loaded){
    handleData(e.val());
        loaded = true;
    }
});



var myData = [];
function handleData(newData){

    data = newData["Mark's Tool"];
    userData = newData["users"];

    for(var i in data){
        if(data[i]["checker"] == JSON.parse(localStorage.ManagementAuthO)["uid"]){
            console.log("Assigned Course: " + corrData[i]);
            myData[i] = data[i];
            showDash(i);
        }

    }
    console.log(myData);
}

function showDash(course){
    var completed = myData[course]["Completed"];
    var Link = myData[course]["Link"];

    var contentPages = myData[course]["Content Pages"];
    var lessons = [];
    $("article").append(`<div id="${course}"></div>`)

    $("#"+course).append("<h1>"+corrData[course]+"</h1>");
    $("#"+course).append("<p class='completed'>Completed: "+completed+"<p>");
    $("#"+course).append(`<p>Link: <a href="${corrData[course]}">Go to Course</a><p>`);

    $("#"+course+" .completed").on("click",function(e){
        completed = (completed == "False") ? "True" : "False";
        var ref = `Mark's Tool/${course}/Completed`;
        $("#"+course+" .completed").text("Completed: "+completed);
        database.ref(ref).set(completed);
    });

    for(var i in contentPages){
        addSection(i,course);
        for(var j in contentPages[i]){
            addModuel(j,i);
            for(var k in contentPages[i][j]){
                var ld = contentPages[i][j][k];
                var newLesson = new lesson(course,i,j,k,ld["Type"],ld["Checked"]);
                addLesson(newLesson,j);
                lessons.push(newLesson);
            }
        }
    }




}
function removeSpaces(word){
    var myWord = word,
        replace = myWord.replace(/[ ]/g, "");
    replace = replace.replace(/[:]/g, "");
    replace = replace.replace(/[-]/g, "");
    replace = replace.replace(/["]/g, "");
    replace = replace.replace(/[']/g, "");
    replace = replace.replace(/[.]/g, "");
    replace = replace.replace(/[(]/g, "");
    replace = replace.replace(/[)]/g, "");
    replace = replace.replace(/[?]/g, "");
    replace = replace.replace(/[#]/g, "");
    replace = replace.replace(/[&]/g, "");
    return replace;
}

function removeQuotes(word)
{
    var myWord = word,
        replace = myWord.replace(/["]/g, "");
    return replace;
}
function addSection(header,id){
    $("#"+id).append("<h2>"+header+"</h2><div id=\""+removeSpaces(header)+"\"></div>");
}
function addModuel(header,id){
     $("#"+removeSpaces(id)).append("<h3>"+header+"</h3><div id=\""+removeSpaces(header)+"\"></div>");
}
function addLesson(lesson,id){
   var div = "<div id="+removeSpaces(lesson.name)+">";
    div +="<h4>"+lesson.name+"</h4>";
    div += `<p style ="${(lesson.checked == "True") ? "background:linear-gradient(to left, rgba(0,255,0,0),rgba(0,255,0,0),rgba(0,255,0,0),rgba(0,255,0,0),rgba(0,255,0,0),rgba(0,255,0,0),rgba(0,255,0,0), rgb(42, 150, 92))" : "background:linear-gradient(to left, rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0),  rgba(255,0,0,.5))" } "class='checked'>Checked: ${lesson.checked}</p>`;
    div += "<p class='type'>Type: "+lesson.type+"</p>";
    div +="</div>";
    $("#"+removeSpaces(id)).append(div);

    $("#"+removeSpaces(lesson.name)+" .checked").on("click",function(e){
       //console.log(lesson);
       lesson.checked  = (lesson.checked == "False") ? "True": "False";

        $("#"+removeSpaces(lesson.name)+" .checked").text("Checked: "+lesson.checked);
        var ref = `Mark's Tool/${lesson.course}/Content Pages/${lesson.section}/${lesson.moduel}/${lesson.name}/Checked`;
      //  console.log(ref);
        $("article").html("");
        loaded = false;
        database.ref(ref).set(lesson.checked);

    });

}



function lesson(course,section, moduel, name, type, checked){
    this.course = course;
    this.section = section;
    this.moduel = moduel;
    this.name = name;
    this.type = type;
    this.checked = checked;
}



