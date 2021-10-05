auth.onAuthStateChanged((user) => {
    if (user) {
        userName = user.email;
        changeType();
        // callData();
    }
    else {
        location.replace("/")
    }
})



const signOut = () => {
    auth.signOut();
}