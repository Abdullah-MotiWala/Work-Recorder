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
const bodyDiv = document.querySelector(".yourCompany");

const addToDrive = () => {
    let companyName = prompt("Name your company");
    firestore.collection("users").doc(userName).collection("companies").doc(companyName).set({
        admin: userName,
        members: {
            one: "Ali",
            two: "skiandar"
        },
        myErr: ["wasif", "usman"]
    })
        .then(() => {
            alert("Company registered");
        }
        )
}


const changeType = () => {
    firestore.collection("users").doc(userName).collection("companies")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    creatingDiv(change.doc.id)
                }
            });
        });
}

// changeType()
// const callData = () => {
//     firestore.collection("users").doc(userName).collection("companies")
//         .get()
//         .then((snapShot) => {
//             snapShot.forEach((doc) => {
//                 creatingDiv(doc.id)
//             });
//         })
// }

const creatingDiv = (textCom) => {
    const materialDiv = document.createElement("div");
    const linkTag = document.createElement("a");
    linkTag.setAttribute("href", "../sendingReport/sendingReport.html");
    const companiesName = document.createTextNode(textCom);
    linkTag.appendChild(companiesName);
    materialDiv.appendChild(linkTag);
    bodyDiv.appendChild(materialDiv);
}
const signOut = () => {
    auth.signOut();
}