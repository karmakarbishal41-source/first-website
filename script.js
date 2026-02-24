// MATRIX

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function draw(){
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++){
    const text = letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if (drops[i]*fontSize > canvas.height && Math.random()>0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 33);


// DEVICE INFO

const cities = ["Kolkata","Delhi","Mumbai","Chennai","Bangalore"];
const city = cities[Math.floor(Math.random()*cities.length)];

const fakeIP =
"192.168." +
Math.floor(Math.random()*255) +
"." +
Math.floor(Math.random()*255);

document.getElementById("deviceInfo").innerHTML =
"Device: " + navigator.userAgent +
"<br>IP Address: " + fakeIP +
"<br>Location: " + city;


// TERMINAL

function terminalOutput(){

  const lines = [
    "Accessing secure kernel...",
    "Bypassing firewall...",
    "Decrypting credentials...",
    "Analyzing vulnerabilities...",
    "Unauthorized access detected!"
  ];

  let i = 0;
  const term = document.getElementById("terminal");

  function typeLine(){
    if(i < lines.length){
      term.innerHTML += lines[i] + "<br>";
      i++;
      setTimeout(typeLine,800);
    }
  }

  typeLine();
}


// PASSWORD CRACK

function crackPassword(){

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const box = document.getElementById("crack");

  let count = 0;

  const interval = setInterval(()=>{
    result += chars.charAt(Math.floor(Math.random()*chars.length));
    box.innerHTML = "Cracking Password: " + result;

    count++;

    if(count > 12){
      clearInterval(interval);
      box.innerHTML = "Password Cracked ✔";
    }

  },200);
}


// SCAN

function startScan(){

  terminalOutput();

  let progress = 0;
  const bar = document.getElementById("progressBar");
  const status = document.getElementById("status");

  const interval = setInterval(()=>{

    progress += 5;
    bar.style.width = progress + "%";

    if(progress === 20){
      status.innerHTML = "Scanning ports...";
    }

    if(progress === 50){
      status.innerHTML = "Checking vulnerabilities...";
    }

    if(progress === 80){
      status.innerHTML = "Suspicious activity detected...";
    }

    if(progress >= 100){

      clearInterval(interval);

      status.innerHTML =
      "⚠ Potential security risk detected.";

      crackPassword();

      // RED FLASH
      const flash = document.getElementById("flash");
      flash.style.opacity = "0.7";

      setTimeout(()=>{
        flash.style.opacity = "0";
      },300);

      // VIBRATION
      if (navigator.vibrate) {
        navigator.vibrate([500,200,500]);
      }

      // SOUND
      const sound = document.getElementById("alertSound");
      if(sound){
        sound.play();
      }

      alert("Warning: Security vulnerability detected!");

    }

  },300);

}