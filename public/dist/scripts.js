"use strict";var config={apiKey:"AIzaSyCRfRp20kEkpwO1Bs30sDyBkC4Qf-rsuNM",authDomain:"course-file-auditor.firebaseapp.com",databaseURL:"https://course-file-auditor.firebaseio.com",storageBucket:"course-file-auditor.appspot.com"};firebase.initializeApp(config);var database=firebase.database();
"use strict";var corrData={16149:"HFED 340",16150:"B 275",16152:"B 101",16153:"B 424",16154:"B 380",16155:"B 129",16156:"B 100",16158:"B 499A",16161:"B 448",16162:"FHGEN 270",16164:"FAML 360",16165:"FAML 430",16166:"HFED 101",16167:"ME 201",16170:"B 183",16173:"FHGEN 251D",16175:"FHGEN 112",16176:"B 211",16177:"FAML 460",16178:"FHGEN 120",16179:"B 250",16180:"FAML 400",16181:"FHGEN 160",16182:"FHGEN 211",16183:"FAML 445",16185:"B 283",16187:"FHGEN 130",16188:"FHGEN 399",16189:"B 401",16190:"FHGEN 251A",16191:"FAML 498R",16192:"B 341",16193:"FHGEN 251B",16195:"FHGEN 251C",16196:"B 370",16197:"CHILD 320",16198:"FHGEN 252B",16199:"B 301",16200:"FAML 300",16201:"FHGEN 212",16202:"B 321",16203:"oops",16204:"FHGEN 140",16205:"B 361",16207:"FDMAT 112",16208:"CHILD 300",16209:"FAML 100",16211:"CHILD 210",16212:"B 424D",16213:"ECON 150",16214:"AGBUS 105",16215:"FHGEN 111",16216:"FAML 160",16218:"B 100",16219:"ECON 151",16221:"B 410",19492:"B 428",23800:"CS 313",23801:"FDHUM 110",33923:"B 499B",40664:"FAML 200",42377:"FDMAT 108",50273:"HS 390",50274:"FDWLD 201",50275:"ENG 252",50276:"FDINT 211",50277:"FDWLD 101",50279:"ANTH 101",50281:"CIT 370",50283:"FDSCI 101",50284:"ED 200",50286:"FDSCI 201",50289:"AUTO 125",50290:"HS 310",57713:"POLSC 110",57714:"CIT 230",58369:"BIO 265L",58371:"COMM 273",58372:"BIO 264L",59655:"HS 280",59656:"COMM 175",59657:"CIT 160",59658:"FDENG 301",59659:"COMM 125",61065:"FDSCI 203",61373:"NUTR 150",61374:"MA 106",61375:"HS 285",61376:"PSYCH 112",61377:"CIT 110",61378:"WDD 100",61380:"CIT 111",61381:"CIT 336",61908:"PSYCH 111",61909:"ED 312",61910:"FDSCI 205",61911:"CIT 240",61920:"HS 391",61928:"SOC 111",61929:"MATH 221A",62216:"HRHP 131",62217:"MATH 221C",62218:"COMM 130",62453:"COMM 102",62586:"MATH 221B",63193:"B 220",63194:"CIT 260",63195:"HS 320",63196:"HS 370",63419:"CIT 225",63581:"FAML 220",63921:"PSYCH 201",67126:"HS 460",67127:"BIO 221",67128:"HS 465",67129:"COMM 310",67130:"HS 401",67131:"HS 425",67132:"CIT 241",67133:"PSYCH 302",67134:"COMM 111",67135:"PSYCH 311",67136:"POLSC 150",67138:"HS 345",67139:"ED 202",67140:"RM 304",74838:"COMM 307",81222:"CHILD 310",81805:"CIT 261",99480:"HS 240",99482:"AGBUS 138",99483:"BIO 375",99484:"FDREL 100",99485:"POLSC 170",99486:"RM 307",99487:"ENG 325",99488:"COMM 352",99489:"RM 471",99530:"BIO 265",100806:"MA 107",100807:"BIO 264",105615:"TA 402",105706:"CIT 262",106277:"CIT 381",106278:"MA 105",106279:"COMM 150",106280:"CIT 325",106281:"CIT 352",106282:"COMM 250",106283:"RM 371",106284:"COMM 289",106285:"COMM 450",106286:"RM 370",106287:"SOC 112",106288:"AGBUS 180A",106290:"BIO 475",106291:"BIO 381",106292:"HS 375",106293:"RM 373R",106294:"RM 472",106295:"MA 205",106296:"HS 420",106297:"HS 378",106298:"ENG 355",106300:"MA 111",106301:"ENG 335",106303:"oops",106989:"ENG 251",108133:"B 101",108134:"FAML 100",108135:"FAML 220",108136:"FDENG 301",108137:"FDREL 121",108138:"FDREL 122",108139:"FDSCI 203",108140:"ENG 332",108142:"CIT 110",108143:"FDHUM 110",108144:"FDSCI 201",108599:"TA 116",109633:"FDSCI 101",109641:"ENG 314"};
"use strict";!function(){function e(){if(firebase.auth().currentUser)localStorage.removeItem("ManagementAuthO"),firebase.auth().signOut();else{var e=new firebase.auth.GoogleAuthProvider;e.addScope("https://www.googleapis.com/auth/plus.login"),e.addScope("profile"),e.addScope("email"),firebase.auth().signInWithRedirect(e)}document.getElementById("quickstart-sign-in").disabled=!0}function t(e,t){database.ref("users").once("value",function(i){i.forEach(function(i){i.key===e&&(i.val().role||t())})})}function i(){firebase.auth().getRedirectResult().then(function(e){if(e.credential){var t=e.credential.accessToken;location.reload(),console.log(t)}e.user})["catch"](function(e){var t=e.code;e.message,e.email,e.credential;"auth/account-exists-with-different-credential"===t?alert("You have already signed up with a different auth provider for that email."):console.error(e)}),firebase.auth().onAuthStateChanged(function(e){if(e){var i={displayName:e.displayName,email:e.email,emailVerified:e.emailVerified,photoURL:e.photoURL,uid:e.uid};document.getElementById("quickstart-sign-in").textContent="Sign out",database.ref("users/"+i.uid).update({displayName:i.displayName,email:i.email,emailVerified:i.emailVerified,photoURL:i.photoURL,uid:i.uid}),t(i.uid,function(){database.ref("users/"+i.uid).update({role:0})}),localStorage.ManagementAuthO=JSON.stringify(i)}else document.getElementById("quickstart-sign-in").textContent="Sign in with Google";document.getElementById("quickstart-sign-in").disabled=!1}),document.getElementById("quickstart-sign-in").addEventListener("click",e,!1)}window.onload=function(){i()}}();
"use strict";!function(){function a(){var a=$("<input></input>");return a.keyup(function(a){$("#userNames").html("");for(var e=a.target.value,n=a.target,t=0;t<i.length;t++)if(i[t].includes(e)){var c=$("<p>"+i[t]+"</p>");c.attr("id","empName").click(function(a){$(n).val(a.target.innerText)}),$("#userNames").append(c)}}),a}function e(a){var e=a.target,n=$(e).attr("data-courseid");database.ref("Mark's Tool/"+n).update({checker:""}),$(a.target).css({display:"none"})}function n(n,t,c){var s,r=$("#"+c),i=$('<label data-courseID="'+t+'"><a target="_blank" href="'+n.Link+'">'+corrData[t]+"</a></label>");""!==n.checker&&"checkedOut"===c&&database.ref("users/"+n.checker).once("value",function(a){var n=a.val().displayName;i.append("<p>"+n+"</p>").append(" &times;").css({cursor:"pointer"}).click(e)}),"unassigned"===c&&(s=a()),i.append(s),r.append(i)}function t(){database.ref("Mark's Tool").on("value",function(a){a.forEach(function(a){var e=a.val(),t=a.key,c="There is nothing here!";e["Content Pages"]===c&&e.Quizzes===c||(e.checker?n(e,t,"checkedOut"):n(e,t,"unassigned"))})})}function c(){console.log("finished")}function s(){console.log("dataSaved")}function r(){console.log("timeSpent")}var i=[];$("a").click(function(a){var e=a.target.className;$("#"+e).css({display:"block"}),$("#shade").css({display:"block"}),$("#namePopup").css({display:"block"})}),$(".cancel").click(function(a){var e=a.target.parentElement;$(e).css({display:"none"}),$("#shade").css({display:"none"}),$("#namePopup").css({display:"none"})}),$("#assign").click(function(a){var e=$("[data-courseid] > input"),n=$("[data-courseid]"),t=JSON.parse(localStorage.ManagementAuthO);$.each(n,function(a,n){var c=e[a].value;if(c===t.displayName){var s=$(n).attr("data-courseid");database.ref("Mark's Tool/"+s).update({checker:t.uid})}e[a].value=""})}),database.ref("users").once("value",function(a){a.forEach(function(a){var e=a.val().displayName;i.push(e)})}),location.pathname.includes("admin")&&(t(),c(),s(),r(),a())}();
"use strict";!function(){var n,o,t=JSON.parse(localStorage.ManagementAuthO)||"",i=$("nav"),a=$("<button>Home</button>");a.click(function(n){var o=location.origin;location.assign(o+"/index.html")}),i.append(a),database.ref("users/"+t.uid).once("value",function(t){n=t.val().role,o=$("<button>Admin</button>"),n>=8&&(console.log("User logged in is Administrator"),o.click(function(n){console.log("li");var o=n.target.innerText.toLowerCase(),t=location.origin;location.assign(t+"/"+o+".html")}),i.append(o))})}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImNvdXJzZV9uYW1lLmpzIiwibG9naW4uanMiLCJhZG1pbi5qcyIsIm5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwic3RvcmFnZUJ1Y2tldCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImRhdGFiYXNlIiwiY29yckRhdGEiLCIxNjE0OSIsIjE2MTUwIiwiMTYxNTIiLCIxNjE1MyIsIjE2MTU0IiwiMTYxNTUiLCIxNjE1NiIsIjE2MTU4IiwiMTYxNjEiLCIxNjE2MiIsIjE2MTY0IiwiMTYxNjUiLCIxNjE2NiIsIjE2MTY3IiwiMTYxNzAiLCIxNjE3MyIsIjE2MTc1IiwiMTYxNzYiLCIxNjE3NyIsIjE2MTc4IiwiMTYxNzkiLCIxNjE4MCIsIjE2MTgxIiwiMTYxODIiLCIxNjE4MyIsIjE2MTg1IiwiMTYxODciLCIxNjE4OCIsIjE2MTg5IiwiMTYxOTAiLCIxNjE5MSIsIjE2MTkyIiwiMTYxOTMiLCIxNjE5NSIsIjE2MTk2IiwiMTYxOTciLCIxNjE5OCIsIjE2MTk5IiwiMTYyMDAiLCIxNjIwMSIsIjE2MjAyIiwiMTYyMDMiLCIxNjIwNCIsIjE2MjA1IiwiMTYyMDciLCIxNjIwOCIsIjE2MjA5IiwiMTYyMTEiLCIxNjIxMiIsIjE2MjEzIiwiMTYyMTQiLCIxNjIxNSIsIjE2MjE2IiwiMTYyMTgiLCIxNjIxOSIsIjE2MjIxIiwiMTk0OTIiLCIyMzgwMCIsIjIzODAxIiwiMzM5MjMiLCI0MDY2NCIsIjQyMzc3IiwiNTAyNzMiLCI1MDI3NCIsIjUwMjc1IiwiNTAyNzYiLCI1MDI3NyIsIjUwMjc5IiwiNTAyODEiLCI1MDI4MyIsIjUwMjg0IiwiNTAyODYiLCI1MDI4OSIsIjUwMjkwIiwiNTc3MTMiLCI1NzcxNCIsIjU4MzY5IiwiNTgzNzEiLCI1ODM3MiIsIjU5NjU1IiwiNTk2NTYiLCI1OTY1NyIsIjU5NjU4IiwiNTk2NTkiLCI2MTA2NSIsIjYxMzczIiwiNjEzNzQiLCI2MTM3NSIsIjYxMzc2IiwiNjEzNzciLCI2MTM3OCIsIjYxMzgwIiwiNjEzODEiLCI2MTkwOCIsIjYxOTA5IiwiNjE5MTAiLCI2MTkxMSIsIjYxOTIwIiwiNjE5MjgiLCI2MTkyOSIsIjYyMjE2IiwiNjIyMTciLCI2MjIxOCIsIjYyNDUzIiwiNjI1ODYiLCI2MzE5MyIsIjYzMTk0IiwiNjMxOTUiLCI2MzE5NiIsIjYzNDE5IiwiNjM1ODEiLCI2MzkyMSIsIjY3MTI2IiwiNjcxMjciLCI2NzEyOCIsIjY3MTI5IiwiNjcxMzAiLCI2NzEzMSIsIjY3MTMyIiwiNjcxMzMiLCI2NzEzNCIsIjY3MTM1IiwiNjcxMzYiLCI2NzEzOCIsIjY3MTM5IiwiNjcxNDAiLCI3NDgzOCIsIjgxMjIyIiwiODE4MDUiLCI5OTQ4MCIsIjk5NDgyIiwiOTk0ODMiLCI5OTQ4NCIsIjk5NDg1IiwiOTk0ODYiLCI5OTQ4NyIsIjk5NDg4IiwiOTk0ODkiLCI5OTUzMCIsIjEwMDgwNiIsIjEwMDgwNyIsIjEwNTYxNSIsIjEwNTcwNiIsIjEwNjI3NyIsIjEwNjI3OCIsIjEwNjI3OSIsIjEwNjI4MCIsIjEwNjI4MSIsIjEwNjI4MiIsIjEwNjI4MyIsIjEwNjI4NCIsIjEwNjI4NSIsIjEwNjI4NiIsIjEwNjI4NyIsIjEwNjI4OCIsIjEwNjI5MCIsIjEwNjI5MSIsIjEwNjI5MiIsIjEwNjI5MyIsIjEwNjI5NCIsIjEwNjI5NSIsIjEwNjI5NiIsIjEwNjI5NyIsIjEwNjI5OCIsIjEwNjMwMCIsIjEwNjMwMSIsIjEwNjMwMyIsIjEwNjk4OSIsIjEwODEzMyIsIjEwODEzNCIsIjEwODEzNSIsIjEwODEzNiIsIjEwODEzNyIsIjEwODEzOCIsIjEwODEzOSIsIjEwODE0MCIsIjEwODE0MiIsIjEwODE0MyIsIjEwODE0NCIsIjEwODU5OSIsIjEwOTYzMyIsIjEwOTY0MSIsInRvZ2dsZVNpZ25JbiIsImF1dGgiLCJjdXJyZW50VXNlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzaWduT3V0IiwicHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJhZGRTY29wZSIsInNpZ25JbldpdGhSZWRpcmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsInNldFJvbGUiLCJ1aWQiLCJmdW5jIiwicmVmIiwib25jZSIsInNuYXAiLCJmb3JFYWNoIiwiY3NuYXAiLCJrZXkiLCJ2YWwiLCJyb2xlIiwiaW5pdEFwcCIsImdldFJlZGlyZWN0UmVzdWx0IiwidGhlbiIsInJlc3VsdCIsImNyZWRlbnRpYWwiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImFsZXJ0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aE8iLCJkaXNwbGF5TmFtZSIsImVtYWlsVmVyaWZpZWQiLCJwaG90b1VSTCIsInRleHRDb250ZW50IiwidXBkYXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJ1c2VyU2VsZWN0IiwiaW5wdXQiLCIkIiwia2V5dXAiLCJlIiwiaHRtbCIsImlucHV0VmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzZWxlY3RlZElucHV0IiwiaSIsImxvYWRlZFVzZXJzIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwYXJhIiwiYXR0ciIsImNsaWNrIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwidW5jaGVja291dCIsImNsaWNrZWRFbGVtZW50IiwiY291cnNlSUQiLCJjaGVja2VyIiwiY3NzIiwiZGlzcGxheSIsInBvcHVsYXRlQ2hlY2siLCJjZCIsImNuIiwidGFyIiwicG9wdWxhdGUiLCJjb3Vyc2VOYW1lIiwiY3Vyc29yIiwiY2hlY2tlZCIsIm9uIiwiY291cnNlRGF0YSIsIm5vdGhpbmciLCJmaW5pc2hlZCIsImRhdGFTYXZlZCIsInRpbWVTcGVudCIsImNsYXNzSUQiLCJjbGFzc05hbWUiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiaW5wdXRBc3NpZ24iLCJ1c2VyRGF0YSIsInBhcnNlIiwiZWFjaCIsInZhIiwidXNlck5hbWUiLCJuYW1lIiwicHVzaCIsInBhdGhuYW1lIiwiYWRtaW5CdXR0b24iLCJhdXRoRGF0YSIsIm5hdiIsImhvbWVCdXR0b24iLCJyb290Iiwib3JpZ2luIiwiYXNzaWduIiwicGFnZSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFBLElBQUlBLFNBQ0FDLE9BQVEsMENBQ1JDLFdBQVksc0NBQ1pDLFlBQWEsNkNBQ2JDLGNBQWUsa0NBRW5CQyxVQUFTQyxjQUFjTixPQUV2QixJQUFJTyxVQUFXRixTQUFTRTtBQ1J4QixZQUFBLElBQUlDLFdBQ0FDLE1BQU8sV0FDUEMsTUFBTyxRQUNQQyxNQUFPLFFBQ1BDLE1BQU8sUUFDUEMsTUFBTyxRQUNQQyxNQUFPLFFBQ1BDLE1BQU8sUUFDUEMsTUFBTyxTQUNQQyxNQUFPLFFBQ1BDLE1BQU8sWUFDUEMsTUFBTyxXQUNQQyxNQUFPLFdBQ1BDLE1BQU8sV0FDUEMsTUFBTyxTQUNQQyxNQUFPLFFBQ1BDLE1BQU8sYUFDUEMsTUFBTyxZQUNQQyxNQUFPLFFBQ1BDLE1BQU8sV0FDUEMsTUFBTyxZQUNQQyxNQUFPLFFBQ1BDLE1BQU8sV0FDUEMsTUFBTyxZQUNQQyxNQUFPLFlBQ1BDLE1BQU8sV0FDUEMsTUFBTyxRQUNQQyxNQUFPLFlBQ1BDLE1BQU8sWUFDUEMsTUFBTyxRQUNQQyxNQUFPLGFBQ1BDLE1BQU8sWUFDUEMsTUFBTyxRQUNQQyxNQUFPLGFBQ1BDLE1BQU8sYUFDUEMsTUFBTyxRQUNQQyxNQUFPLFlBQ1BDLE1BQU8sYUFDUEMsTUFBTyxRQUNQQyxNQUFPLFdBQ1BDLE1BQU8sWUFDUEMsTUFBTyxRQUNQQyxNQUFPLE9BQ1BDLE1BQU8sWUFDUEMsTUFBTyxRQUNQQyxNQUFPLFlBQ1BDLE1BQU8sWUFDUEMsTUFBTyxXQUNQQyxNQUFPLFlBQ1BDLE1BQU8sU0FDUEMsTUFBTyxXQUNQQyxNQUFPLFlBQ1BDLE1BQU8sWUFDUEMsTUFBTyxXQUNQQyxNQUFPLFFBQ1BDLE1BQU8sV0FDUEMsTUFBTyxRQUNQQyxNQUFPLFFBQ1BDLE1BQU8sU0FDUEMsTUFBTyxZQUNQQyxNQUFPLFNBQ1BDLE1BQU8sV0FDUEMsTUFBTyxZQUNQQyxNQUFPLFNBQ1BDLE1BQU8sWUFDUEMsTUFBTyxVQUNQQyxNQUFPLFlBQ1BDLE1BQU8sWUFDUEMsTUFBTyxXQUNQQyxNQUFPLFVBQ1BDLE1BQU8sWUFDUEMsTUFBTyxTQUNQQyxNQUFPLFlBQ1BDLE1BQU8sV0FDUEMsTUFBTyxTQUNQQyxNQUFPLFlBQ1BDLE1BQU8sVUFDUEMsTUFBTyxXQUNQQyxNQUFPLFdBQ1BDLE1BQU8sV0FDUEMsTUFBTyxTQUNQQyxNQUFPLFdBQ1BDLE1BQU8sVUFDUEMsTUFBTyxZQUNQQyxNQUFPLFdBQ1BDLE1BQU8sWUFDUEMsTUFBTyxXQUNQQyxNQUFPLFNBQ1BDLE1BQU8sU0FDUEMsTUFBTyxZQUNQQyxNQUFPLFVBQ1BDLE1BQU8sVUFDUEMsTUFBTyxVQUNQQyxNQUFPLFVBQ1BDLE1BQU8sWUFDUEMsTUFBTyxTQUNQQyxNQUFPLFlBQ1BDLE1BQU8sVUFDUEMsTUFBTyxTQUNQQyxNQUFPLFVBQ1BDLE1BQU8sWUFDUEMsTUFBTyxXQUNQQyxNQUFPLFlBQ1BDLE1BQU8sV0FDUEMsTUFBTyxXQUNQQyxNQUFPLFlBQ1BDLE1BQU8sUUFDUEMsTUFBTyxVQUNQQyxNQUFPLFNBQ1BDLE1BQU8sU0FDUEMsTUFBTyxVQUNQQyxNQUFPLFdBQ1BDLE1BQU8sWUFDUEMsTUFBTyxTQUNQQyxNQUFPLFVBQ1BDLE1BQU8sU0FDUEMsTUFBTyxXQUNQQyxNQUFPLFNBQ1BDLE1BQU8sU0FDUEMsTUFBTyxVQUNQQyxNQUFPLFlBQ1BDLE1BQU8sV0FDUEMsTUFBTyxZQUNQQyxNQUFPLFlBQ1BDLE1BQU8sU0FDUEMsTUFBTyxTQUNQQyxNQUFPLFNBQ1BDLE1BQU8sV0FDUEMsTUFBTyxZQUNQQyxNQUFPLFVBQ1BDLE1BQU8sU0FDUEMsTUFBTyxZQUNQQyxNQUFPLFVBQ1BDLE1BQU8sWUFDUEMsTUFBTyxZQUNQ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LGdCQUUxQjdQLFVBQVN3TSxJQUFULGVBQTRCMkQsR0FBWTNCLFFBQ3BDNEIsUUFBU3NCLEVBQVNwRixNQUkxQm1GLEVBQVlqQyxHQUFHRixNQUFRLE9BSy9CdFAsU0FBU3dNLElBQUksU0FBU0MsS0FBSyxRQUFTLFNBQVVDLEdBQzFDQSxFQUFLQyxRQUFRLFNBQVVDLEdBQ25CLEdBQUltRixHQUFPbkYsRUFBTUUsTUFBTXNCLFdBQ3ZCcUIsR0FBWXVDLEtBQUtELE9BcUhyQnhFLFNBQVMwRSxTQUFTdEMsU0FBUyxXQUMzQm1CLElBQ0FJLElBQ0FDLElBQ0FDLElBQ0F0QztBQ3hMUixjQUFDLFdBRUcsR0FDSS9CLEdBR0FtRixFQUpBQyxFQUFXMUQsS0FBS2tELE1BQU1oRyxhQUFBLGtCQUFvQyxHQUUxRHlHLEVBQU1wRCxFQUFFLE9BQ1JxRCxFQUFhckQsRUFBRSx3QkFHbkJxRCxHQUFXdkMsTUFBTSxTQUFVWixHQUN2QixHQUFJb0QsR0FBTy9FLFNBQVNnRixNQUNwQmhGLFVBQVNpRixPQUFVRixFQUFuQixpQkFHSkYsRUFBSXBDLE9BQU9xQyxHQUVYclMsU0FBU3dNLElBQVQsU0FBc0IyRixFQUFTN0YsS0FBT0csS0FBSyxRQUFTLFNBQVVDLEdBQzFESyxFQUFPTCxFQUFLSSxNQUFNQyxLQUNsQm1GLEVBQWNsRCxFQUFFLDBCQUVaakMsR0FBUSxJQUNSVSxRQUFRQyxJQUFJLG1DQUVad0UsRUFBWXBDLE1BQU0sU0FBVVosR0FDeEJ6QixRQUFRQyxJQUFJLEtBRVosSUFBSStFLEdBQU92RCxFQUFFRyxPQUFPVSxVQUFVMkMsY0FDMUJKLEVBQU8vRSxTQUFTZ0YsTUFFcEJoRixVQUFTaUYsT0FBVUYsRUFBbkIsSUFBMkJHLEVBQTNCLFdBR0pMLEVBQUlwQyxPQUFPa0MiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q1JmUnAyMGtFa3B3TzFCczMwc0R5QmtDNFFmLXJzdU5NXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcImNvdXJzZS1maWxlLWF1ZGl0b3IuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NvdXJzZS1maWxlLWF1ZGl0b3IuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY291cnNlLWZpbGUtYXVkaXRvci5hcHBzcG90LmNvbVwiLFxyXG59O1xyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcblxyXG52YXIgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuIiwidmFyIGNvcnJEYXRhID0ge1xuICAgIDE2MTQ5OiAnSEZFRCAzNDAnLFxuICAgIDE2MTUwOiAnQiAyNzUnLFxuICAgIDE2MTUyOiAnQiAxMDEnLFxuICAgIDE2MTUzOiAnQiA0MjQnLFxuICAgIDE2MTU0OiAnQiAzODAnLFxuICAgIDE2MTU1OiAnQiAxMjknLFxuICAgIDE2MTU2OiAnQiAxMDAnLFxuICAgIDE2MTU4OiAnQiA0OTlBJyxcbiAgICAxNjE2MTogJ0IgNDQ4JyxcbiAgICAxNjE2MjogJ0ZIR0VOIDI3MCcsXG4gICAgMTYxNjQ6ICdGQU1MIDM2MCcsXG4gICAgMTYxNjU6ICdGQU1MIDQzMCcsXG4gICAgMTYxNjY6ICdIRkVEIDEwMScsXG4gICAgMTYxNjc6ICdNRSAyMDEnLFxuICAgIDE2MTcwOiAnQiAxODMnLFxuICAgIDE2MTczOiAnRkhHRU4gMjUxRCcsXG4gICAgMTYxNzU6ICdGSEdFTiAxMTInLFxuICAgIDE2MTc2OiAnQiAyMTEnLFxuICAgIDE2MTc3OiAnRkFNTCA0NjAnLFxuICAgIDE2MTc4OiAnRkhHRU4gMTIwJyxcbiAgICAxNjE3OTogJ0IgMjUwJyxcbiAgICAxNjE4MDogJ0ZBTUwgNDAwJyxcbiAgICAxNjE4MTogJ0ZIR0VOIDE2MCcsXG4gICAgMTYxODI6ICdGSEdFTiAyMTEnLFxuICAgIDE2MTgzOiAnRkFNTCA0NDUnLFxuICAgIDE2MTg1OiAnQiAyODMnLFxuICAgIDE2MTg3OiAnRkhHRU4gMTMwJyxcbiAgICAxNjE4ODogJ0ZIR0VOIDM5OScsXG4gICAgMTYxODk6ICdCIDQwMScsXG4gICAgMTYxOTA6ICdGSEdFTiAyNTFBJyxcbiAgICAxNjE5MTogJ0ZBTUwgNDk4UicsXG4gICAgMTYxOTI6ICdCIDM0MScsXG4gICAgMTYxOTM6ICdGSEdFTiAyNTFCJyxcbiAgICAxNjE5NTogJ0ZIR0VOIDI1MUMnLFxuICAgIDE2MTk2OiAnQiAzNzAnLFxuICAgIDE2MTk3OiAnQ0hJTEQgMzIwJyxcbiAgICAxNjE5ODogJ0ZIR0VOIDI1MkInLFxuICAgIDE2MTk5OiAnQiAzMDEnLFxuICAgIDE2MjAwOiAnRkFNTCAzMDAnLFxuICAgIDE2MjAxOiAnRkhHRU4gMjEyJyxcbiAgICAxNjIwMjogJ0IgMzIxJyxcbiAgICAxNjIwMzogJ29vcHMnLFxuICAgIDE2MjA0OiAnRkhHRU4gMTQwJyxcbiAgICAxNjIwNTogJ0IgMzYxJyxcbiAgICAxNjIwNzogJ0ZETUFUIDExMicsXG4gICAgMTYyMDg6ICdDSElMRCAzMDAnLFxuICAgIDE2MjA5OiAnRkFNTCAxMDAnLFxuICAgIDE2MjExOiAnQ0hJTEQgMjEwJyxcbiAgICAxNjIxMjogJ0IgNDI0RCcsXG4gICAgMTYyMTM6ICdFQ09OIDE1MCcsXG4gICAgMTYyMTQ6ICdBR0JVUyAxMDUnLFxuICAgIDE2MjE1OiAnRkhHRU4gMTExJyxcbiAgICAxNjIxNjogJ0ZBTUwgMTYwJyxcbiAgICAxNjIxODogJ0IgMTAwJyxcbiAgICAxNjIxOTogJ0VDT04gMTUxJyxcbiAgICAxNjIyMTogJ0IgNDEwJyxcbiAgICAxOTQ5MjogJ0IgNDI4JyxcbiAgICAyMzgwMDogJ0NTIDMxMycsXG4gICAgMjM4MDE6ICdGREhVTSAxMTAnLFxuICAgIDMzOTIzOiAnQiA0OTlCJyxcbiAgICA0MDY2NDogJ0ZBTUwgMjAwJyxcbiAgICA0MjM3NzogJ0ZETUFUIDEwOCcsXG4gICAgNTAyNzM6ICdIUyAzOTAnLFxuICAgIDUwMjc0OiAnRkRXTEQgMjAxJyxcbiAgICA1MDI3NTogJ0VORyAyNTInLFxuICAgIDUwMjc2OiAnRkRJTlQgMjExJyxcbiAgICA1MDI3NzogJ0ZEV0xEIDEwMScsXG4gICAgNTAyNzk6ICdBTlRIIDEwMScsXG4gICAgNTAyODE6ICdDSVQgMzcwJyxcbiAgICA1MDI4MzogJ0ZEU0NJIDEwMScsXG4gICAgNTAyODQ6ICdFRCAyMDAnLFxuICAgIDUwMjg2OiAnRkRTQ0kgMjAxJyxcbiAgICA1MDI4OTogJ0FVVE8gMTI1JyxcbiAgICA1MDI5MDogJ0hTIDMxMCcsXG4gICAgNTc3MTM6ICdQT0xTQyAxMTAnLFxuICAgIDU3NzE0OiAnQ0lUIDIzMCcsXG4gICAgNTgzNjk6ICdCSU8gMjY1TCcsXG4gICAgNTgzNzE6ICdDT01NIDI3MycsXG4gICAgNTgzNzI6ICdCSU8gMjY0TCcsXG4gICAgNTk2NTU6ICdIUyAyODAnLFxuICAgIDU5NjU2OiAnQ09NTSAxNzUnLFxuICAgIDU5NjU3OiAnQ0lUIDE2MCcsXG4gICAgNTk2NTg6ICdGREVORyAzMDEnLFxuICAgIDU5NjU5OiAnQ09NTSAxMjUnLFxuICAgIDYxMDY1OiAnRkRTQ0kgMjAzJyxcbiAgICA2MTM3MzogJ05VVFIgMTUwJyxcbiAgICA2MTM3NDogJ01BIDEwNicsXG4gICAgNjEzNzU6ICdIUyAyODUnLFxuICAgIDYxMzc2OiAnUFNZQ0ggMTEyJyxcbiAgICA2MTM3NzogJ0NJVCAxMTAnLFxuICAgIDYxMzc4OiAnV0REIDEwMCcsXG4gICAgNjEzODA6ICdDSVQgMTExJyxcbiAgICA2MTM4MTogJ0NJVCAzMzYnLFxuICAgIDYxOTA4OiAnUFNZQ0ggMTExJyxcbiAgICA2MTkwOTogJ0VEIDMxMicsXG4gICAgNjE5MTA6ICdGRFNDSSAyMDUnLFxuICAgIDYxOTExOiAnQ0lUIDI0MCcsXG4gICAgNjE5MjA6ICdIUyAzOTEnLFxuICAgIDYxOTI4OiAnU09DIDExMScsXG4gICAgNjE5Mjk6ICdNQVRIIDIyMUEnLFxuICAgIDYyMjE2OiAnSFJIUCAxMzEnLFxuICAgIDYyMjE3OiAnTUFUSCAyMjFDJyxcbiAgICA2MjIxODogJ0NPTU0gMTMwJyxcbiAgICA2MjQ1MzogJ0NPTU0gMTAyJyxcbiAgICA2MjU4NjogJ01BVEggMjIxQicsXG4gICAgNjMxOTM6ICdCIDIyMCcsXG4gICAgNjMxOTQ6ICdDSVQgMjYwJyxcbiAgICA2MzE5NTogJ0hTIDMyMCcsXG4gICAgNjMxOTY6ICdIUyAzNzAnLFxuICAgIDYzNDE5OiAnQ0lUIDIyNScsXG4gICAgNjM1ODE6ICdGQU1MIDIyMCcsXG4gICAgNjM5MjE6ICdQU1lDSCAyMDEnLFxuICAgIDY3MTI2OiAnSFMgNDYwJyxcbiAgICA2NzEyNzogJ0JJTyAyMjEnLFxuICAgIDY3MTI4OiAnSFMgNDY1JyxcbiAgICA2NzEyOTogJ0NPTU0gMzEwJyxcbiAgICA2NzEzMDogJ0hTIDQwMScsXG4gICAgNjcxMzE6ICdIUyA0MjUnLFxuICAgIDY3MTMyOiAnQ0lUIDI0MScsXG4gICAgNjcxMzM6ICdQU1lDSCAzMDInLFxuICAgIDY3MTM0OiAnQ09NTSAxMTEnLFxuICAgIDY3MTM1OiAnUFNZQ0ggMzExJyxcbiAgICA2NzEzNjogJ1BPTFNDIDE1MCcsXG4gICAgNjcxMzg6ICdIUyAzNDUnLFxuICAgIDY3MTM5OiAnRUQgMjAyJyxcbiAgICA2NzE0MDogJ1JNIDMwNCcsXG4gICAgNzQ4Mzg6ICdDT01NIDMwNycsXG4gICAgODEyMjI6ICdDSElMRCAzMTAnLFxuICAgIDgxODA1OiAnQ0lUIDI2MScsXG4gICAgOTk0ODA6ICdIUyAyNDAnLFxuICAgIDk5NDgyOiAnQUdCVVMgMTM4JyxcbiAgICA5OTQ4MzogJ0JJTyAzNzUnLFxuICAgIDk5NDg0OiAnRkRSRUwgMTAwJyxcbiAgICA5OTQ4NTogJ1BPTFNDIDE3MCcsXG4gICAgOTk0ODY6ICdSTSAzMDcnLFxuICAgIDk5NDg3OiAnRU5HIDMyNScsXG4gICAgOTk0ODg6ICdDT01NIDM1MicsXG4gICAgOTk0ODk6ICdSTSA0NzEnLFxuICAgIDk5NTMwOiAnQklPIDI2NScsXG4gICAgMTAwODA2OiAnTUEgMTA3JyxcbiAgICAxMDA4MDc6ICdCSU8gMjY0JyxcbiAgICAxMDU2MTU6ICdUQSA0MDInLFxuICAgIDEwNTcwNjogJ0NJVCAyNjInLFxuICAgIDEwNjI3NzogJ0NJVCAzODEnLFxuICAgIDEwNjI3ODogJ01BIDEwNScsXG4gICAgMTA2Mjc5OiAnQ09NTSAxNTAnLFxuICAgIDEwNjI4MDogJ0NJVCAzMjUnLFxuICAgIDEwNjI4MTogJ0NJVCAzNTInLFxuICAgIDEwNjI4MjogJ0NPTU0gMjUwJyxcbiAgICAxMDYyODM6ICdSTSAzNzEnLFxuICAgIDEwNjI4NDogJ0NPTU0gMjg5JyxcbiAgICAxMDYyODU6ICdDT01NIDQ1MCcsXG4gICAgMTA2Mjg2OiAnUk0gMzcwJyxcbiAgICAxMDYyODc6ICdTT0MgMTEyJyxcbiAgICAxMDYyODg6ICdBR0JVUyAxODBBJyxcbiAgICAxMDYyOTA6ICdCSU8gNDc1JyxcbiAgICAxMDYyOTE6ICdCSU8gMzgxJyxcbiAgICAxMDYyOTI6ICdIUyAzNzUnLFxuICAgIDEwNjI5MzogJ1JNIDM3M1InLFxuICAgIDEwNjI5NDogJ1JNIDQ3MicsXG4gICAgMTA2Mjk1OiAnTUEgMjA1JyxcbiAgICAxMDYyOTY6ICdIUyA0MjAnLFxuICAgIDEwNjI5NzogJ0hTIDM3OCcsXG4gICAgMTA2Mjk4OiAnRU5HIDM1NScsXG4gICAgMTA2MzAwOiAnTUEgMTExJyxcbiAgICAxMDYzMDE6ICdFTkcgMzM1JyxcbiAgICAxMDYzMDM6ICdvb3BzJyxcbiAgICAxMDY5ODk6ICdFTkcgMjUxJyxcbiAgICAxMDgxMzM6ICdCIDEwMScsXG4gICAgMTA4MTM0OiAnRkFNTCAxMDAnLFxuICAgIDEwODEzNTogJ0ZBTUwgMjIwJyxcbiAgICAxMDgxMzY6ICdGREVORyAzMDEnLFxuICAgIDEwODEzNzogJ0ZEUkVMIDEyMScsXG4gICAgMTA4MTM4OiAnRkRSRUwgMTIyJyxcbiAgICAxMDgxMzk6ICdGRFNDSSAyMDMnLFxuICAgIDEwODE0MDogJ0VORyAzMzInLFxuICAgIDEwODE0MjogJ0NJVCAxMTAnLFxuICAgIDEwODE0MzogJ0ZESFVNIDExMCcsXG4gICAgMTA4MTQ0OiAnRkRTQ0kgMjAxJyxcbiAgICAxMDg1OTk6ICdUQSAxMTYnLFxuICAgIDEwOTYzMzogJ0ZEU0NJIDEwMScsXG4gICAgMTA5NjQxOiAnRU5HIDMxNCdcbn07XG4iLCIoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZ25JbigpIHtcclxuICAgICAgICBpZiAoIWZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3BsdXMubG9naW4nKTtcclxuICAgICAgICAgICAgcHJvdmlkZXIuYWRkU2NvcGUoJ3Byb2ZpbGUnKTtcclxuICAgICAgICAgICAgcHJvdmlkZXIuYWRkU2NvcGUoJ2VtYWlsJyk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnTWFuYWdlbWVudEF1dGhPJyk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja3N0YXJ0LXNpZ24taW4nKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Um9sZSh1aWQsIGZ1bmMpIHtcclxuICAgICAgICBkYXRhYmFzZS5yZWYoXCJ1c2Vyc1wiKS5vbmNlKFwidmFsdWVcIiwgZnVuY3Rpb24gKHNuYXApIHtcclxuICAgICAgICAgICAgc25hcC5mb3JFYWNoKGZ1bmN0aW9uIChjc25hcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNzbmFwLmtleSA9PT0gdWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjc25hcC52YWwoKS5yb2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmNyZWRlbnRpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gcmVzdWx0LmNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIG51bGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA9IGVycm9yLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3JDb2RlID09PSAnYXV0aC9hY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsJykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIGFscmVhZHkgc2lnbmVkIHVwIHdpdGggYSBkaWZmZXJlbnQgYXV0aCBwcm92aWRlciBmb3IgdGhhdCBlbWFpbC4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhdXRoTyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiB1c2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB1c2VyLnVpZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja3N0YXJ0LXNpZ24taW4nKS50ZXh0Q29udGVudCA9ICdTaWduIG91dCc7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YWJhc2UucmVmKGB1c2Vycy8ke2F1dGhPLnVpZH1gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBhdXRoTy5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogYXV0aE8uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogYXV0aE8uZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICBwaG90b1VSTDogYXV0aE8ucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBhdXRoTy51aWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRSb2xlKGF1dGhPLnVpZCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2UucmVmKGB1c2Vycy8ke2F1dGhPLnVpZH1gKS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlW1wiTWFuYWdlbWVudEF1dGhPXCJdID0gSlNPTi5zdHJpbmdpZnkoYXV0aE8pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja3N0YXJ0LXNpZ24taW4nKS50ZXh0Q29udGVudCA9ICdTaWduIGluIHdpdGggR29vZ2xlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tzdGFydC1zaWduLWluJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tzdGFydC1zaWduLWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWduSW4sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGluaXRBcHAoKTtcclxuICAgIH1cclxuXHJcbn0oKSlcclxuIiwiLypcbmRhdGFiYXNlIGlzIGEgZ2xvYmFsIHZhcmlhYmxlXG4qL1xuKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBsb2FkZWRVc2VycyA9IFtdO1xuXG4gICAgLypcbiAgICBFdmVudHMgdG8gaGFuZGxlIG1vZGFsc1xuICAgICovXG4gICAgJChcImFcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGNsYXNzSUQgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgICAgICQoYCMke2NsYXNzSUR9YCkuY3NzKHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICAgICAgfSlcbiAgICAgICAgJChgI3NoYWRlYCkuY3NzKHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgICAgICAgfSlcbiAgICAgICAgJChgI25hbWVQb3B1cGApLmNzcyh7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAkKFwiLmNhbmNlbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgJChwYXJlbnQpLmNzcyh7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgICAgIH0pXG4gICAgICAgICQoJyNzaGFkZScpLmNzcyh7XG4gICAgICAgICAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgICAgIH0pXG4gICAgICAgICQoYCNuYW1lUG9wdXBgKS5jc3Moe1xuICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAkKFwiI2Fzc2lnblwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIHZhciBpbnB1dEFzc2lnbiA9ICQoXCJbZGF0YS1jb3Vyc2VpZF0gPiBpbnB1dFwiKSxcbiAgICAgICAgICAgIGNvdXJzZUlEID0gJChcIltkYXRhLWNvdXJzZWlkXVwiKSxcbiAgICAgICAgICAgIHVzZXJOYW1lLFxuICAgICAgICAgICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtcIk1hbmFnZW1lbnRBdXRoT1wiXSk7XG5cbiAgICAgICAgJC5lYWNoKGNvdXJzZUlELCBmdW5jdGlvbiAoaSwgdmEpIHtcbiAgICAgICAgICAgIHZhciB1c2VyTmFtZSA9IGlucHV0QXNzaWduW2ldLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodXNlck5hbWUgPT09IHVzZXJEYXRhLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdXJzZUlEID0gJCh2YSkuYXR0cihcImRhdGEtY291cnNlaWRcIik7XG5cbiAgICAgICAgICAgICAgICBkYXRhYmFzZS5yZWYoYE1hcmsncyBUb29sLyR7Y291cnNlSUR9YCkudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlcjogdXNlckRhdGEudWlkXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0QXNzaWduW2ldLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSlcblxuICAgIH0pO1xuXG4gICAgZGF0YWJhc2UucmVmKFwidXNlcnNcIikub25jZShcInZhbHVlXCIsIGZ1bmN0aW9uIChzbmFwKSB7XG4gICAgICAgIHNuYXAuZm9yRWFjaChmdW5jdGlvbiAoY3NuYXApIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gY3NuYXAudmFsKCkuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICBsb2FkZWRVc2Vycy5wdXNoKG5hbWUpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdXNlclNlbGVjdCgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gJChcIjxpbnB1dD48L2lucHV0PlwiKTtcblxuICAgICAgICBpbnB1dC5rZXl1cChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJChcIiN1c2VyTmFtZXNcIikuaHRtbChcIlwiKTtcblxuICAgICAgICAgICAgdmFyIGlucHV0VmFsID0gZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbnB1dCA9IGUudGFyZ2V0XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9hZGVkVXNlcnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChsb2FkZWRVc2Vyc1tpXS5pbmNsdWRlcyhpbnB1dFZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmEgPSAkKGA8cD4ke2xvYWRlZFVzZXJzW2ldfTwvcD5gKTtcblxuICAgICAgICAgICAgICAgICAgICBwYXJhLmF0dHIoXCJpZFwiLCBcImVtcE5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2VsZWN0ZWRJbnB1dCkudmFsKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdXNlck5hbWVzXCIpLmFwcGVuZChwYXJhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY2hlY2tvdXQoZSkge1xuICAgICAgICB2YXIgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldCxcbiAgICAgICAgICAgIGNvdXJzZUlEID0gJChjbGlja2VkRWxlbWVudCkuYXR0cihcImRhdGEtY291cnNlaWRcIik7XG5cbiAgICAgICAgZGF0YWJhc2UucmVmKGBNYXJrJ3MgVG9vbC8ke2NvdXJzZUlEfWApLnVwZGF0ZSh7XG4gICAgICAgICAgICBjaGVja2VyOiBcIlwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgJChlLnRhcmdldCkuY3NzKHtcbiAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcIm5vbmVcIixcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKlxuICAgIFJ1bnMgdGhlIGRhdGEgZm9yIHRoZSBjaGVja2VkIE1vZGFsXG4gICAgKi9cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUNoZWNrKGNkLCBjbiwgdGFyKSB7XG4gICAgICAgIHZhciBwb3B1bGF0ZSA9ICQoYCMke3Rhcn1gKSxcbiAgICAgICAgICAgIGNvdXJzZU5hbWUgPSAkKGA8bGFiZWwgZGF0YS1jb3Vyc2VJRD1cIiR7Y259XCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7Y2RbJ0xpbmsnXX1cIj4ke2NvcnJEYXRhW2NuXX08L2E+PC9sYWJlbD5gKSxcbiAgICAgICAgICAgIGlucHV0O1xuXG4gICAgICAgIGlmIChjZC5jaGVja2VyICE9PSBcIlwiICYmIHRhciA9PT0gXCJjaGVja2VkT3V0XCIpIHtcbiAgICAgICAgICAgIGRhdGFiYXNlLnJlZihgdXNlcnMvJHtjZC5jaGVja2VyfWApLm9uY2UoXCJ2YWx1ZVwiLCBmdW5jdGlvbiAoc25hcCkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHNuYXAudmFsKCkuZGlzcGxheU5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY291cnNlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChgPHA+JHtkaXNwbGF5TmFtZX08L3A+YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCIgJnRpbWVzO1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xpY2sodW5jaGVja291dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhciA9PT0gXCJ1bmFzc2lnbmVkXCIpIHtcbiAgICAgICAgICAgIGlucHV0ID0gdXNlclNlbGVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY291cnNlTmFtZS5hcHBlbmQoaW5wdXQpO1xuXG4gICAgICAgIHBvcHVsYXRlLmFwcGVuZChjb3Vyc2VOYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja2VkKCkge1xuXG4gICAgICAgIGRhdGFiYXNlLnJlZihcIk1hcmsncyBUb29sXCIpLm9uKFwidmFsdWVcIiwgZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgICAgICAgIHNuYXAuZm9yRWFjaChmdW5jdGlvbiAoY3NuYXApIHtcbiAgICAgICAgICAgICAgICB2YXIgY291cnNlRGF0YSA9IGNzbmFwLnZhbCgpLFxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2VOYW1lID0gY3NuYXAua2V5LFxuICAgICAgICAgICAgICAgICAgICBub3RoaW5nID0gXCJUaGVyZSBpcyBub3RoaW5nIGhlcmUhXCI7XG5cbiAgICAgICAgICAgICAgICBpZiAoY291cnNlRGF0YVtcIkNvbnRlbnQgUGFnZXNcIl0gIT09IG5vdGhpbmcgfHwgY291cnNlRGF0YVtcIlF1aXp6ZXNcIl0gIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgIWNvdXJzZURhdGEuY2hlY2tlciA/IHBvcHVsYXRlQ2hlY2soY291cnNlRGF0YSwgY291cnNlTmFtZSwgXCJ1bmFzc2lnbmVkXCIpIDogcG9wdWxhdGVDaGVjayhjb3Vyc2VEYXRhLCBjb3Vyc2VOYW1lLCBcImNoZWNrZWRPdXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qXG4gICAgUnVucyB0aGUgZGF0YSBmb3IgdGhlIGZpbmlzaGVkIG1vZGFsXG4gICAgKi9cbiAgICBmdW5jdGlvbiBmaW5pc2hlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZFwiKTtcbiAgICB9XG5cbiAgICAvKlxuICAgIFJldHJpZXZlIHRoZSBkYXRhIGZvciBhbW91bnQgb2YgZGF0YSBzYXZlZCBpbiBFcXVlbGxhXG4gICAgKi9cbiAgICBmdW5jdGlvbiBkYXRhU2F2ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVNhdmVkXCIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgUmV0cmlldmUgdGhlIGRhdGEgZm9yIGFtb3VudCBvZiB0aW1lIHNwZW50XG4gICAgKi9cbiAgICBmdW5jdGlvbiB0aW1lU3BlbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGltZVNwZW50XCIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgRGV0ZXJtaW5lIHRoYXQgdGhlIGxvY2F0aW9uIGlzIHRoZSBhZG1pbiBwYWdlIGFuZCBsb2FkXG4gICAgYWxsIG9mIHRoZSBkYXRhIHdpdGggdGhlIGFkbWluaXN0cmF0b3Igcm9sZS5cbiAgICAqL1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImFkbWluXCIpKSB7XG4gICAgICAgIGNoZWNrZWQoKTtcbiAgICAgICAgZmluaXNoZWQoKTtcbiAgICAgICAgZGF0YVNhdmVkKCk7XG4gICAgICAgIHRpbWVTcGVudCgpO1xuICAgICAgICB1c2VyU2VsZWN0KCk7XG4gICAgfVxuXG59KCkpOyIsIihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnTWFuYWdlbWVudEF1dGhPJ10pIHx8IFwiXCIsXG4gICAgICAgIHJvbGUsXG4gICAgICAgIG5hdiA9ICQoXCJuYXZcIiksXG4gICAgICAgIGhvbWVCdXR0b24gPSAkKFwiPGJ1dHRvbj5Ib21lPC9idXR0b24+XCIpLFxuICAgICAgICBhZG1pbkJ1dHRvbjtcblxuICAgIGhvbWVCdXR0b24uY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHJvb3QgPSBsb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIGxvY2F0aW9uLmFzc2lnbihgJHtyb290fS9pbmRleC5odG1sYCk7XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kKGhvbWVCdXR0b24pO1xuXG4gICAgZGF0YWJhc2UucmVmKGB1c2Vycy8ke2F1dGhEYXRhLnVpZH1gKS5vbmNlKFwidmFsdWVcIiwgZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgICAgcm9sZSA9IHNuYXAudmFsKCkucm9sZSxcbiAgICAgICAgYWRtaW5CdXR0b24gPSAkKFwiPGJ1dHRvbj5BZG1pbjwvYnV0dG9uPlwiKTtcblxuICAgICAgICBpZiAocm9sZSA+PSA4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgbG9nZ2VkIGluIGlzIEFkbWluaXN0cmF0b3JcIik7XG5cbiAgICAgICAgICAgIGFkbWluQnV0dG9uLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaVwiKVxuXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2UgPSBlLnRhcmdldC5pbm5lclRleHQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcm9vdCA9IGxvY2F0aW9uLm9yaWdpbjtcblxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmFzc2lnbihgJHtyb290fS8ke3BhZ2V9Lmh0bWxgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuYXYuYXBwZW5kKGFkbWluQnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
