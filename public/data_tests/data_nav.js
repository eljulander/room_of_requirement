var currentData = [];
var coursesList = [];
var userList = [];

getCourseData();

function getCourseData(){

    $.get("sample.json",function(e){
        processData(e);
    });
}

var directoryChain = [];

function processData(courses){
    coursesList = courses["Mark's Tool"];
    userList = courses['users'];
    populateRoot();
    console.log(courses);
}

function populateRoot(){
    for(var i in coursesList)
        addDirectory(i,corrData[i]);
}

function addDirectory(id,name){
    $("article").append("<div id=\""+id+"\" onclick=\"addChain(this)\">"+name+"</div>");
}

function addItem(id,name){
    var data = name;
    var part = data.split(":");

    if(part[1].trim().substr(0,4) == "http")
        data = part[0] + ": <a target=\"_blank\" href='"+part[1].trim()+":"+part[2]+"'>Go to  Course</a>";

    $("article").append("<div id=\""+id+"\">"+data+"</div>");
}

function renderCurrentDirectory(){
    for(var i in currentData)
        typeof currentData[i] == 'object' ? addDirectory(i,i) : addItem(i,i+" : "+currentData[i]);
}

function lastDirectory(){

    $("article").html("");
    directoryChain.splice(directoryChain.length-1,1);
    directoryChain.length > 0 ? nextDirectory() : populateRoot();

}

function addChain(element){
    directoryChain.push(element.id);
    nextDirectory();
}

function nextDirectory(){
    currentData = coursesList;

    for(var i in directoryChain)
        currentData = currentData[directoryChain[i]];
    console.log(currentData);

    $("article").html("");
    renderCurrentDirectory();

}
