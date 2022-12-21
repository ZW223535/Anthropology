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

var contatore = 1;

document.getElementById("schermata2").onclick = function () {
  contatore = contatore + 1;
  console.log(contatore);

  if (contatore == 3) {
    document.getElementById("schermata2").style.display = "none";
  }
};

/*var contatore = 1;

document.getElementById("schermata2").onclick = function () {
  contatore = contatore + 1;
  console.log(contatore);

  if (contatore == 1) {
    document.getElementById("scritta1").style.display = "block";
  }

  if (contatore == 2) {
    document.getElementById("scritta1").style.display = "none";
    document.getElementById("scritta2").style.display = "block";
  }

  if (contatore == 3) {
    document.getElementById("scritta2").style.display = "none";
    document.getElementById("scritta3").style.display = "block";
  }

  if (contatore == 4) {
    document.getElementById("schermata2").style.display = "none";
  }
}; */
