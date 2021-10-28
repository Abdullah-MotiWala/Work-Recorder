auth.onAuthStateChanged((user) => {
    if (user) {
        userName = user.email;
    }
    else {
        location.replace("/")
    }
})
let itemArr = [];
const itemAdd = () => {
    const item = document.querySelector(".itemName").value;
    const itemDes = document.querySelector(".itemDes").value;
    items.push({ itemN: [item], itemD: [itemDes] })
    firestore.collection("users").doc(userName).update({
        itemArr: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
    }
    ).catch(() => "Error Occur");
    document.querySelector(".itemName").value = "";
    document.querySelector(".itemDes").value = "";
    // firestore.collection("users").doc(userName).get().then((doc) => {
    //     console.log(doc.itme)
    // })
}