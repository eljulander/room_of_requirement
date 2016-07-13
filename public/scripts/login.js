(function () {

    function toggleSignIn() {
        if (!firebase.auth().currentUser) {
            var provider = new firebase.auth.GoogleAuthProvider();

            provider.addScope('https://www.googleapis.com/auth/plus.login');
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().signInWithRedirect(provider);

        } else {
            firebase.auth().signOut();
        }
        document.getElementById('quickstart-sign-in').disabled = true;
    }

    function initApp() {
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
            } else {
                console.log('token null');
            }
            var user = result.user;
        }).catch(function (error) {
            var errorCode = error.code,
                errorMessage = error.message,
                email = error.email,
                credential = error.credential;

            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
            } else {
                console.error(error);
            }
        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var authO = {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    uid: user.uid
                }

                document.getElementById('quickstart-sign-in').textContent = 'Sign out';
                database.ref(`users/${authO.uid}`).update({
                    displayName: authO.displayName,
                    email: authO.email,
                    emailVerified: authO.emailVerified,
                    photoURL: authO.photoURL,
                    uid: authO.uid,
                });

                localStorage["ManagementAuthO"] = JSON.stringify(authO);

            } else {
                document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
            }
            document.getElementById('quickstart-sign-in').disabled = false;
        });
        document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    }

    initApp();

}())
