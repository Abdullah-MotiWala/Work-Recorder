auth.onAuthStateChanged((user) => {
    if (!user) {
        location.replace("/")
    }
    else{
        userName = user.email;
    }
})
const addToDrive = () =>{
    let companyName = prompt("Name your company");
    firestore.collection("users").doc(userName).collection("companies").doc(companyName).set({
        admin : userName
    })
    .then(()=>alert("Company registered"))
}

const callData = () =>{

}
const addCompany = () =>{
addToDrive();
callData()
}
const signOut = () =>{
    auth.signOut();
}