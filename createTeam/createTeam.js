auth.onAuthStateChanged((user) => {
    if (user) {
        userName = user.email;
        changeType();
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

const creatingDiv = (textCom) => {
    materialDiv = document.createElement("div");
    materialDiv.setAttribute("class","matDiv")
    const linkTag = document.createElement("p");
    linkTag.setAttribute("class", "materialDiv");
    const companiesName = document.createTextNode(textCom);
    linkTag.appendChild(companiesName);
    materialDiv.appendChild(linkTag);
    bodyDiv.appendChild(materialDiv);
    materialDiv.addEventListener("click", function () {
        let companyClicked = event.target.innerText;
        localStorage.setItem("CompanyClicked", companyClicked);
        location.href = "../sendingReport/sendingReport.html";
      });
}

const signOut = () => {
    auth.signOut();
}