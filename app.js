//add win and draw functionality.


function start() {
	makeBoxesClickable();
	document.getElementById("reset").addEventListener("click", resetEverything);
	win()
}
var boxes = document.getElementsByClassName("box")

function makeBoxesClickable(){
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", turnCounter);
		}
	}

var turn = 0;

function turnCounter(event){
	if (turn % 2 == 0 && document.getElementsByClassName("box")){
			event.target.className += " X";
			document.getElementById("whosTurn").innerHTML = "X's turn";
			this.removeEventListener("click", turnCounter);
			
		 }if ( turn % 2 == 1 && document.getElementsByClassName("box")){
			event.target.className += " O";
			document.getElementById("whosTurn").innerHTML = "O's turn";
			this.removeEventListener("click", turnCounter);
			
		}
		turn++
}

// document.getElementsByTagName("button").addEventListener("click", resetEverything);

function resetEverything(){
	var boxeReset = document.querySelectorAll("div.X, div.O")
	document.getElementById("whosTurn").innerHTML = " ";

	for (var i = 0; i < boxeReset.length; i++) {
		boxeReset[i].className = "box";
		makeBoxesClickable();
		event.preventDefault();
	}
}








window.onload = start;