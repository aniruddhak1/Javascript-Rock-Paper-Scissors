let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userscore");
const computerScore_span = document.getElementById("compscore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    computer
  )}. You won! 🔥`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("green-glow");
  }, 500);
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(
    user
  )}. You lost... 💩`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(user).classList.remove("red-glow");
  }, 500);
}

function draw(user, computer) {
  result_div.innerHTML = `${convertToWord(computer)} equals ${convertToWord(
    user
  )}. You drew. 🤝`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(`Computer choose ${computerChoice}`);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("YOU WON");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("YOU LOST");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("YOU DREW");
      draw(userChoice, computerChoice);
      break;
  }
}

rock_div.addEventListener("click", function () {
  console.log("u click rock");
  game("r");
});
paper_div.addEventListener("click", function () {
  console.log("u click paper");
  game("p");
});
scissors_div.addEventListener("click", function () {
  console.log("u click scissors");
  game("s");
});
