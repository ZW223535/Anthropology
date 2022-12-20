let image1;
let myFont;
let myText1;

function preload() {
  image1 = loadImage("./assets/images/load.png");
  myFont = loadFont("./assets/font/Ortica-Light.woff");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F2F2F2");

  imageMode(CENTER);
  image(image1, width / 2, 290, image1.width / 1.5, image1.height / 1.5);

  myText1 = createElement(
    "h1",
    "“<b> Echo chambers </b> are environments created by online <br> platforms in which users are surrounded <br> by viewpoints that reflect their own.”"
  );
  myText1.style(
    "position: absolute; left:50%; top: 350px; transform: translate(-50%, 0%); text-align:center; font-size: 30px; font-family:'Ortica-Light'"
  );

  myText2 = createElement(
    "p",
    "<b> Algorithms </b> place us in these echo chambers based on the information <br> they already have about us or that we provide to them. <br> <br> <br> <br> This mechanisms is enhanced by the sharing of those information <br> and exactly as an echo, we end up <b> reverberating the same informations </b>  <br> that we are accessing over and over again. <br> <br> <br> <br> When we come to the realization that we are <b> stuck in an <br> information bubble </b> that creates a loop, we can see the extent <br> to which we are being limited by this process."
  );
  myText2.style(
    "position: absolute; left:50%; top: 800px; transform: translate(-50%, 0%); text-align:center; font-size: 20px; font-family:'Ortica-Light'"
  );
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#F2F2F2");
  image(image1, width / 2, 290, image1.width / 1.5, image1.height / 1.5);
}
