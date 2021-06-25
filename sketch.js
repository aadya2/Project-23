const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1, red2, red3;
var cloud1, cloud2, cloud3, cloud4, cloud5, cloud6;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	angleMode(RADIANS);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.3 , isStatic:true});
	World.add(world, packageBody);
	
	cloud1 = new Cloud(300, 200);
	cloud2 = new Cloud(100, 200);
	cloud3 = new Cloud(500, 200);	
	cloud4 = new Cloud(480, 100);
	cloud5 = new Cloud(680, 140);
	cloud6 = new Cloud(220, 110);


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	red1 = new Basket(370, 650, 200, 20, PI*2);
	red2 = new Basket(270, 600, 120, 15, PI/2);
	red3 = new Basket(470, 600, 120, 15, PI/2);
}

function draw() {
 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  red1.display();
  red2.display();
  red3.display();

  cloud1.display();
  cloud2.display();
  cloud3.display();
  cloud4.display();
  cloud5.display();
  cloud6.display();

  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	 packageSprite.scale = 0.2 ;
	 packageBody.velocityY = 5;
	
	 //packageBody = Bodies.circle(isStatic: true);
	
	 Matter.Body.setStatic(packageBody, false);

    

	}
}



