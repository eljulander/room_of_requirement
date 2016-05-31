    function toggleSignIn() {
      if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithRedirect(provider);

      } else {
        firebase.auth().signOut();
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }

    function initApp() {

      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;

          document.getElementById('quickstart-oauthtoken').textContent = token;
        } else {
          document.getElementById('quickstart-oauthtoken').textContent = 'null';
        }
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
        } else {
          console.error(error);
        }
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var displayName = user.displayName,
              email = user.email,
              emailVerified = user.emailVerified,
              photoURL = user.photoURL,
              isAnonymous = user.isAnonymous,
              uid = user.uid,
              refreshToken = user.refreshToken,
              providerData = user.providerData;

          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            photoURL: photoURL,
            isAnonymous: isAnonymous,
            uid: uid,
            refreshToken: refreshToken,
            providerData: providerData
          }, null, '  ');
        } else {
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
          document.getElementById('quickstart-account-details').textContent = 'null';
          document.getElementById('quickstart-oauthtoken').textContent = 'null';
        }
        document.getElementById('quickstart-sign-in').disabled = false;
      });
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    }
    window.onload = function() {
      initApp();
    };
