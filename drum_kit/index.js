const map = {
  "w": "tom-1",
  "a": "tom-2",
  "s": "tom-3",
  "d": "tom-4",
  "j": "snare",
  "k": "crash",
  "l": "kick-bass",
};

document.querySelectorAll("button").forEach((button, i) => {
  button.addEventListener("click", () => {
    var key = button.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  })
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  var audioFile = map[key];
  if (audioFile === undefined) {
    return;
  }
  var audio = new Audio("sounds/" + audioFile + ".mp3");
  audio.play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  if (activeButton === null) {
    return;
  }
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
