let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;
let logoPoli;
let myFont;
let myText1;
let myText2;
let myText3;
let myText4;
let myText5;
let myText6;
let myText7;

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

  image9 = createImg("./assets/images/Sfondo.png");
  image9.style("position:absolute; top: 640px; right:0px; cursor:pointer");
  image9.size(970 / 2.4, 978 / 1.3);
  image9.mousePressed(goShattered);

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
    "position: absolute; top: 2100px; padding-top: 350px; padding-bottom: 270px;left:50%; transform: translate(-50%, 0%); text-align:center; font-size: 18px; font-family:'Ortica-Light';"
  );

  image3 = createImg("./assets/images/Occhiali.png");
  image3.position(0, 2900);
  image3.size(width, height);

  myText5 = createElement("h1", "<b>OUR REFLECTIONS</br>");
  myText5.style(
    "position: absolute; top: 3500px; padding-top: 300px; padding-bottom: 270px;left:50%; transform: translate(-50%, 0%); text-align:center; font-size: 25px; font-family:'Ortica-Light';"
  );

  myText6 = createElement(
    "p",
    "The scenario is much more difficult to manage than we think. It may be too late <br> to change a mechanism whose pattern we barely understand. <br> <br> <br> Ultimately, we do not intend to offer simplistic solutions, but hope <br> for a positive awareness that will lead to <b>independent attempts to change <br>our perspective and develop our critical sense. </b><br>"
  );
  myText6.style(
    "position: absolute; top: 3600px; padding-top: 300px; padding-bottom: 300px;left:50%; transform: translate(-50%, 0%); text-align:center; font-size: 18px; font-family:'Ortica-Light';"
  );

  image4 = createImg("./assets/images/CaseStudies.png");
  image4.style("position:absolute; top: 4250px; left: 100px; cursor:pointer");
  image4.size(490 / 1.2, 628 / 1.2);
  image4.mousePressed(goCaseStudy);

  image5 = createImg("./assets/images/SocialDilemma.png");
  image5.style("position:absolute; top: 4480px; left: 400px; cursor:pointer");
  image5.size(450 / 1.2, 666 / 1.2);
  image5.mousePressed(goSocialDilemma);

  image6 = createImg("./assets/images/NewsEchoChamber2.jpg");
  image6.style("position:absolute; top: 4300px; right: 100px; cursor:pointer");
  image6.size(819 / 1.2, 523 / 1.2);
  image6.mousePressed(goNewsEcho);

  image7 = createImg("./assets/images/EchoChamber.png");
  image7.style("position:absolute; top: 5020px; left: 150px; cursor:pointer");
  image7.size(790 / 1.2, 445 / 1.2);
  image7.mousePressed(goEchoChamber);

  image10 = createImg("./assets/images/Ovid.png");
  image10.style("position:absolute; top: 4700px; right: 350px; cursor:pointer");
  image10.size(461 / 1.3, 714 / 1.3);
  image10.mousePressed(goOvid);

  image8 = createImg("./assets/images/ShatteredGlass.png");
  image8.style("position:absolute; top: 5000px; right: 100px; cursor:pointer");
  image8.size(340 / 1.3, 500 / 1.3);
  image8.mousePressed(goShattered);

  myText7 = createElement(
    "p",
    "<b> Politecnico di Milano - Anthropology of Communication </b><br> A.A. 2022/2023 - Professor <b> Derrick de Kerckhove </br> <br> <b>Team Project:</b> <br> Denise Beretta, Noemi Capparelli, Matilde Cirafici, Michela Chignoli <br> Francesca Curati, Francesca Mattiacci, Claudia Pezzini, Zeya Wu     "
  );
  myText7.style(
    "position: absolute; top: 5520px; left:100px; text-align:left; padding-bottom: 50px; font-size: 12px; font-family:'Ortica-Light';"
  );

  logoPoli = createImg("./assets/images/Poli.png");
  logoPoli.size(319 / 1.5, 94 / 1.5);
  logoPoli.style("position: absolute; top: 5560px; right:100px;");
}

function goCaseStudy() {
  window.open(
    "https://datasociety.net/wp-content/uploads/2017/05/DataAndSociety_CaseStudies-MediaManipulationAndDisinformationOnline.pdf"
  );
}

function goSocialDilemma() {
  window.open("https://www.youtube.com/watch?v=uaaC57tcci0");
}

function goNewsEcho() {
  window.open(
    "https://theconversation.com/how-to-check-if-youre-in-a-news-echo-chamber-and-what-to-do-about-it-69999"
  );
}

function goEchoChamber() {
  window.open("https://www.techopedia.com/definition/23423/echo-chamber");
}

function goOvid() {
  window.open("http://anthony.sogang.ac.kr/Classics/OvidEchoNarcissus.htm");
}

function goShattered() {
  window.open("https://www.youtube.com/watch?v=LTeK1v6Qx_I");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#F2F2F2");
  image(image1, width / 2, 290, image1.width / 1.5, image1.height / 1.5);
  image2.position(0, 1400);
  image2.size(width, height);
  image3.position(0, 2900);
  image3.size(width, height);
}
