//Setup (enable) sign-in methods on the website console first
const googleProvider = new firebase.auth.GoogleAuthProvider();


signUpFormRef.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signUpFormRef.email.value;
    const password = signUpFormRef.password.value;
    signUpEmailPassword(email, password);
    resetForms();
});

signInFormRef.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInFormRef.email.value;
    const password = signInFormRef.password.value;
    signInEmailPassword(email, password);
    resetForms();
});

signInGoogleButton.addEventListener('click', function(){
    signInGoogle();
    resetForms();
});

signOutButton.addEventListener('click', function(){
    signOut();
    resetForms();
});

function resetForms(){
    signUpFormRef.reset();
    signInFormRef.reset();
};

function signOut() {
    authRef.signOut()
        .then(user => {
            console.log("Logged out!");
            console.log(user);
        })
        .catch(function (error) {
            console.log("Could not log out!");
            console.log(error.code);
            console.log(error.message);
        }
    );
}

function signInEmailPassword(email,password) {
    authRef.signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log("Sign in successfully!");
            console.log(user);
        })
        .catch(function (error) {
            console.log("Sign in unsuccessfully!");
            console.log(error.code);
            console.log(error.message);
        }
    );
}

function signInGoogle() {
    authRef.signInWithPopup(googleProvider)
        .then(result => {
            console.log("Sign in successfully!");
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(token)
            console.log(user)
        })
        .catch(function (error) {
            console.log("Sign in unsuccessfully!");
            console.log(error.code);
            console.log(error.message);
        }
    );
}

 //email and password
function signUpEmailPassword(email, password) {
    authRef.createUserWithEmailAndPassword(email, password)
        .then(user => {
            console.log("Sign up successfully!");
            console.log(user);
        })
        .catch(function (error) {
            console.log("Sign up unsuccessfully!");
            console.log(error.code);
            console.log(error.message);
        }
    );
};
