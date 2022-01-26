const firebaseConfig = {
    apiKey: "AIzaSyDZHM27AxcZGkiBbyMbSiR3bs-0aTPxluc",
    authDomain: "kwitter-aba67.firebaseapp.com",
    databaseURL: "https://kwitter-aba67-default-rtdb.firebaseio.com",
    projectId: "kwitter-aba67",
    storageBucket: "kwitter-aba67.appspot.com",
    messagingSenderId: "830753213337",
    appId: "1:830753213337:web:568f6d4b517f850ef16108"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}