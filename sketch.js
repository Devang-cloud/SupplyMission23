var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side1,side2,side3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1Sprite=createSprite(400,655,200,10 );
	side1Sprite.shapeColor=color(255,0,0)

	side2Sprite=createSprite(300,height-90,20,100 );
	side2Sprite.shapeColor=color(255,0,0)

	side3Sprite=createSprite(500,height-90,20,100 );
	side3Sprite.shapeColor=color(255,0,0)
	
	

	
	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, 650,width,10 , {isStatic:true} );
	World.add(world, ground);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	side1=Bodies.rectangle(400,639,200,10,{isStatic:true});
	World.add(world,side1);
	side2=Bodies.rectangle(300,650,20,100,{isStatic:true});
	World.add(world,side2);
	side3=Bodies.rectangle(500,650,20,100,{isStatic:true});
	World.add(world,side3);
 

	//Create a Ground
	

 

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  /*side1Sprite.x=side1.x
  side1Sprite.y=side1.y
  side2Sprite.x=side2.x
  side2Sprite.y=side2.y
  side3Sprite.x=side3.x
  side3Sprite.y=side3.y*/
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



