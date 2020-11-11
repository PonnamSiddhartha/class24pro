const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1,box2,box3,ground,dust
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
    engine = Engine.create();
	world = engine.world;
	box1 = new Box(550,250,10,200);
	box2 = new Box(500,200,20,50)
	box3 = new Box(600,200,55,50)
	dust = new Paper(200,200,50,50)
	ground = new Ground(400,400,750,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  dust.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
  
	if (keyCode === DOWN_ARROW) {
	 Matter.Body.applyFroce(dust.body,dust.body.position,{x:550,y:250});
	 
   }
 }
 

