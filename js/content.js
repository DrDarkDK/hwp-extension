var burgMenu = document.createElement("div");
burgMenu.setAttribute("class", "fa fa-comments-o");
burgMenu.setAttribute("id", "burgMenu");
burgMenu.addEventListener("click", toggleBurg);

var Cchatbox = document.createElement("div");
var CansArea = document.createElement("div"); CansArea.setAttribute("id", "ChatArea");
var Cinput = document.createElement("input");
var Csend = document.createElement("button");
createBox();
createButtons();

function createBox() {
	Cchatbox.innerHTML = "<br><div><p id='Cnav'>X</p><h3 class='Ch3' style='text-align: center;'>Artificial Help Bot</h3></div>";
	Cchatbox.setAttribute("id", "Chat")
	Cchatbox.setAttribute("class", "Chat")
	document.body.appendChild(Cchatbox);
	Cchatbox.appendChild(CansArea)
	document.getElementById("Cnav").addEventListener("click", toggleBurg);

	document.getElementById("Cnav").addEventListener("click", function() {
		document.getElementById("Coverlay").remove();
	})
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
	Csend.setAttribute("id", "submitButton");

	


	document.getElementById("Chat").appendChild(buttonArea);
	buttonArea.appendChild(Cinput); buttonArea.appendChild(Csend);
}

document.querySelector("body > header > nav").appendChild(burgMenu);

function toggleBurg() {
	var x = document.getElementById("Chat");
	var overlay = document.createElement("div")
	overlay.setAttribute("class", "Coverlay show");
	overlay.setAttribute("id", "Coverlay")

  if (x.style.display === "none") {
	x.style.display = "block";
	document.body.appendChild(overlay);
	document.getElementById("Coverlay").addEventListener("click", function() {
		document.getElementById("Coverlay").remove();
		x.style.display = "none";
	})
	
  } else {
	x.style.display = "none";
  }
}

toggleBurg();

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}