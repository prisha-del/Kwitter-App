//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD4LwqGlTqOHNpGpXGquolP-rDZjS9yr4c",
      authDomain: "kwitter-app.firebaseapp.com",
      databaseURL: "https://kwitter-app.firebaseio.com",
      projectId: "kwitter-app",
      storageBucket: "kwitter-app.appspot.com",
      messagingSenderId: "826858773487",
      appId: "1:826858773487:web:876acdb3cd901ad195b41a",
      measurementId: "G-1CHN5XKN22"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room Name-"+ Room_names);
            row= "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>"
            document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();


user_name= localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML= "Welcome-"+ user_name;
function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"blah blah blah"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function logout(){  
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}