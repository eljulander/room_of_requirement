"use strict";var config={apiKey:"AIzaSyCBNNxQ8ewVWXxMUFYXmGAGTv0IQ3ejje0",authDomain:"room-of-requirement.firebaseapp.com",databaseURL:"https://room-of-requirement.firebaseio.com",storageBucket:"firebase-room-of-requirement.appspot.com"};firebase.initializeApp(config);var database=firebase.database(),provider=new firebase.auth.GoogleAuthProvider;
"use strict";function toggleSignIn(){if(firebase.auth().currentUser)firebase.auth().signOut();else{var t=new firebase.auth.GoogleAuthProvider;t.addScope("https://www.googleapis.com/auth/plus.login"),firebase.auth().signInWithRedirect(t)}document.getElementById("quickstart-sign-in").disabled=!0}function initApp(){firebase.auth().getRedirectResult().then(function(t){if(t.credential){var e=t.credential.accessToken;document.getElementById("quickstart-oauthtoken").textContent=e}else document.getElementById("quickstart-oauthtoken").textContent="null";t.user})["catch"](function(t){var e=t.code;t.message,t.email,t.credential;"auth/account-exists-with-different-credential"===e?alert("You have already signed up with a different auth provider for that email."):console.error(t)}),firebase.auth().onAuthStateChanged(function(t){if(t){var e=t.displayName,n=t.email,i=t.emailVerified,a=t.photoURL,o=t.isAnonymous,u=t.uid,s=t.refreshToken,d=t.providerData;document.getElementById("quickstart-sign-in-status").textContent="Signed in",document.getElementById("quickstart-sign-in").textContent="Sign out",document.getElementById("quickstart-account-details").textContent=JSON.stringify({displayName:e,email:n,emailVerified:i,photoURL:a,isAnonymous:o,uid:u,refreshToken:s,providerData:d},null,"  ")}else document.getElementById("quickstart-sign-in-status").textContent="Signed out",document.getElementById("quickstart-sign-in").textContent="Sign in with Google",document.getElementById("quickstart-account-details").textContent="null",document.getElementById("quickstart-oauthtoken").textContent="null";document.getElementById("quickstart-sign-in").disabled=!1}),document.getElementById("quickstart-sign-in").addEventListener("click",toggleSignIn,!1)}window.onload=function(){initApp()};
"use strict";function toggleSignIn(){if(firebase.auth().currentUser)firebase.auth().signOut();else{var t=new firebase.auth.GoogleAuthProvider;t.addScope("https://www.googleapis.com/auth/plus.login"),firebase.auth().signInWithRedirect(t)}document.getElementById("quickstart-sign-in").disabled=!0}function initApp(){firebase.auth().getRedirectResult().then(function(t){if(t.credential){var e=t.credential.accessToken;document.getElementById("quickstart-oauthtoken").textContent=e}else document.getElementById("quickstart-oauthtoken").textContent="null";t.user})["catch"](function(t){var e=t.code;t.message,t.email,t.credential,"auth/account-exists-with-different-credential"===e?alert("You have already signed up with a different auth provider for that email."):console.error(t)}),firebase.auth().onAuthStateChanged(function(t){if(t){var e=t.displayName,n=t.email,i=t.emailVerified,a=t.photoURL,o=t.isAnonymous,u=t.uid,s=t.refreshToken,d=t.providerData;document.getElementById("quickstart-sign-in-status").textContent="Signed in",document.getElementById("quickstart-sign-in").textContent="Sign out",document.getElementById("quickstart-account-details").textContent=JSON.stringify({displayName:e,email:n,emailVerified:i,photoURL:a,isAnonymous:o,uid:u,refreshToken:s,providerData:d},null,"  ")}else document.getElementById("quickstart-sign-in-status").textContent="Signed out",document.getElementById("quickstart-sign-in").textContent="Sign in with Google",document.getElementById("quickstart-account-details").textContent="null",document.getElementById("quickstart-oauthtoken").textContent="null";document.getElementById("quickstart-sign-in").disabled=!1}),document.getElementById("quickstart-sign-in").addEventListener("click",toggleSignIn,!1)}window.onload=function(){initApp()};
"use strict";database.ref("courses").on("value",function(e){console.log(e.val())});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImxvZ2luLmpzIiwibG9naW4ubWluLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJzdG9yYWdlQnVja2V0IiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZGF0YWJhc2UiLCJwcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJ0b2dnbGVTaWduSW4iLCJjdXJyZW50VXNlciIsInNpZ25PdXQiLCJhZGRTY29wZSIsInNpZ25JbldpdGhSZWRpcmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsImluaXRBcHAiLCJnZXRSZWRpcmVjdFJlc3VsdCIsInRoZW4iLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInRleHRDb250ZW50IiwidXNlciIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImFsZXJ0IiwiY29uc29sZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRpc3BsYXlOYW1lIiwiZW1haWxWZXJpZmllZCIsInBob3RvVVJMIiwiaXNBbm9ueW1vdXMiLCJ1aWQiLCJyZWZyZXNoVG9rZW4iLCJwcm92aWRlckRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIm9ubG9hZCIsImUiLCJ0IiwibiIsImkiLCJhIiwibyIsInIiLCJzIiwidSIsInJlZiIsIm9uIiwic25hcCIsImxvZyIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQSxJQUFJQSxTQUNBQyxPQUFRLDBDQUNSQyxXQUFZLHNDQUNaQyxZQUFhLDZDQUNiQyxjQUFlLDJDQUVuQkMsVUFBU0MsY0FBY04sT0FFdkIsSUFBSU8sVUFBV0YsU0FBU0UsV0FDcEJDLFNBQVcsR0FBSUgsVUFBU0ksS0FBS0M7QUNUakMsWUFBSSxTQUFTQyxnQkFD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QUFTQyxlQUFlLDZCQUE2QlMsWUFBWSxZQUFZVixTQUFTQyxlQUFlLHNCQUFzQlMsWUFBWSxXQUFXVixTQUFTQyxlQUFlLDhCQUE4QlMsWUFBWWlCLEtBQUtDLFdBQVdSLFlBQVlhLEVBQUVqQixNQUFNa0IsRUFBRWIsY0FBY2MsRUFBRWIsU0FBU2MsRUFBRWIsWUFBWWMsRUFBRWIsSUFBSWMsRUFBRWIsYUFBYWMsRUFBRWIsYUFBYWMsR0FBRyxLQUFLLFVBQVd4QyxVQUFTQyxlQUFlLDZCQUE2QlMsWUFBWSxhQUFhVixTQUFTQyxlQUFlLHNCQUFzQlMsWUFBWSxzQkFBc0JWLFNBQVNDLGVBQWUsOEJBQThCUyxZQUFZLE9BQU9WLFNBQVNDLGVBQWUseUJBQXlCUyxZQUFZLE1BQU9WLFVBQVNDLGVBQWUsc0JBQXNCQyxVQUFTLElBQUtGLFNBQVNDLGVBQWUsc0JBQXNCNEIsaUJBQWlCLFFBQVFsQyxjQUFhLEdBQUltQyxPQUFPQyxPQUFPLFdBQVc1QjtBQ0ExdEQsWUFBQVosVUFBU2tELElBQUksV0FBV0MsR0FBRyxRQUFTLFNBQVNDLEdBQ3pDekIsUUFBUTBCLElBQUlELEVBQUtFIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUNCTk54UThld1ZXWHhNVUZZWG1HQUdUdjBJUTNlamplMFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJyb29tLW9mLXJlcXVpcmVtZW50LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9yb29tLW9mLXJlcXVpcmVtZW50LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcImZpcmViYXNlLXJvb20tb2YtcmVxdWlyZW1lbnQuYXBwc3BvdC5jb21cIixcclxuICB9O1xyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcblxyXG52YXIgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG52YXIgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuIiwiICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZ25JbigpIHtcbiAgICAgIGlmICghZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuXG4gICAgICAgIHByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3BsdXMubG9naW4nKTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcik7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tzdGFydC1zaWduLWluJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRBcHAoKSB7XG5cbiAgICAgIGZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuY3JlZGVudGlhbCkge1xuICAgICAgICAgIC8vIFRoaXMgZ2l2ZXMgeW91IGEgR29vZ2xlIEFjY2VzcyBUb2tlbi4gWW91IGNhbiB1c2UgaXQgdG8gYWNjZXNzIHRoZSBHb29nbGUgQVBJLlxuICAgICAgICAgIHZhciB0b2tlbiA9IHJlc3VsdC5jcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtb2F1dGh0b2tlbicpLnRleHRDb250ZW50ID0gdG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtb2F1dGh0b2tlbicpLnRleHRDb250ZW50ID0gJ251bGwnO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1c2VyID0gcmVzdWx0LnVzZXI7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIHZhciBlbWFpbCA9IGVycm9yLmVtYWlsO1xuICAgICAgICB2YXIgY3JlZGVudGlhbCA9IGVycm9yLmNyZWRlbnRpYWw7XG4gICAgICAgIGlmIChlcnJvckNvZGUgPT09ICdhdXRoL2FjY291bnQtZXhpc3RzLXdpdGgtZGlmZmVyZW50LWNyZWRlbnRpYWwnKSB7XG4gICAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIGFscmVhZHkgc2lnbmVkIHVwIHdpdGggYSBkaWZmZXJlbnQgYXV0aCBwcm92aWRlciBmb3IgdGhhdCBlbWFpbC4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICBlbWFpbCA9IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQgPSB1c2VyLmVtYWlsVmVyaWZpZWQsXG4gICAgICAgICAgICAgIHBob3RvVVJMID0gdXNlci5waG90b1VSTCxcbiAgICAgICAgICAgICAgaXNBbm9ueW1vdXMgPSB1c2VyLmlzQW5vbnltb3VzLFxuICAgICAgICAgICAgICB1aWQgPSB1c2VyLnVpZCxcbiAgICAgICAgICAgICAgcmVmcmVzaFRva2VuID0gdXNlci5yZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICAgIHByb3ZpZGVyRGF0YSA9IHVzZXIucHJvdmlkZXJEYXRhO1xuXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtc2lnbi1pbi1zdGF0dXMnKS50ZXh0Q29udGVudCA9ICdTaWduZWQgaW4nO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja3N0YXJ0LXNpZ24taW4nKS50ZXh0Q29udGVudCA9ICdTaWduIG91dCc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtYWNjb3VudC1kZXRhaWxzJykudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBlbWFpbFZlcmlmaWVkLFxuICAgICAgICAgICAgcGhvdG9VUkw6IHBob3RvVVJMLFxuICAgICAgICAgICAgaXNBbm9ueW1vdXM6IGlzQW5vbnltb3VzLFxuICAgICAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgICAgIHByb3ZpZGVyRGF0YTogcHJvdmlkZXJEYXRhXG4gICAgICAgICAgfSwgbnVsbCwgJyAgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtc2lnbi1pbi1zdGF0dXMnKS50ZXh0Q29udGVudCA9ICdTaWduZWQgb3V0JztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tzdGFydC1zaWduLWluJykudGV4dENvbnRlbnQgPSAnU2lnbiBpbiB3aXRoIEdvb2dsZSc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtYWNjb3VudC1kZXRhaWxzJykudGV4dENvbnRlbnQgPSAnbnVsbCc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrc3RhcnQtb2F1dGh0b2tlbicpLnRleHRDb250ZW50ID0gJ251bGwnO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWlja3N0YXJ0LXNpZ24taW4nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2tzdGFydC1zaWduLWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaWduSW4sIGZhbHNlKTtcbiAgICB9XG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaW5pdEFwcCgpO1xuICAgIH07XG4iLCJmdW5jdGlvbiB0b2dnbGVTaWduSW4oKXtpZihmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIpZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKTtlbHNle3ZhciBlPW5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcjtlLmFkZFNjb3BlKFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9wbHVzLmxvZ2luXCIpLGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QoZSl9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWlja3N0YXJ0LXNpZ24taW5cIikuZGlzYWJsZWQ9ITB9ZnVuY3Rpb24gaW5pdEFwcCgpe2ZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24oZSl7aWYoZS5jcmVkZW50aWFsKXt2YXIgdD1lLmNyZWRlbnRpYWwuYWNjZXNzVG9rZW47ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWlja3N0YXJ0LW9hdXRodG9rZW5cIikudGV4dENvbnRlbnQ9dH1lbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpY2tzdGFydC1vYXV0aHRva2VuXCIpLnRleHRDb250ZW50PVwibnVsbFwiO2UudXNlcn0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb2RlO2UubWVzc2FnZSxlLmVtYWlsLGUuY3JlZGVudGlhbDtcImF1dGgvYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbFwiPT09dD9hbGVydChcIllvdSBoYXZlIGFscmVhZHkgc2lnbmVkIHVwIHdpdGggYSBkaWZmZXJlbnQgYXV0aCBwcm92aWRlciBmb3IgdGhhdCBlbWFpbC5cIik6Y29uc29sZS5lcnJvcihlKX0pLGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24oZSl7aWYoZSl7dmFyIHQ9ZS5kaXNwbGF5TmFtZSxuPWUuZW1haWwsaT1lLmVtYWlsVmVyaWZpZWQsYT1lLnBob3RvVVJMLG89ZS5pc0Fub255bW91cyxyPWUudWlkLHM9ZS5yZWZyZXNoVG9rZW4sdT1lLnByb3ZpZGVyRGF0YTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aWNrc3RhcnQtc2lnbi1pbi1zdGF0dXNcIikudGV4dENvbnRlbnQ9XCJTaWduZWQgaW5cIixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aWNrc3RhcnQtc2lnbi1pblwiKS50ZXh0Q29udGVudD1cIlNpZ24gb3V0XCIsZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWlja3N0YXJ0LWFjY291bnQtZGV0YWlsc1wiKS50ZXh0Q29udGVudD1KU09OLnN0cmluZ2lmeSh7ZGlzcGxheU5hbWU6dCxlbWFpbDpuLGVtYWlsVmVyaWZpZWQ6aSxwaG90b1VSTDphLGlzQW5vbnltb3VzOm8sdWlkOnIscmVmcmVzaFRva2VuOnMscHJvdmlkZXJEYXRhOnV9LG51bGwsXCIgIFwiKX1lbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpY2tzdGFydC1zaWduLWluLXN0YXR1c1wiKS50ZXh0Q29udGVudD1cIlNpZ25lZCBvdXRcIixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aWNrc3RhcnQtc2lnbi1pblwiKS50ZXh0Q29udGVudD1cIlNpZ24gaW4gd2l0aCBHb29nbGVcIixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aWNrc3RhcnQtYWNjb3VudC1kZXRhaWxzXCIpLnRleHRDb250ZW50PVwibnVsbFwiLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpY2tzdGFydC1vYXV0aHRva2VuXCIpLnRleHRDb250ZW50PVwibnVsbFwiO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpY2tzdGFydC1zaWduLWluXCIpLmRpc2FibGVkPSExfSksZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWlja3N0YXJ0LXNpZ24taW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdG9nZ2xlU2lnbkluLCExKX13aW5kb3cub25sb2FkPWZ1bmN0aW9uKCl7aW5pdEFwcCgpfTtcbiIsImRhdGFiYXNlLnJlZihcImNvdXJzZXNcIikub24oXCJ2YWx1ZVwiLCBmdW5jdGlvbihzbmFwKSB7XG4gICAgY29uc29sZS5sb2coc25hcC52YWwoKSk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
