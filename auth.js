function register(){

let name = document.getElementById("name").value;
let branch = document.getElementById("branch").value;
let password = document.getElementById("password").value;

if(name === "" || branch === "" || password === ""){
alert("Please fill all fields");
return;
}

let user = {
name:name,
branch:branch,
password:password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Registration Successful!");

window.location.href = "dashboard.html";

}

function login(){

let name = document.getElementById("name").value;
let password = document.getElementById("password").value;

let storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && name === storedUser.name && password === storedUser.password){

window.location.href = "dashboard.html";

}
else{

alert("Invalid login details");

}

}
