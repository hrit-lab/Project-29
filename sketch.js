const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ground;
var base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,bloack17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
var slingshot;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,580,1200,20);

	base1 = new Ground(1000,300,300,20);
	base2 = new Ground(600,500,400,20);

	block1 = new Block(900,250,50,50);
	block2 = new Block(950,250,50,50);
	block3 = new Block(1000,250,50,50);
	block4 = new Block(1050,250,50,50);
	block5 = new Block(1100,250,50,50);
	block6 = new Block(950,200,50,50);
	block7 = new Block(1000,200,50,50);
	block8 = new Block(1050,200,50,50);
	block9 = new Block(1000,150,50,50);

	block10 = new Block(450,450,50,50);
	block11 = new Block(500,450,50,50);
	block12 = new Block(550,450,50,50);
	block13 = new Block(600,450,50,50);
	block14 = new Block(650,450,50,50);
	block15 = new Block(700,450,50,50);
	block16 = new Block(750,450,50,50);
	block17 = new Block(500,400,50,50);
	block18 = new Block(550,400,50,50);
	block19 = new Block(600,400,50,50);
	block20 = new Block(650,400,50,50);
	block21 = new Block(700,400,50,50);
	block22 = new Block(550,350,50,50);
	block23 = new Block(600,350,50,50);
	block24 = new Block(650,350,50,50);
	block25 = new Block(600,300,50,50);
    polygon = new Polygon(100,200);
	slingshot = new Slingshot(polygon.body,{x:100,y:200});
	Engine.run(engine);
  
}
function draw(){
	background(0);
	text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",200,180);
	fill("white");
	ground.display();
	base1.display();
	base2.display();
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();

	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();
	block18.display();
	block19.display();
	block20.display();

	block21.display();
	 block22.display();
	 block23.display();
	 block24.display();
	 block25.display();
	 polygon.display();
     slingshot.display();
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingshot.fly();
}