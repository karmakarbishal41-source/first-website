// ===== DEFAULT USER =====
localStorage.setItem("user","bishal@123");
localStorage.setItem("pass","Bk@2002#");


// ===== LOGIN =====
function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

let savedUser = localStorage.getItem("user");
let savedPass = localStorage.getItem("pass");

if(user === savedUser && pass === savedPass){

localStorage.setItem("loggedIn","true");
window.location="dashboard.html";

}else{
alert("Wrong username or password");
}

}


// ===== LOGOUT =====
function logout(){

localStorage.removeItem("loggedIn");
window.location="login.html";

}


// ===== DASHBOARD PROTECTION =====
if(window.location.pathname.includes("dashboard.html")){

if(localStorage.getItem("loggedIn") !== "true"){
window.location="login.html";
}

}


// ===== ADMIN PANEL =====
if(window.location.pathname.includes("admin.html")){

let user = localStorage.getItem("user");

if(document.getElementById("aUser"))
document.getElementById("aUser").innerText = user;

}



// ===== CLEAR DATA =====
function clearData(){

localStorage.clear();
alert("Data cleared");
location.reload();

}



// ===== GEMINI AI CHATBOT =====
async function sendMsg(){

let input = document.getElementById("userInput").value;
let chatBox = document.getElementById("chatBox");

if(!input) return;

chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

document.getElementById("userInput").value="";

let reply = await getAIReply(input);

chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

}


async function getAIReply(msg){

const API_KEY = "AIzaSyCNX6cvwZ58ZbMCGfvDyB8NRxSgu7Ongsc";   // ← YAHAN API KEY

try{

let response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
contents: [{
parts: [{ text: msg }]
}]
})
}
);

let data = await response.json();

if(data.candidates){
return data.candidates[0].content.parts[0].text;
}else{
return "AI Error";
}

}catch(e){
return "Connection error";
}

}



// ===== MATRIX BACKGROUND =====
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