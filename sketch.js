

function preload(){
  bgImage = loadImage("./images/bg.png");
  earthImage = loadImage ("./images/earth.png");
  moonImage = loadImage ("./images/moon.png");
  spacecraftImage = loadImage ("./images/spacecraft.png");
  bulletImage = loadImage ("./images/bullet.png")
}

function setup() 
{
  createCanvas(1800,800);

  backg = createSprite (0,0)
  backg.scale = 5;
  backg.addImage("bgImg", bgImage);

  wall1 = createSprite(900,780,1800,20);

 

  spaceCraft = createSprite(150,200);
  spaceCraft.addImage("spcImg", spacecraftImage);
  spaceCraft.scale = 2.2;
  
  earth = createSprite(windowWidth - 420, windowHeight - 370);
  earth.addImage("earthImg", earthImage);
  earth.scale = 0.7;

  moon = createSprite(windowWidth - 620, windowHeight - 530);
  moon.addImage("moonImg", moonImage);
  moon.scale = 0.4;

  bullet = createSprite ( spaceCraft.x+10,spaceCraft.y,5,5);
  bullet.addImage("bulletImg",bulletImage);
  bullet.y = spaceCraft.y;
  bullet.x = spaceCraft.x+10;
 
  enemy = createSprite(200,200,30,40)
  enemy.velocityX = -9;
  enemy.velocityY = -3;
  enemy.y = Math.round(random(10,200))
  
}

function draw() {


edges = createEdgeSprites();
  
enemy.bounceOff(edges[0]);
enemy.bounceOff(edges[2]);
enemy.bounceOff(edges[3]);
enemy.bounceOff(edges[1]);
  
//making the background infinite
backg.velocityX = -1;

//resetting the background
if (backg.x <= -150){
  backg.x =230;
}

//making spacecraft bounce off edges
spaceCraft.bounceOff(edges);

//making spacecraft move according to mouse
spaceCraft.y = World.mouseY;
spaceCraft.setCollider("circle", 0,0,40);
spaceCraft.debug = true;

//spawnEnemies();

  //bullet.x = spaceCraft.x;
  //bullet.y = spaceCraft.y;
  if(keyDown("space")){
    bullet.velocityX = random(20,40);
      bullet.velocityY = random(10,20); 
    }
  bullet.depth = spaceCraft.depth;
  spaceCraft.depth = spaceCraft.depth+1;
  
  
    //vel_bullet();
    
  bullet.bounceOff(edges);
  //bullet.bounceOff(leftEdge);
  //bullet.bounceOff(rightEdge);
  //bullet.bounceOff(wall1);
//createBullet();

drawSprites();
}

/*function movingMoon(){
  radians = 0;
  velocity = 0.05;
  radians += moon.velocity;
  moon.x = moon.x +Math.cos(radians)*100;
  moon.y = moon.y +Math.sin(radians)*100;
}*/
// rotating moon
//rand num
// spacecraft collide

/*function createBullet(){
  bullet = createSprite ( spaceCraft.x+10,spaceCraft.y,0.1,0.1);
  bullet.x = spaceCraft.x;
  bullet.y = spaceCraft.y;
  
 
  //adding velocity and bouncing off functions to the bullets
if (keyWentDown("space")){
  bullet.addImage("bulletImg",bulletImage);
  bullet.depth = spaceCraft.depth;
  spaceCraft.depth = spaceCraft.depth+1;
  bullet.y = spaceCraft.y;createEdgeSprites();
  bullet.x = spaceCraft.x+10;
  

}
  bullet.velocityX = random(20,40);
  bullet.velocityY = random(10,20); 
  bullet.bounceOff(wall1);  

}*/
function vel_bullet()
{
 
  
  }

/*function spawnEnemies(){
if (frameCount % 80=== 0){
  enemy = createSprite(1750,80,20,20);
  enemy.velocityX = random(-1,-3);
  enemy.velocityY = random(-1,2.5);

  enemy.bounceOff(edges[0]);
  enemy.bounceOff(edges[1]);
  enemy.bounceOff(edges[2]);
  enemy.bounceOff(edges[3]);
}
}*/
  
