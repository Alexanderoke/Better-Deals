
// var email=document.getElementById("Email").val;
// var password=document.getElementById("password").val;
    const email = document.forms["userform"]["email"].value();
    const password = document.forms["userform"]["password"].value();
function validateForm(){

if(email === ""){
    alert("Email is required")
    return false ;
} if(password === ""){
    alert("Password is required")
    return false ;
}



    


}