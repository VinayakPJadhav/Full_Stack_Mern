// Game Constant  & variable

let direction = { x: 0, y: 0 }; //Stores the movement direction of the snake x and y values.
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("music.mp3");
let speed = 2; //Determines how fast the snake moves.
let lastPaintTime = 0;
let score = 0;
//Array storing the snake body with head
let snakeArr = [{ x: 13, y: 15 }];
food = { x: 6, y: 7 };

// Game Funcations
function main(ctime) {
  window.requestAnimationFrame(main);
  //console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function isCollide(sarr) {
  return false;
}
function gameEngine() {
  // updating the snake array ,also food;

  if (isCollide(snakeArr)) {
    gameOverSound.play();
    musicSound.pause();

    inputDir = { x: 0, y: 0 };
    alert("Press any key to Play again");

    snakeArr = [{ x: 13, y: 15 }];
    musicSound.play();
    score = 0;
  }
  //after eating the food incremnting score and regenertae the food

  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //render the snake and food;

  div1.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }

    div1.appendChild(snakeElement);
  });

  //Display the food

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  div1.appendChild(foodElement);
}

// main funcation;
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  //if press any key start the game
  inputDir = { x: 0, y: 1 };

  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
