var firebaseConfig = {
    apiKey: "AIzaSyCgSTRpqTDEcFvH7Esed3crCDsWIwS5Bdc",
    authDomain: "dinoter-e9c26.firebaseapp.com",
    databaseURL: "https://dinoter-e9c26-default-rtdb.firebaseio.com",
    projectId: "dinoter-e9c26",
    storageBucket: "dinoter-e9c26.appspot.com",
    messagingSenderId: "734177772573",
    appId: "1:734177772573:web:3b0bd9fc1df34650eff2f4",
    measurementId: "G-C2V9SKGQHX"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
    firebase.database().ref("/").on('value',function(snapshot){
      console.log(snapshot.val());
    });
  }