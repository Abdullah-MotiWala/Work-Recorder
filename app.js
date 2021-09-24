//Jquery For Bootstrap Form
function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(() => {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

// Firebase Authentication
function refSignIn(btn) {
    let provider;
    switch (btn) {
        case "google":
            provider = new firebase.auth.GoogleAuthProvider();
            break;
        case "facebook":
            provider = new firebase.auth.FacebookAuthProvider()
    }
    auth.signInWithPopup(provider).catch(res => alert(res))
};


const manualSignUp = () => {
    userName = document.getElementById("user-name").value
    let email = document.getElementById("user-email").value;
    let password = document.getElementById("user-pass").value;
    console.log(password)
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";
        })
        .catch(err => alert(err));
}


const manualSignIn = () => {
    let signInEmail = document.getElementById("inputEmail").value;
    let signInPassword = document.getElementById("inputPassword").value;
    auth.signInWithEmailAndPassword(signInEmail, signInPassword)
        .then(() => {
            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";
        })
        .catch(err => alert(err));
}


auth.onAuthStateChanged((user) => {
    if (user) {
        location.replace("./createTeam/createTeam.html")
    }
})