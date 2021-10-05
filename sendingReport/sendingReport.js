let companyName = localStorage.getItem("CompanyClicked");
auth.onAuthStateChanged((user) => {
    if (user) {
        userName = user.email;
        document.querySelector(".companyName").innerHTML = companyName;
        changeType();
    }
    else {
        location.replace("/")
    }
});

const empBodyDiv = document.querySelector(".members");

const memberAdd = () => {
    employName = document.querySelector("#employName").value;
    firestore.collection("users").doc(userName).collection("companies").doc(companyName).collection("Employes").doc(employName).set({
    })
        .then(document.querySelector("#employName").value == "")
}

const changeType = () => {
    firestore.collection("users").doc(userName).collection("companies").doc(companyName).collection("Employes")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    creatingEmp(change.doc.id)
                }
            });
        });
}

const creatingEmp = (empName) => {
    employDiv = document.createElement("div");
    employDiv.setAttribute("class", "emplDiv")
    const linkTag = document.createElement("p");
    linkTag.setAttribute("class", "emplDiv");
    const companiesName = document.createTextNode(empName);
    linkTag.appendChild(companiesName);
    employDiv.appendChild(linkTag);
    empBodyDiv.appendChild(employDiv);
    employDiv.addEventListener("click", function () {
        let empClicked = event.target.innerText;
        localStorage.setItem("emplClicked", empClicked);
        location.href = "../recordWork/record.html";
    });
}
const signOut = () => {
    auth.signOut();
}