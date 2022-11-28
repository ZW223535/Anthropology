let myImage = []; //Empty Array to store variables
let numImg = 8;
let mySong1;
let mySong2;
let mySong3;
let mySong4;
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
  img2 = loadImage("./assets/images/Rip2.jpg");
  img3 = loadImage("./assets/images/Rip3.png");
  img4 = loadImage("./assets/images/Rip4.jpg");
  img5 = loadImage("./assets/images/Rip5.jpg");
  img6 = loadImage("./assets/images/ForestaSfondoTemporaneo.png");
  img7 = loadImage("./assets/images/Rip7.jpg");
  img8 = loadImage("./assets/images/Rip8.jpg");
  img9 = loadImage("./assets/images/Rip9.jpeg");
  img10 = loadImage("./assets/images/Rip10.jpg");
  myImage = [img2, img3, img4, img5, img7, img8, img9, img10];
  mySong2 = loadSound("./assets/music/Drop.mp3");
  mySong3 = loadSound("./assets/music/Glitch.mp3");
  mySong4 = loadSound("./assets/music/radio.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  push();
  tint(255, 150); // Display at half opacity
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img6.width, height / img6.height);
  image(img6, 0, 0, img6.width * scale, img6.height * scale);
  pop();
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

  frameRate(5);
  if (frameCount > 30) {
    fill(random(0, 120));
    text("ECHO", random(1, width), random(1, height));
    textFont("Ortica");
    textSize(random(10, 70));
  }

  /*let randoImg;
  if (frameCount > 50) {
    randoImg = random(myImage);
    image(randoImg, random(0, width), random(0, height), 360, 200);
  }*/

  if (frameCount > 1000) {
    noLoop();
  }
}

let randoImg;
function mousePressed() {
  randoImg = random(myImage);
  imageMode(CENTER);
  image(randoImg, mouseX, mouseY, 360, 200);
}

function mouseDragged() {
  // let randoImg = random(myImage);
  push();

  image(randoImg, mouseX, mouseY, 360, 200);
  pop();
}

function windowResized() {
  push();
  resizeCanvas(windowWidth, windowHeight);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img6.width, height / img6.height);
  tint(255, 150); // Display at half opacity
  bg = image(img6, 0, 0, img6.width * scale, img6.height * scale);
  background(bg);
  pop();
}

document.getElementById("schermata").onclick = function () {
  document.getElementById("schermata").style.display = "none";
};
