function setRandomDiceImage(id) {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "images/dice" + randomNumber + ".png";
  document.querySelectorAll("img")[id].setAttribute("src", randomDiceImage);
  return randomNumber;
}

var dice1 = setRandomDiceImage(0);
var dice2 = setRandomDiceImage(1);

var header = document.querySelector("h1");

if (dice1 === dice2) {
  header.innerHTML = "Draw!";
} else if (dice1 > dice2) {
  header.innerHTML = "❤️ Player 1 Wins!";
} else {
  header.innerHTML = "Player 2 Wins! ❤️";
}
