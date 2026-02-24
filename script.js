function signup(){

let user = document.getElementById("newUser").value;
let email = document.getElementById("newEmail").value;
let pass = document.getElementById("newPass").value;

localStorage.setItem("user", user);
localStorage.setItem("email", email);
localStorage.setItem("pass", pass);

alert("Account created!");
window.location="login.html";

}

function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

let savedUser = localStorage.getItem("user");
let savedPass = localStorage.getItem("pass");

if(user==savedUser && pass==savedPass){
localStorage.setItem("loggedIn","true");
window.location="dashboard.html";
}
else{
alert("Wrong login");
}

}

function logout(){
localStorage.removeItem("loggedIn");
window.location="login.html";
}

if(window.location.pathname.includes("dashboard.html")){
if(localStorage.getItem("loggedIn")!="true"){
window.location="login.html";
}
}