const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5;
var tree,ground,boy,chain,stone;




function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	mango1 = new Mango(1100,200,30);
	mango2 = new Mango(1000,330,30);
	mango3 = new Mango(1000,200,30);
	mango4 = new Mango(1100,300,30);
	mango5 = new Mango(900,300,30);
	
  	tree = new Tree(1000,680);
  	ground = new Ground(00,680,2300,20);
	boy = new Boy(250,600);
	chain = new Chain(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

 
  fill(0);
  textSize(30);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 100,200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }
}