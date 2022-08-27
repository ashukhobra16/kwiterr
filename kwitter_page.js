const config = {
      apiKey: "AIzaSyA-a788U2f-noQVjsArzweq9Qf65UDfbC4",
      authDomain: "kwiter-cc28f.firebaseapp.com",
      databaseURL: "https://kwiter-cc28f-default-rtdb.firebaseio.com",
      projectId: "kwiter-cc28f",
      storageBucket: "kwiter-cc28f.appspot.com",
      messagingSenderId: "560775880843",
      appId: "1:560775880843:web:13593d377b36661a71b48e",
      measurementId: "G-M15KN809H5"
    };
    
    firebase.initializeApp(config);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("name");
    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name, 
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "" ;

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
      window.location.replace("index.html");
      
}