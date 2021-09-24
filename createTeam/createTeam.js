auth.onAuthStateChanged((user) => {
    if (!user) {
        location.replace("/")
    }
    else {
        userName = user.email;
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

const callData = () => {
    firestore.collection("users").doc(userName).collection("companies")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    creatingDiv(change.doc.id)
                }
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
    callData()
}
const signOut = () => {
    auth.signOut();
}