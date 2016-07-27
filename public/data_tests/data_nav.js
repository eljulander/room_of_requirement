var currentData = [];
var coursesList = [];
var userList = [];
var isEnd = true;

getCourseData();

function getCourseData(){

  /*  $.get("sample.json",function(e){
        processData(e);
    });
    */


    database.ref().on("value",function(e){
        processData(e.val());
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
    var style = "";
    try{
    if (coursesList[(directoryChain.length > 0) ? directoryChain[0] : id]["Completed"] == "True") style =  "background-color:#07a254"
    console.log(style);
    }catch(e){}
    $("article").append("<div style=\""+ style +"\"class=\"dir\" id=\""+id+"\" onclick=\"addChain(this)\">"+name+"</div>");
    isEnd = false;
}

function getParentID(){
    console.log(directoryChain[directoryChain.length-1]);
    return "[id=\""+directoryChain[directoryChain.length-1]+"\"]";
}

function addItem(id,name){

     var tag = (isEnd)? getParentID() : "article";

    var data = name;
    var part = data.split(":");

    try{
        if(isLink(part[1].trim()))
            data = part[0] + ": <a target=\"_blank\" href='"+part[1].trim()+":"+part[2]+"'>Go to  Course</a>";
    }catch(e){}

    $(tag).append("<div onclick = \"modify(this)\" class=\"item\" id=\""+id+"\">"+data+"</div>");
    if(currentData[id] == "True"){
         document.getElementById(id).style = "background-color:#07a254";
    }
}

function removeQuotes(word)
{
    var myWord = word,
        replace = myWord.replace(/["]/g, "");
    return replace;
}

function isLink(data){
    return data.substr(0,4) == "http";
}
function modify(element){
    var data = currentData[element.id];

    console.log(data);

    if(isLink(data)) window.open(data,"_blank");

    if(data == "False"){
        currentData[element.id] = "True";
         element.innerText = "Checked : "+currentData[element.id];
         element.style = "background-color:#07a254";
    }
    else if(data == "True"){
        currentData[element.id] = "False";
         element.innerText = "Checked : "+currentData[element.id];
        element.style = "background-color:#a8b4b9";
    }

   if(directoryChain.length <= 2){
    $("article").html("");
    renderCurrentDirectory();
   }


}


function renderCurrentDirectory(){


    for(var i in currentData)
        if(currentData[i][0])
        typeof currentData[i] == 'object' ? addDirectory(removeQuotes(i),i) : addItem(removeQuotes(i),i+" : "+currentData[i]);


}

function lastDirectory(){

    $("article").html("");
    directoryChain.splice(directoryChain.length-1,1);
    directoryChain.length > 0 ? nextDirectory() : populateRoot();

}

function addChain(element){
    if(isEnd){
        if(element.id != directoryChain[directoryChain.length-1])
            lastDirectory();
        return
    };
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

function checkForFalse(){

}
