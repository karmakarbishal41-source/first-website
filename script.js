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

const API_KEY = "AIzaSyCNX6cvwZ58ZbMCGfvDyB8NRxSgu7Ongsc";

try{

let res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AIzaSyCNX6cvwZ58ZbMCGfvDyB8NRxSgu7Ongsc}`,
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

let data = await res.json();

return data.candidates[0].content.parts[0].text;

}catch(err){
return "Error connecting AI";
}

}