var objPeople = [
  {
      username : "james",
      password : "5678"
  },
  {
      username : "alex",
      password : "23456"
  },
  {
      username : "steve",
      password : "98765"
  }
];
function runLog(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
 for(i=0; i<objPeople.length; i++){
     if(username == objPeople[i].username && password == objPeople[i].password)
     {
         window.open("../content.html");
         return
     }
 }
 alert("incorrect username or password");
}
