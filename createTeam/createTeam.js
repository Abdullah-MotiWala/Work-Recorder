auth.onAuthStateChanged((user) => {
    if (user) {
        userName = user.email;
        callData()
    }
    else {
        location.replace("/")
    }
})
const bodyDiv = document.querySelector(".yourCompany");

const addToDrive = () => {
    let companyName = prompt("Name your company");
    firestore.collection("users").doc(userName).collection("companies").doc(companyName).set({
        admin: userName
    })
        .then(() => alert("Company registered"))
}


const changeType = () => {
    firestore.collection("users")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    creatingDiv(change.doc.id)
                    console.log(docChanges.doc.data())
                    console.log("l")
                }
            });
        });
}

const callData = () => {
    firestore.collection("users").doc(userName).collection("companies")
        .onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                creatingDiv(doc.id)
            });
        });
}

const creatingDiv = (textCom) => {
    const materialDiv = document.createElement("div");
    const linkTag = document.createElement("a");
    linkTag.setAttribute("href", "./sendingReport/sendingReport.html");
    const companiesName = document.createTextNode(textCom);
    linkTag.appendChild(companiesName);
    materialDiv.appendChild(linkTag);
    bodyDiv.appendChild(materialDiv);
}
const addCompany = () => {
    addToDrive();
    changeType();
}
const signOut = () => {
    auth.signOut();
}