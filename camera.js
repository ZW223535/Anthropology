function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture2 = createCapture(VIDEO);
  capture3 = createCapture(VIDEO);
}

function draw() {
  //WEBCAM
  push();
  if (capture.loadedmetadata) {
    console.log("capture");
    console.log(capture);
    image(capture, 50, 50, capture.width, capture.height);
    filter(GRAY);
  }
  if (capture.loadedmetadata) {
    image(capture, 150, 50, capture.width / 2, capture.height / 2); // 240 * 320
    filter(GRAY);
  }
  if (capture.loadedmetadata) {
    image(capture, 250, 50, capture.width / 3, capture.height / 3); // 120 * 213.333333333333
    filter(GRAY);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
