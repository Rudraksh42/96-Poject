// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRNDY_8edz2_FXwgU_LIE0ZH27ugvjyf4",
    authDomain: "glitter-1ad75.firebaseapp.com",
    databaseURL: "https://glitter-1ad75-default-rtdb.firebaseio.com",
    projectId: "glitter-1ad75",
    storageBucket: "glitter-1ad75.appspot.com",
    messagingSenderId: "160517487329",
    appId: "1:160517487329:web:72fd821610d069f70715a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
