let myImage = []; //Empty Array to store variables
let numImg = 8;
let mySong1;
let mySong2;
let mySong3;
let mySong4;

let img2;
let img3;
let img4;
let img5;
let img7;
let img8;
let img9;
let img10;

function preload() {
  img2 = loadImage("./assets/images/Rip2.jpg");
  img3 = loadImage("./assets/images/Rip3.png");
  img4 = loadImage("./assets/images/Rip4.jpg");
  img5 = loadImage("./assets/images/Rip5.jpg");
  img7 = loadImage("./assets/images/Rip7.jpg");
  img8 = loadImage("./assets/images/Rip8.jpg");
  img9 = loadImage("./assets/images/Rip9.jpeg");
  img10 = loadImage("./assets/images/Rip10.jpg");
  myImage = [img2, img3, img4, img5, img7, img8, img9, img10];
  mySong2 = loadSound("./assets/music/drop 2.mp3");
  mySong3 = loadSound("./assets/music/gLITCH.mp3");
  mySong4 = loadSound("./assets/music/radio.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#D8CDBA");
  imageMode(CENTER);
}

function draw() {
  if (mySong2.isPlaying() === false) {
    mySong2.play();
  }
  if (mySong3.isPlaying() === false) {
    mySong3.play();
  }
  if (mySong4.isPlaying() === false) {
    mySong4.play();
  }

  if (frameCount > 1000) {
    noLoop();
  }
}

let randoImg;
function mousePressed() {
  randoImg = random(myImage);
  image(randoImg, mouseX, mouseY, 360, 200);
}

function mouseDragged() {
  // let randoImg = random(myImage);
  push();

  image(randoImg, mouseX, mouseY, 360, 200);
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
