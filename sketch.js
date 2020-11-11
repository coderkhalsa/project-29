const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world
var block1 , polygon

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(150,500,100,40);

  polygon = new Polygon(100,200,50,50);
  shooter = new SlingShot(polygon.body,{x:200,y:200});

   //level 1
  block1 = new block(300,440,30,40)
  block2 = new block(330,440,30,40)
  block3 = new block(360,440,30,40)
  block4 = new block(390,440,30,40)
  block5 = new block(420,440,30,40)
  block6 = new block(450,440,30,40)
  block7 = new block(480,440,30,40)

  //level 2
  block8 = new block(330,235,30,40)
  block9 = new block(360,235,30,40)
  block10 = new block(390,235,30,40)
  block11= new block(420,235,30,40)
  block12 =  new block(450,235,30,40)

  //level 3
  block13 = new block(360,440,30,40)
  block14= new block(390,440,30,40)
  block15 = new block(420,440,30,40)
  //top
  block16= new block(390,440,30,40)
 
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  ground.display();  
  polygon.display();
  shooter.display();
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

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shooter.fly();
}