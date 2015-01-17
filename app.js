function start() {
	makeBoxesClickable();
	document.getElementById("reset").addEventListener("click", resetEverything);
	
}
var boxes = document.getElementsByClassName("box")

function makeBoxesClickable(){
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", turnCounter);
		}
	}

var turn = 0;

function turnCounter(event){
	if (turn % 2 == 0 ){
			event.target.setAttribute("class", "X");
		 }if ( turn % 2 == 1){
			event.target.setAttribute("class", "O");
		}
		turn++;
}

// document.getElementsByTagName("button").addEventListener("click", resetEverything);

function resetEverything(){
	var boxeReset = document.querySelectorAll("div.X, div.O")

	for (var i = 0; i < boxeReset.length; i++) {
		boxeReset[i].className = "box";
		event.preventDefault();
	}
}

window.onload = start;