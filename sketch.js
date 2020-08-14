
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var handle,ball1;
function preload(){

	
	
}

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;

	
  handle = createSprite(500,250,500,20);
  handle.shapeColor = color(225,0,0);

  bobObject1 = new ball(300,500,20);
  bobObject2 = new ball(400,500,20);
  bobObject3 = new ball(500,500,20);
  bobObject4 = new ball(600,500,20);
  bobObject5 = new ball(700,500,20);
  


	

	

     

	Engine.run(engine);
  
}


function draw() {
	background(0,0,0);
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
  drawSprites();
  
}




