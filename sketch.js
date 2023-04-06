
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	groundObj= new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1400,600,20,120)
	
}

function setup() {
	createCanvas(1800, 1000);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(100,600,10,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  groundObj.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW) {
		
		restitution:0.9;
		frictionAir:0.35;
	}
}



