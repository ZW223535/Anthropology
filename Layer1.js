let myImage = []; //Empty Array to store variables
let numImg = 8;

let sentence = "ClickToGenerate";
let sentenceArray = [];
let r = 100;
let theta = 0;

let nextPage;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#D8CDBA");
  imageMode(CENTER);

  /* nextPage = createButton("Next Page");
  nextPage.style(
    "position: absolute; left:50%; top: 50%; transform: translate(-50%,-50%);text-align:center;font-family:'Georgia'; font-size:10px; border-radius: 10px"
  );
  nextPage.mousePressed(next);
  fade = 0;*/
}

function draw() {
  if (frameCount > 180) {
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
  } else if (frameCount > 181) {
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
  background("#D8CDBA");
}

function next() {
  window.open("Layer2.html");
}
