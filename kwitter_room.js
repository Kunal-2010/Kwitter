var firebaseConfig = {
      apiKey: "AIzaSyBl0kdm7sRdyPIp8vdg5FC1HAuvmXBvsTc",
      authDomain: "kwitter-807fd.firebaseapp.com",
      databaseURL: "https://kwitter-807fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-807fd",
      storageBucket: "kwitter-807fd.appspot.com",
      messagingSenderId: "73635766448",
      appId: "1:73635766448:web:cc5ac0ec0c9da8659f1b75"
    };
          firebase.initializeApp(firebaseConfig);

          user_name = localStorage.getItem("user_name");
          document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

          function addRoom(){
            room_name= document.getElementById("room_name").value;
            console.log("I AM HERE 1")
            console.log(room_name)
            localStorage.setItem("room_name", room_name);
            
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room "
            })
            window.location="kwitter_page.html";
       }



ge0tData()

 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output")
.innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
   
      console.log("Room name - " + Room_names)
      row = "<div class='room_name' id=" + Room_names + " onclick='redirecToRoomName(this.id)' >#"+ Room_names + "</div> <hr>" ;
      document.getElementById("output").innerHTML += row ;
       

});});}

function redirecToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name)
      window.location="kwitter_page.html";
      
}


function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}