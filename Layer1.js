let myImage = []; //Empty Array to store variables
let numImg = 8;

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
  img6 = loadImage("./assets/images/ForestaSfondoTemporaneo.jpg");
  img7 = loadImage("./assets/images/Rip7.png");
  img8 = loadImage("./assets/images/Rip8.png");
  img9 = loadImage("./assets/images/Rip9.png");
  img10 = loadImage("./assets/images/Rip10.png");
  myImage = [img1, img3, img4, img5, img7, img8, img9, img10];
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
  /*if (frameCount > 100) {
    push();
    textAlign(CENTER);
    textSize(18);
    fill(255);

    sentenceArray = sentence.split(""); // splits a string into an array of chars

    print(sentenceArray);

    translate(width / 2, height / 2);
    let x = r * cos(theta);
    let y = r * sin(theta);

    for (let i = 0; i < sentenceArray.length; i++) {
      rotate(QUARTER_PI / 2);
      text(sentenceArray[i], x, y);
    }
    pop();
  } else if (frameCount > 101) {
    noLoop();
  }*/
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
