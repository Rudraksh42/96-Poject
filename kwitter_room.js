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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

