
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,hammer,stone,iron;
var s1,s2,s3,s4,s5,s6,s7;


function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
    ground = new Ground();
	hammer = new Hammer();
	ball = new Rubber();
	stone = new Stone();
	s1 = new Sand(800);
	s2 = new Sand(820);
	s3 = new Sand(860);
	s4 = new Sand(890);
	s5 = new Sand(910);
	s6 = new Sand(950);
	s7 = new Sand(980);
	iron = new Iron();

	Engine.run(engine);
  
}


function draw() {
	background("lightblue");
  
	 Engine.update(engine);
   
	iron.display();
	ball.display();
	ground.display();
	hammer.display();
	stone.display();
	s1.display();
	s2.display();
	s3.display();
	s4.display();
	s5.display();
	s6.display();
	s7.display();
    

  drawSprites();
 
}



