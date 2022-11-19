// P_2_3_3_01
//
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw tool. shows how to draw with dynamic elements. 
 * 
 * MOUSE
 * drag                : draw with text
 * 
 * KEYS
 * del, backspace      : clear screen
 * arrow up            : angle distortion +
 * arrow down          : angle distortion -
 * s                   : save png

 */

var x = 0,
  y = 0;
var stepSize = 5.0;
var letters = "ECHO ";
var fontSizeMin = 9;
var angleDistortion = 0.5;
var counter = 0;
var can_write = 1;

function setup() {
  // use full screen size
  createCanvas(windowWidth, windowHeight);
  background("#EBE2D1");
  smooth();
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);
}

function mousePressed() {
  can_write = 0;
}
function mouseReleased() {
  can_write = 1;
}

function draw() {
  if (mouseOver) {
    var d = dist(x, y, mouseX, mouseY);
    textFont("Georgia");
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));

      if (can_write == 1) {
        text(newLetter, 0, 0);
      }
      pop();

      counter++;
      if (counter > letters.length - 1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}

function mousePressed() {
  push();
  noFill();
  stroke("White");
  strokeWeight(random(1, 3));
  ellipseMode(CENTER);

  ellipse(mouseX, mouseY, random(50, 100));
  ellipse(mouseX + 10, mouseY + 10, random(100, 150));
  ellipse(mouseX - 5, mouseY - 5, random(150, 250));
  ellipse(mouseX, mouseY, random(250, 350));
  pop();
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
