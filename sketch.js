let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("NextPage");
  button.position(width / 2, height / 3);
  fill("White");
  button.mouseClicked(nextPage);
  button.style(
    "text-align:center;font-family:'Fuzzy Bubbles'; font-size:10px; border-radius: 10px"
  );
}

function draw() {
  background("black");
  let msg = "Pagina Brutta per Antropologia";
  fill("white");
  textAlign(CENTER);
  text(msg, width / 2, height / 2);
  textFont("Fuzzy Bubbles");
  push();
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function nextPage() {
  window.open("Layer1.html");
}
