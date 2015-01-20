//add win and draw functionality.


function start() {
	makeBoxesClickable();
	document.getElementById("reset").addEventListener("click", resetEverything);
}
var moves = ["1","2","3","4","5","6","7","8","9"];
var boxes = document.getElementsByClassName("box");
var turn = 0;

function makeBoxesClickable(){
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener("click", turnCounter);
		}
	}



function turnCounter(event){
	if (turn % 2 === 0 && document.getElementsByClassName("box")){
			
			event.target.className += " X";
			document.getElementById("whosTurn").innerHTML = "O's turn";
			playerMoves(this.getAttribute("id"));
			this.removeEventListener("click", turnCounter);
			
		 }if ( turn % 2 == 1 && document.getElementsByClassName("box")){
			
			event.target.className += " O";
			document.getElementById("whosTurn").innerHTML = "X's turn";
			playerMoves(this.getAttribute("id"));
			this.removeEventListener("click", turnCounter);
		}
		console.log(moves)	
		checkWin();
		turn++;
}

function playerMoves(x){
 	if (x === "upLeft"){
 		if (turn % 2 === 0){
 		moves[0] = "X";	
 		}
 		else{
 			moves[0] = "O";
 		}
 	}
 	else if (x === "upTop"){
 		if (turn % 2 === 0){
 		moves[1] = "X";	
 		}
 		else{
 			moves[1] = "O";
 		}
 	}
 	else if (x === "upRight"){
 		if (turn % 2 === 0){
 		moves[2] = "X";	
 		}
 		else{
 			moves[2] = "O";
 		}
 	}
 	else if (x === "midLeft"){
 		if (turn % 2 === 0){
 		moves[3] = "X";	
 		}
 		else{
 			moves[3] = "O";
 		}
 	}
 	else if (x === "midMid"){
 		if (turn % 2 === 0){
 		moves[4] = "X";	
 		}
 		else{
 			moves[4] = "O";
 		}
 	}
 	else if (x === "midRight"){
 		if (turn % 2 === 0){
 		moves[5] = "X";	
 		}
 		else{
 			moves[5] = "O";
 		}
 	}
 	else if (x === "btmLeft"){
 		if (turn % 2 === 0){
 		moves[6] = "X";	
 		}
 		else{
 			moves[6] = "O";
 		}
 	}
 	else if (x === "btmMid"){
 		if (turn % 2 === 0){
 		moves[7] = "X";	
 		}
 		else{
 			moves[7] = "O";
 		}
 	}
 	else if (x === "btmRight"){
 		if (turn % 2 === 0){
 		moves[8] = "X";	
 		}
 		else{
 			moves[8] = "O";
 		}
 	}
  }
  function displayWin(){
  	if (turn % 2 == 0){
  		document.getElementById("whosTurn").innerHTML = "X wins!";
  	}
  	else {
  		document.getElementById("whosTurn").innerHTML = "O wins!";
  	}
  }

  function checkWin(){
  	if (moves[0] === moves[1] && moves[0] === moves[2]) {
  		displayWin();

  	}
   	else if (moves[3] === moves[4] && moves[3] === moves[5]) {
   		displayWin();

  	} 	
  	else if (moves[6] === moves[7] && moves[6] === moves[8]) {
  		displayWin();

  	}
  	else if (moves[0] === moves[3] && moves[0] === moves[6]) {
  		displayWin();

  	}
  	else if (moves[1] === moves[4] && moves[1] === moves[7]) {
  		displayWin();

  	}
  	else if (moves[2] === moves[5] && moves[2] === moves[8]) {
  		displayWin();

  	}
  	else if (moves[0] === moves[4] && moves[0] === moves[8]) {
  		displayWin();

  	}
  	else if (moves[2] === moves[4] && moves[2] === moves[6]) {
  		displayWin();

  	}
  	
  }
 


function resetEverything(){
	var boxeReset = document.querySelectorAll("div.X, div.O");
	document.getElementById("whosTurn").innerHTML = " ";
	for (var i = 0; i < boxeReset.length; i++) {
		boxeReset[i].className = "box";
		makeBoxesClickable();
		event.preventDefault();
		turn = 0;
		moves = ["1","2","3","4","5","6","7","8","9"];
	}
}


window.onload = start;