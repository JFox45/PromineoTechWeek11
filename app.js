var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');
var turn = document.getElementById('turn');
var myAlert = document.getElementById('myAlert');
var boxes = document.getElementsByClassName('box');
var item = 0;

function winnerBoxes(case1, case2, case3) {
    case1.classList.add("win");
    case2.classList.add("win");
    case3.classList.add("win");
    myAlert.innerHTML = case1.innerHTML + " is the winner!"
    $('#myAlert').show('fade');
    
}

function winner() {

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        winnerBoxes(box1, box2, box3);

      if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        winnerBoxes(box4, box5, box6);

      if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        winnerBoxes(box7, box8, box9);

      if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        winnerBoxes(box1, box4, box7);

      if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        winnerBoxes(box2, box5, box8);

      if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        winnerBoxes(box3, box6, box9);

      if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        winnerBoxes(box1, box5, box9);

      if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        winnerBoxes(box3, box5, box7);
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (item % 2 === 0) {
                console.log(item);
                this.innerHTML = "X";
                turn.innerHTML = "PlayerO's Turn";
                winner();
                item += 1;
            } else {
                console.log(item);
                this.innerHTML = "O";
                turn.innerHTML = "PlayerX's Turn"
                winner();
                item += 1;
            }
        }
    };
}

var restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);

function restartGame() {

    for (var i = 0; i <boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        myAlert.innerHTML = "";
    }
}

