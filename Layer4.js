let image1;
let image2;
let myFont;
let myText1;
let myText2;

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
    "position: absolute; left:50%; top: 800px; transform: translate(-50%, 0%); text-align:center; font-size: 18px; font-family:'Ortica-Light';"
  );

  image2 = createImg("./assets/images/Sfondo2.png");
  image2.position(0, 1400);
  image2.size(width, height);

  myText3 = createElement(
    "p",
    "THE MYTH<br><br><br><br><br><br>The <b>myth</b> of the nymph Echo and Narcissus   <br> serves as a framework for the entire   <br> experience, accompanying the user step   <br> by step as a voiceover.  <br>   <br>  <br>The figure of <b>Echo </b>in greek mythology comes  <br> to represent <b>pure otherness</b>, since being   <br> deprived of her own voice, she only repeats   <br> other people’s words. <br>  <br>   <br>  On the contrary, <b>Narcissus </b>represents<b> <br>pure identity </b>, given that he knows nothing   <br> but himself."
  );
  myText3.style(
    "position: absolute; top: 1520px; text-align:left; left: 100px;font-size: 18px; color: white; font-family:'Ortica-Light';"
  );

  myText4 = createElement(
    "p",
    "Just like Echo, in an echo chamber we experience both <br> a <b> sense of isolation </b> because we keep hearing the same voices, <br> and just like Narcissus, at the same time we cannot hear <br> any other voice but our own."
  );
  myText4.style(
    "position: absolute; top: 2100px; padding-top: 300px; padding-bottom: 270px;left:50%; transform: translate(-50%, 0%); text-align:center; font-size: 18px; font-family:'Ortica-Light';"
  );

  image3 = createImg("./assets/images/Occhiali.png");
  image3.position(0, 2900);
  image3.size(width, height);

  myText5 = createElement("h1", "<b>OUR REFLECTIONS</br>");
  myText5.style(
    "position: absolute; top: 3500px; padding-top: 300px; padding-bottom: 270px;left:50%; transform: translate(-50%, 0%); text-align:center; font-size: 30px; font-family:'Ortica-Light';"
  );

  myText6 = createElement(
    "p",
    "The scenario is much more difficult to manage than we think. It may be too late <br> to change a mechanism whose pattern we barely understand. <br> <br> <br> Ultimately, we do not intend to offer simplistic solutions, but hope <br> for a positive awareness that will lead to <b>independent attempts to change <br>our perspective and develop our critical sense. </b><br>"
  );
  myText6.style(
    "position: absolute; top: 3600px; padding-top: 300px; padding-bottom: 270px;left:50%; transform: translate(-50%, 0%); text-align:center; font-size: 18px; font-family:'Ortica-Light';"
  );

  myText7 = createElement(
    "p",
    "Politecnico di Milano - Anthropology of Communication <br> A.A. 2022/2023 <br> Professor Derrick de Kerckhove <br> Team Project: <br> Denise Beretta, Noemi Capparelli, Matilde Cirafici, Michela Chignoli <br> Francesca Curati, Francesca Mattiacci, Claudia Pezzini, Zeya Wu     "
  );
  myText7.style(
    "position: absolute; top: 5000px; left:100px; text-align:left; padding-bottom: 100px; font-size: 12px; font-family:'Ortica-Light';"
  );

  logoPoli = createImg("./assets/images/Poli.png");
  logoPoli.size(319 / 1.5, 94 / 1.5);
  logoPoli.style("position: absolute; top: 5000px; right:100px;");
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#F2F2F2");
  image(image1, width / 2, 290, image1.width / 1.5, image1.height / 1.5);
  image2.position(0, 1400);
  image2.size(width, height);
  image3.position(0, 2900);
  image3.size(width, height);
}
