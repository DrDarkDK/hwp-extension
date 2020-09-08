//Notes:
// - Send button needs an EventListener assigned to work.

var Cchatbox = document.createElement("div");
var CansArea = document.createElement("div"); CansArea.setAttribute("id", "ChatArea");
var Cinput = document.createElement("input");
var Csend = document.createElement("button");
createBox();
createButtons();

function createBox() {
	Cchatbox.innerHTML = "<br><br><br><h3 style='text-align: center;'>Artifical Help Bot</h3>";
	Cchatbox.setAttribute("id", "Chat")
	Cchatbox.setAttribute("class", "Chat")
	document.body.appendChild(Cchatbox);
	Cchatbox.appendChild(CansArea)
}

function createButtons() {
	var buttonArea = document.createElement("div");
	buttonArea.style.display = "block";
	buttonArea.style.border = "2px solid black";
	buttonArea.style.borderTop = "1px solid #019494";
	buttonArea.style.position = "relative";
	//buttonArea.style.marginBottom = "auto";
	buttonArea.style.width = "100%";
	buttonArea.style.backgroundColor = "#1b1b1b";
	buttonArea.style.marginTop = "15px";
	
	Cinput.style.color = "white";
	Cinput.setAttribute("id", "inputArea")
	Cinput.setAttribute("class", "inputAHB")

	Csend.innerHTML = "Send";
	Csend.setAttribute("class", "button")
	Csend.setAttribute("id", "submitButton"); Csend.setAttribute("onclick", "submitText()")

	


	Cchatbox.appendChild(buttonArea);
	buttonArea.appendChild(Cinput); buttonArea.appendChild(Csend);
}

var burgMenu = document.createElement("div");
burgMenu.setAttribute("class", "fa fa-comments-o");
burgMenu.setAttribute("id", "burgMenu");
burgMenu.addEventListener("click", toggleBurg);
document.querySelector("body > header > nav").appendChild(burgMenu);

function toggleBurg() {
	var x = document.getElementById("Chat");
	console.log("X")
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

toggleBurg();