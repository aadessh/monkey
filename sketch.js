
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png",)
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(50,340,20,50);
  monkey.addAnimation( "moving",monkey_running);
  monkey.scale = 0.1;
  
 ground=createSprite(300,380,1200,20)
  ground.velocityX=-2
  FoodGroup=new Group();
  obstacleGroup=new Group();
  var survivaltime= 0
  
  
  
}


function draw() {
background("lightblue");
  drawSprites();
  
  if(ground.x<0){
    ground.x=300
     }
  if(keyDown("space")){
    monkey.velocityY=-10;
    
     
     }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  spawnfood();
  spawnobs();
  survivaltime=Math.round(frameCount/frameRate());
  text("SURVIVAL TIME:"+survivaltime,400,50);
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
     obstacleGroup.setLifetimeEach(-1)
     }
  
}
function spawnfood(){
if(frameCount%100===0){
  banana=createSprite(600,250);
  banana.y=random(180,280)
  banana.velocityX=-2
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.lifetime=300
  FoodGroup.add(banana);
   }
}
function spawnobs(){
if(frameCount%300===0){
 obstacle =createSprite(600,350);
  
  obstacle.velocityX=-2
  obstacle.addImage(obstaceImage )
  obstacle.scale=0.1
  obstacle.lifetime=300
  obstacleGroup.add(obstacle);
   }
}





