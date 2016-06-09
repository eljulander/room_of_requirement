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

    var displayName,
        email,
        emailVerified,
        photoURL,
        isAnonymous,
        uid,
        refreshToken,
        providerData;

    function initApp() {
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;

                console.log(token);
            } else {
                console.log('token null');
            }
            var user = result.user;
        }).catch(function (error) {
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
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                displayName = user.displayName;
                email = user.email;
                emailVerified = user.emailVerified;
                photoURL = user.photoURL;
                isAnonymous = user.isAnonymous;
                uid = user.uid;
                refreshToken = user.refreshToken;
                providerData = user.providerData;

                document.getElementById('quickstart-sign-in').textContent = 'Sign out';
                database.ref(`users/${uid}`).update({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    photoURL: photoURL,
                    isAnonymous: isAnonymous,
                    uid: uid,
                    refreshToken: refreshToken,
                    providerData: providerData
                });
            } else {
                document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
            }
            document.getElementById('quickstart-sign-in').disabled = false;
        });
        document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    }
