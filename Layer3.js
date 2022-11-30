let myImage = []; //Empty Array to store variables
let numImg = 8;
let mySong1;
let mySong2;
let mySong3;
let mySong4;
let mySound;
let ortica;

let img2;
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
  myImage = [img2, img3, img4, img5, img7, img8, img9, img10];
  mySound = loadSound("./assets/music/Forest.mp3");
  mySong2 = loadSound("./assets/music/Drop.mp3");
  mySong3 = loadSound("./assets/music/Glitch.mp3");
  mySong4 = loadSound("./assets/music/radio.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F4F3F0");
}

function draw() {
  if (mySound.isPlaying() === false) {
    mySound.play();
    mySound.setVolume(0.3);
  }
  if (mySong2.isPlaying() === false) {
    mySong2.play();
    mySong2.setVolume(0.3);
  }
  if (mySong3.isPlaying() === false) {
    mySong3.play();
    mySong3.setVolume(0.08);
  }
  if (mySong4.isPlaying() === false) {
    mySong4.play();
    mySong4.setVolume(0.3);
  }

  if (frameCount > 80) {
    frameRate(4);
    fill(random(0, 150));
    text("ECHO", random(1, width), random(1, height));
    textFont("Ortica");
    textSize(random(10, 100));
  }

  if (frameCount > 80) {
    frameRate(4);
    fill(random(0, 255));
    text("ECHO", random(1, width), random(1, height));
    textFont("Inconsolata-monospace");
    textSize(random(10, 100));
  }

  if (frameCount > 1000) {
    noLoop();
  }
}

let randoImg;
function mousePressed() {
  randoImg = random(myImage);
  imageMode(CENTER);
  image(randoImg, mouseX, mouseY, randoImg.width / 5, randoImg.height / 5);
}

function mouseDragged() {
  // let randoImg = random(myImage);
  push();

  image(randoImg, mouseX, mouseY, randoImg.width / 5, randoImg.height / 5);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#F4F3F0");
}

document.getElementById("schermata2").onclick = function () {
  document.getElementById("schermata2").style.display = "none";
};
