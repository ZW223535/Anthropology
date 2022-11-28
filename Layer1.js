let myImage = []; //Empty Array to store variables
let numImg = 8;
let mySound;
let mySound2;

let sentence = "ClickToReflect";
let sentenceArray = [];
let r = 70;
let theta = 10.8;

let img1;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;

function preload() {
  img1 = loadImage("./assets/images/Rip1.png");
  img3 = loadImage("./assets/images/Rip3.png");
  img4 = loadImage("./assets/images/Rip4.png");
  img5 = loadImage("./assets/images/Rip5.png");
  img6 = loadImage("./assets/images/ForestaSfondoTemporaneo.png");
  img7 = loadImage("./assets/images/Rip7.png");
  img8 = loadImage("./assets/images/Rip8.png");
  img9 = loadImage("./assets/images/Rip9.png");
  img10 = loadImage("./assets/images/Rip10.png");
  myImage = [img1, img3, img4, img5, img7, img8, img9, img10];
  mySound = loadSound("./assets/music/Forest.mp3");
  mySound2 = loadSound("./assets/music/Drop.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  tint(255, 150); // Display at half opacity
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img6.width, height / img6.height);
  image(img6, 0, 0, img6.width * scale, img6.height * scale);
}

function draw() {
  if (mySound.isPlaying() === false) {
    mySound.play();
    mySound.setVolume(0.3);
  }
  if (mySound2.isPlaying() === false) {
    mySound2.play();
    mySound2.setVolume(0.1);
  }
}

let randoImg;
function mousePressed() {
  imageMode(CENTER);
  randoImg = random(myImage);
  image(randoImg, mouseX, mouseY, randoImg.width / 5, randoImg.height / 5);
}

function mouseDragged() {
  push();
  image(randoImg, mouseX, mouseY, randoImg.width / 5, randoImg.height / 5);
  pop();
}

document.getElementById("schermata").onclick = function () {
  document.getElementById("schermata").style.display = "none";
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  translate(width / 2, height / 2);
  let scale = Math.max(width / img6.width, height / img6.height);
  tint(255, 150); // Display at half opacity
  bg = image(img6, 0, 0, img6.width * scale, img6.height * scale);
  background(bg);
}
