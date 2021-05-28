const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world; 
var backgroundImg;

//var groundImg;

//var box;

// Defining Ground
var ground1;

// Defining Walls
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;

//Defining Plinko
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10;
var plink11, plinko12, plinko13, plinko14, plinko15, plinko16, plinko17, plinko18, plinko19;
var plinko20;
var plinko21, plinko22, plinko23, plinko24, plinko25, plinko26, plinko27, plinko28, plinko29;
var plinko30, plinko31, plinko32;

var particles = [] ;
var score =0;
var ball;

function preload(){
  backgroundImg = loadImage("background.jpg")

// groundImg = loadImage("base.png");
}

  function setup() {
  createCanvas(1365,600);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(355,597,20000,10);
  
  //Walls
  //Left Side
  wall1 = new Walls(333,595,10,5000);
  //Right Side
  wall2 = new Walls(948,597,10,5050);
  wall3 = new Walls(455,595,10,500);
  wall4 = new Walls(557,592,10,495);
  wall5 = new Walls(658,598,10,505);
  wall6 = new Walls(751,591,10,495);
  wall7 = new Walls(847,597,10,505);

  //box = new Ground(670,299,900,580);
  
  //For circle point
 ///wall8 = new Walls(238,112,100,10);

  //Plinko
  plinko1 = new Plinko(371,270,10);
  plinko2 = new Plinko(432,270,10);
  plinko3 = new Plinko(485,270,10);
  plinko4 = new Plinko(545,269,10);
  plinko5 = new Plinko(601,269,10);
  plinko6 = new Plinko(659,268,10);
  plinko7 = new Plinko(722,267,10);
  plinko8 = new Plinko(778,266,10);
  plinko9 = new Plinko(835,265,10);
  plinko10 = new Plinko(895,266,10);

  plinko11 = new Plinko(395,204,10);
  plinko12 = new Plinko(461,202,10);
  plinko13 = new Plinko(515,200,10);
  plinko14 = new Plinko(571,202,10);
  plinko15 = new Plinko(625,202,10);
  plinko16 = new Plinko(689,200,10);
  plinko17 = new Plinko(746,200,10);
  plinko18 = new Plinko(800,200,10);
  plinko19 = new Plinko(860,202,10);
  plinko20 = new Plinko(916,200,10);

  plinko21 = new Plinko(366,112,10);
  plinko22 = new Plinko(422,110,10);
  plinko23 = new Plinko(480,112,10);
  plinko24 = new Plinko(540,112,10);
  plinko25 = new Plinko(597,111,10);
  plinko26 = new Plinko(649,111,10);
  plinko27 = new Plinko(710,110,10);
  plinko28 = new Plinko(766,111,10);
  plinko29 = new Plinko(821,112,10);
  plinko30 = new Plinko(881,112,10);
  
  plinko31 = new Plinko(355,204,10);
  plinko32 = new Plinko(921,113,10);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  //Direction Text
  textSize(20);
  fill("black");
  text(mouseX + ',' + mouseY, 23, 22);
  
  // Displaying Ground
 fill("cyan")
 ground1.display();

 strokeWeight(3);
 stroke("cyan");
 wall1.display();
 wall2.display();

 strokeWeight(0);
 stroke("white")
 fill("black");
 wall3.display();
 wall4.display();
 wall5.display();
 wall6.display();
 wall7.display();
 //wall8.display();

 //Plinko
 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();
 plinko10.display();

 plinko11.display();
 plinko12.display();
 plinko13.display();
 plinko14.display();
 plinko15.display();
 plinko16.display();
 plinko17.display();
 plinko18.display();
 plinko19.display();
 plinko20.display();

 plinko21.display();
 plinko22.display();
 plinko23.display();
 plinko24.display();
 plinko25.display();
 plinko26.display();
 plinko27.display();
 plinko28.display();
 plinko29.display();
 plinko30.display();

 plinko31.display();
 plinko32.display();

//imageMode(CENTER)
//image(groundImg,ground1.position.x,ground1.position.y,4000,40);
  
  //strokeWeight(5)
  //stroke(255)
  //fill(178, 235, 152)
  //box.display();
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

 for(var i = 0 ; i < particles.length ; i++){
   particles[i].display();
 }

    
 
 
  drawSprites();
}