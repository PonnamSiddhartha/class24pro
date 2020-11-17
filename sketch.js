const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1,box2,box3,ground,paperObject
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
  ground = new Ground(400,400,750,20);
  var paperObject_options = {
    restitution :0.7
  }
  paperObject = Bodies.circle(300,100,25,paperObject_options);
  World.add(world,paperObject);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x,paperObject.position.y,25,25);
  
  
  ground.display();
  drawSprites();
 
}
function keyPressed() {
  
	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	 
   }
 } 


