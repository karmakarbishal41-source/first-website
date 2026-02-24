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
// Matrix animation
const canvas = document.getElementById('matrix');

if(canvas){
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for(let x=0; x<columns; x++)
drops[x] = 1;

function draw(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ffcc";
ctx.font = fontSize + "px monospace";

for(let i=0; i<drops.length; i++){
const text = letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text, i*fontSize, drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random()>0.975)
drops[i] = 0;

drops[i]++;
}
}

setInterval(draw, 33);
}