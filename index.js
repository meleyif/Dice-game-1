var randomNumber1 = Math.floor(Math.random() * 6 + 1);
if (randomNumber1 >= 1 && randomNumber1) {
  document.querySelectorAll("img")[0].src =
    "./images/dice" + randomNumber1 + ".png";
}

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
if (randomNumber2 >= 1 && randomNumber1) {
  document.querySelectorAll("img")[1].src =
    "./images/dice" + randomNumber2 + ".png";
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins"; //Player 1 wins the game
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins🚩"; //Player 2wins the game
} else {
  document.querySelector("h1").innerText = "Draw!"; //No one wins the game, Draw
}
