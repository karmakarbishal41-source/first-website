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
function sendMsg(){

let input = document.getElementById("userInput").value;
let chatBox = document.getElementById("chatBox");

if(!input) return;

chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

let reply = getBotReply(input);

chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

document.getElementById("userInput").value="";
}


function getBotReply(msg){

msg = msg.toLowerCase();

if(msg.includes("hello")) return "Hello 👋 How can I help?";
if(msg.includes("ai")) return "AI tools available in dashboard.";
if(msg.includes("price")) return "Premium coming soon.";
if(msg.includes("name")) return "I am Bishal AI Bot 🤖";

return "Sorry, I don't understand. Try another question.";
}
// show user in admin
if(window.location.pathname.includes("admin.html")){

document.getElementById("aUser").innerText =
localStorage.getItem("user");

document.getElementById("aEmail").innerText =
localStorage.getItem("email");

}


// clear users
function clearData(){
localStorage.clear();
alert("User data deleted");
location.reload();
}