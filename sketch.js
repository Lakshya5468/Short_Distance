const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, bodies;
var paperObject,groundObject,wall1Object,wall2Object,wall3Object,bin,binImage,paperImage;

function preload()
{
	paperImage = loadImage("paper.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paperObject = new Paper(200,500,50);
  //paperObject.addImage(paperImage);
	groundObject = new Ground(width/2,height-10,width,20);
  wall1Object = new Bin(570,505,20,100);
  //wall2Object = new Bin(710,505,20,130);
 // wall3Object = new BinBottom(640,580,140,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  paperObject.display();
  groundObject.display();
  wall1Object.display();
  //wall2Object.display();
 // wall3Object.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:+70,y:-75});
  }
}