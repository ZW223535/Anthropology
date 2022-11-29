let mySound;

function preload() {
  mySound = loadSound("./assets/music/Forest.mp3");
}

function setup() {}

function draw() {
  if (mySound.isPlaying() === false) {
    mySound.play();
    mySound.setVolume(0.3);
  }
}

document.querySelectorAll(".cerchi").forEach((element) => {
  element.addEventListener("mouseover", (node) => {
    console.log(node.fromElement);
    node.fromElement.classList.toggle("animate__pulse");
  });
});

document.getElementById("schermata").onclick = function () {
  document.getElementById("schermata").style.display = "none";
};
