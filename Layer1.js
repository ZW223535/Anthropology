let myImage = []; //Empty Array to store variables
let numImg = 8;

let sentence = "ClickToReflect";
let sentenceArray = [];
let r = 70;
let theta = 10.8;

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
  image(randoImg, mouseX, mouseY, 360, 200);
}

function mouseDragged() {
  push();
  image(randoImg, mouseX, mouseY, 360, 200);
  pop();
}

document.getElementById("schermata").onclick = function () {
  document.getElementById("schermata").style.display = "none";
};

function windowResized() {
  push();
  resizeCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  translate(width / 2, height / 2);
  let scale = Math.max(width / img6.width, height / img6.height);
  tint(255, 150); // Display at half opacity
  bg = image(img6, 0, 0, img6.width * scale, img6.height * scale);
  background(bg);
  pop();
}
