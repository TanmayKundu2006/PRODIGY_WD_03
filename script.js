let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");

let turn0 = true;
let count = 0;

// Function to check for a win
function checkWin() {
  if (
    (box1.innerText === box2.innerText && box2.innerText === box3.innerText && box1.innerText !== "") ||
    (box4.innerText === box5.innerText && box5.innerText === box6.innerText && box4.innerText !== "") ||
    (box7.innerText === box8.innerText && box8.innerText === box9.innerText && box7.innerText !== "") ||
    (box1.innerText === box4.innerText && box4.innerText === box7.innerText && box1.innerText !== "") ||
    (box2.innerText === box5.innerText && box5.innerText === box8.innerText && box2.innerText !== "") ||
    (box3.innerText === box6.innerText && box6.innerText === box9.innerText && box3.innerText !== "") ||
    (box1.innerText === box5.innerText && box5.innerText === box9.innerText && box1.innerText !== "") ||
    (box3.innerText === box5.innerText && box5.innerText === box7.innerText && box3.innerText !== "")
  ) {
    alert(`Player ${turn0 ? "O" : "X"} wins!`);
    resetBoard();
  } else if (count === 9) {
    alert("It's a draw!");
    resetBoard();
  }
}

// Reset the game board
function resetBoard() {
  [box1, box2, box3, box4, box5, box6, box7, box8, box9].forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
  turn0 = true;
  count = 0;
}

// Function to handle clicks
function handleClick(box) {
  if (turn0) {
    box.innerText = "X";
  } else {
    box.innerText = "O";
  }
  box.disabled = true;
  turn0 = !turn0;
  count++;

  checkWin(); // Check if there's a win after every move
}

// Adding event listeners
box1.addEventListener("click", () => handleClick(box1));
box2.addEventListener("click", () => handleClick(box2));
box3.addEventListener("click", () => handleClick(box3));
box4.addEventListener("click", () => handleClick(box4));
box5.addEventListener("click", () => handleClick(box5));
box6.addEventListener("click", () => handleClick(box6));
box7.addEventListener("click", () => handleClick(box7));
box8.addEventListener("click", () => handleClick(box8));
box9.addEventListener("click", () => handleClick(box9));
