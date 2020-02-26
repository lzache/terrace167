// Models
var User = function(firebaseUser){
    let m = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
    }

    if(firebaseUser){
        m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        m.email = firebaseUser.email ? firebaseUser.email : '';
        m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        m.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }

    return m;
}

// var Need = function(){
//     return {
//         name: '',
//         datetime: new Date(),
//         createdBy: null,
//         assignedTo: null,
//     }
// };
//
// var Potluck = function(){
//     return {
//         name: '',
//         datetime: new Date(),
//         description: '',
//         location: '',
//         createdBy: null,
//         users: []
//     }
// };
//
// var Guest = function(){
//     return {
//         user: null,
//         datetime: new Date(),
//     }
// };

// -----------------------------------------------------



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpCjAizxxc6qQ1JkCe2MMWqrNjsKX8uNM",
    authDomain: "weddingplanner-f3395.firebaseapp.com",
    databaseURL: "https://weddingplanner-f3395.firebaseio.com",
    projectId: "weddingplanner-f3395",
    storageBucket: "weddingplanner-f3395.appspot.com",
    messagingSenderId: "467704480330",
    appId: "1:467704480330:web:7fd8e6dad4f2bdd06ddcb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var storage = firebase.storage().ref();


