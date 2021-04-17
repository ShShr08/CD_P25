
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ppr


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new G(width/2,670,width,20);
	dustbinObj=new Dustb(1200,650);
	ppr = new Ppr(this.x,this.y,(this.r-20/2),(this.r-20/2))

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ppr.display();
}

