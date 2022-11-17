//temporaly code as place holder

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

var colorlist = [
  "#ffadad",
  "#ffd6a5",
  "#ffb8d1",
  "#e4b4c2",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#ddfdfe",
  "#a0c4ff",
  "#ddfdfe",
  "#bdb2ff",
  "#ffc6ff",
  "#fffffc",
];
var positionX = [300, 600, 500];
var positionY = [160, 400, 200];
var sizeX = [1, 0.5, 0.8];
var vYList = [1, 2, 3];

function generateRandomFlower() {
  sizeX.push(random(0.5, 1));
  positionX.push(mouseX);
  positionY.push(mouseY);
  //colorlist.push(random(colorlist))
  vYList.push(random(1, 4));
}

function mousePressed() {
  generateRandomFlower();
}

function drawFlowers(clr1, clr2, clr3) {
  push();
  rotate(sqrt(frameCount + 1));
  fill(clr1);
  ellipse(0, 0, 50);
  ellipseMode(CORNER);
  fill(clr2);
  //scale(1/log(frameCount)*10)
  for (var i = 0; i < 8; i++) {
    ellipse(20, -20, 40, 40);
    //line(30,0,150,-10)
    rotate(PI / 4);
  }
  fill(clr3);
  for (var i = 0; i < 16; i++) {
    ellipse(50, -20, 80, 40);
    line(50, 0, 150, -10);
    rotate(PI / 8);
  }

  pop();
}

function draw() {
  background(10, 20);
  for (var i = 0; i < positionX.length; i++) {
    let xx = positionX[i];
    let yy = positionY[i];

    push();
    translate(xx, yy);

    scale(sizeX[i]);
    drawFlowers(
      colorlist[i % 10],
      colorlist[(i % 10) + 2],
      colorlist[(i % 10) + 3]
    );

    pop();

    positionY[i] += vYList[i];
    if (yy > height) {
      vYList[i] = -abs(vYList[i]);
    } else if (yy <= 0) {
      vYList[i] = abs(vYList[i]);
    }
  }
}
