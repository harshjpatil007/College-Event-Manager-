let proposals = JSON.parse(localStorage.getItem("proposals")) || [];
let approved = JSON.parse(localStorage.getItem("approved")) || [];

function submitEvent(){

let name=document.getElementById("eventName").value;
let date=document.getElementById("eventDate").value;
let location=document.getElementById("eventLocation").value;
let poster=document.getElementById("posterUrl").value;

proposals.push({name,date,location,poster});

localStorage.setItem("proposals",JSON.stringify(proposals));

alert("Event proposal submitted to admin");
}

function displayEvents(){

let container=document.getElementById("eventContainer");
if(!container) return;

container.innerHTML="";

approved.forEach(e=>{

let card=document.createElement("div");
card.className="event-card";

card.innerHTML=`
<img src="${e.poster}">
<h3>${e.name}</h3>
<p>${e.date}</p>
<p>${e.location}</p>
`;

container.appendChild(card);

});

}

function displayProposals(){

let container=document.getElementById("proposalContainer");
if(!container) return;

container.innerHTML="";

proposals.forEach((e,index)=>{

let card=document.createElement("div");
card.className="event-card";

card.innerHTML=`
<img src="${e.poster}">
<h3>${e.name}</h3>
<p>${e.date}</p>
<p>${e.location}</p>
<button onclick="approve(${index})">Approve</button>
`;

container.appendChild(card);

});

}

function approve(index){

approved.push(proposals[index]);
proposals.splice(index,1);

localStorage.setItem("approved",JSON.stringify(approved));
localStorage.setItem("proposals",JSON.stringify(proposals));

displayProposals();

}

displayEvents();
displayProposals();
