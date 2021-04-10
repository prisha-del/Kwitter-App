//YOUR FIREBASE LINKS
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
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");
  function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message:msg,
          like:0 
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name= message_data['name'];
    message= message_data['message'];
    like= message_data['like'];
    row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
     document.getElementById("output").innerHTML += row;

//End code
    } });  }); }

getData();
function updateLike(message_id)
{
    console.log("clicked on like button-"+ message_id);
    button_id= message_id;
    likes= document.getElementById(button_id).value;
    likes= Number(likes)+ 1;
    console.log(likes);

    firebase.database().ref(room_name).child(message_id).update({
          like: likes
    });
}
function logout(){  
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}
