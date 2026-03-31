function register(){

let username=prompt("Enter username");
let password=prompt("Enter password");

localStorage.setItem("user",username);
localStorage.setItem("pass",password);

alert("Registered Successfully");

}

function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let storedUser=localStorage.getItem("user");
let storedPass=localStorage.getItem("pass");

if(username===storedUser && password===storedPass){

window.location="dashboard.html";

}
else{

alert("Invalid login");

}

}