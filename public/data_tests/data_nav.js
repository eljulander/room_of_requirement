var currentData = [];
var coursesList = [];
var userList = [];
var isEnd = true;

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
    isEnd = false;
}

function getParentID(){
    console.log(directoryChain[directoryChain.length-1]);
    return "[id='"+directoryChain[directoryChain.length-1]+'\']';
}

function addItem(id,name){

     var tag = (isEnd)? getParentID() : "article";

    var data = name;
    var part = data.split(":");
    try{
        if(part[1].trim().substr(0,4) == "http")
            data = part[0] + ": <a target=\"_blank\" href='"+part[1].trim()+":"+part[2]+"'>Go to  Course</a>";
    }catch(e){}

    $(tag).append("<div id=\""+id+"\">"+data+"</div>");
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

function getFirst(object){
    var first;
    for(first in object)break;
    return first;
}

function nextDirectory(){
    currentData = coursesList;

    for(var i in directoryChain)
        currentData = currentData[directoryChain[i]];
    console.log(currentData);

    isEnd = typeof currentData[getFirst(currentData)] != "object";

    if(!isEnd)
    $("article").html("");

    renderCurrentDirectory();

}
