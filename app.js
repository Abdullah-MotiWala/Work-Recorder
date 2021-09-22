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
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";
        })
        .catch(err => alert(err));
}


const manualSignIn = () => {
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("userName").value = "";
            document.getElementById("password").value = "";
        })
        .catch(err => alert(err));
}


// auth.onAuthStateChanged((user) => {
//     if (user) {
//         location.replace("customer.html")
//     }
// })