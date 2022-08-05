

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
}

var ground
var ball

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

ground=new Ground(200,390,400,20)

var ball_options={
	isStatic:false,
	restituition:0.3,
	friction:0,
	density:1.2
}
	//Create the Bodies Here.

	ball = Bodies.circle(220,100,20,ball_options);
	World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  background(51);

ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  Engine.update(engine)
	
	rectMode(CENTER);
  background(0);
  
Matter.Body.applyForce()

}
groundObj.display()
  drawSprites();
 




