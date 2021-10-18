// auth.onAuthStateChanged((user) => {
//     if (user) {
//         userName = user.email;
//         changeType();
//     }
//     else {
//         location.replace("/")
//     }
// })

// const items = [];
// const itemAdd = () => {
//     itemToAdd = prompt("Add Item");
//     items.push(itemToAdd)
//     firestore.collection("users").doc(userName).set({
//         items
//     }
//     ).catch(() => "Error Occur")
// }
// const changeType = () => {
//     firestore.collection("users").doc(userName).collection("work")
//         .onSnapshot((snapshot) => {
//             snapshot.docChanges().forEach((change) => {
//                 if (change.type === "added") {
//                     addingOption(change.doc.id)
//                     console.log
//                 }
//             });
//         });
// }
// const addingOption = (optionList) => {
//     const workOptions = document.getElementById("work");
//     const optionTag = document.createElement("option");
//     optionTag.setAttribute("value", itemToAdd);
//     optionTag.innerHTML(optionList)
//     workOptions.appendChild(optionTag)
//     console.log("l")

// }
// const signOut = () => {
//     auth.signOut();
// }