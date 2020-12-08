const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, dustbinImage;
var ground;
var paper;



function preload() {

	//loading dustbinImage
	dustbinImage = loadImage("dustbingreenImageProject25.png")
}



function setup() {
	
	createCanvas(1360,600);

	//create engine and add the world to the engine
	engine = Engine.create();
	world = engine.world;

	//creating new objects
	ground = new Ground (700,570,1400,10);
	dustbin1 = new Dustbin (1035,505,20,100);
	dustbin2 = new Dustbin (1100,555,150,20)
	dustbin3 = new Dustbin (1165,505,20,100);
	paper = new Paper (200,500,20);
	
	//update "Engine" with the "engine" and run it 
	Engine.run(engine);
  
}



function draw() {
  
  background("lightBlue");
  
  //displaying objects
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  paper.display();

  //adding image for dustbin(also written in class Dustbin)
  imageMode(CENTER);
  image(dustbinImage,1097,475,175,180);
 
}



//function 
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

	}
}
