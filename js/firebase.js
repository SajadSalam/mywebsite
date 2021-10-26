
const firebaseConfig = {
    apiKey: "AIzaSyC1FVogMZ2NY7aljHX-jnjumUdsZD1yLRo",
    authDomain: "uplifted-woods-227018.firebaseapp.com",
    projectId: "uplifted-woods-227018",
    storageBucket: "uplifted-woods-227018.appspot.com",
    messagingSenderId: "1091837738223",
    appId: "1:1091837738223:web:cdef606961b9f7007e2f1a",
    measurementId: "G-S423B69SYB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// db.collection("documents").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });