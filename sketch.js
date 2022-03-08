var man 
var path
var boder1
var boder2
var bomb

function preload(){
  //pre-load images
 man_running = loadAnimation("runner-1.png","runner-2.png")
bombImage = loadImage("bomb.png")

pathImage = loadImage("path.png")



}

function setup(){
  


  path = createSprite(200,180,400,20);
  path.addImage("path",pathImage);
  path.y = path.width /2;
  path.velocityY = 4;

  man = createSprite(205,350,20,20);
  man.addAnimation("running", man_running);
  man.scale = 0.1;
  createCanvas(400,400);

  
  bomb = createSprite(200,0);
bomb.velocityY = 4
bomb.addImage(bombImage)
bomb.scale = 0.1
  
  //create sprites here
  

boder1=createSprite(30,300,65,200);
boder2=createSprite(380,300,65,200);
boder1.visible=false
boder2.visible=false

}

function draw() {
  background(0);
if(path.y>400)
{
  path.y=200
}
man.x=World.mouseX

man.collide(boder1)
man.collide(boder2)

  drawSprites()
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
  
  }}