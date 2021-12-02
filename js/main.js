
// var email=document.getElementById("Email").val;
// var password=document.getElementById("password").val;
    // const email = document.forms["userform"]["email"].value();
    // const password = document.forms["userform"]["password"].value();
function validateForm(){

if(email === ""){
    alert("Email is required")
    return false ;
} if(password === ""){
    alert("Password is required")
    return false ;
}
console.log("The js is working")

}
var objPeople = [
    {
        username : "james",
        password : "1234"
    },
    {
        username : "alex",
        password : "5678"
    },
    {
        username : "steve",
        password : "9123"
    }
    
];
function runLog(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;
   for(i=0; i<objPeople.length; i++){
       if(username == objPeople[i].username && password == objPeople[i].password)
       {
        //    window.open("portal.html");
        alert("You are logged in")
           return
       }
   }
   alert("incorrect username or password");
}