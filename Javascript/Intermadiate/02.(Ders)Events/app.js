//* Examples

// const record = document.getElementById("recorded");
// const guessBtn = document.querySelector(".guess-btn");
// const startBtn = document.querySelector(".main-btn");

// const randomNumber = 13;
// const doSomething = () => {
//   alert("You did something!");
// };

// const changeColor = function () {
//   record.style.color = "red";
// };

// guessBtn.addEventListener("click", doSomething);

// record.addEventListener("mouseover", changeColor);

// startBtn.onclick = () => {
//   alert("On click start game btn");
// };

//? Practice

const record = document.getElementById("recorded");
const guessBtn = document.querySelector(".guess-btn");
const startBtn = document.querySelector(".main-btn");
const numberInp = document.querySelector(".number-input");
const result = document.querySelector(".guesses");
const progress = document.getElementById("progress");
const mainHeader = document.querySelector(".main-header");
const randomNumber = 13;

const gameOver = function () {
  mainHeader.innerHTML = "Game Over";
  numberInp.setAttribute("disabled", "disabled");
  guessBtn.setAttribute("disabled", "disabled");
  guessBtn.style.backgroundColor = "#1d2c3a";
  result.innerHTML = `Number : ${randomNumber}`;
};

const increaseProgres = function () {
  const valueOfProgress = progress.value;
  progress.value = valueOfProgress + 25;

  if (+progress.value == 100) {
    gameOver();
  }
};

const checkANumber = function () {
  const guessNumber = +numberInp.value;
  let resultMessage = "";

  if (guessNumber === randomNumber) {
    resultMessage = "Victory ✌";
    result.style.color = "#57cc99";
  } else if (guessNumber > randomNumber) {
    resultMessage = "Number too high ⚡";
    result.style.color = "#d90429";
    result.innerHTML = resultMessage;
    increaseProgres();
  } else {
    resultMessage = "Number too low 🤏";
    result.style.color = "#003566";
    result.innerHTML = resultMessage;
    increaseProgres();
  }
};

guessBtn.addEventListener("click", checkANumber);

numberInp.onkeyup = function () {
  const guessNumber = +numberInp.value;

  if (guessNumber < 1 || guessNumber > 100) {
    guessBtn.setAttribute("disabled", "disabled");
    guessBtn.style.backgroundColor = "#1d2c3a";
  } else {
    guessBtn.removeAttribute("disabled");
    guessBtn.style.backgroundColor = "#4f779d";
  }
};
