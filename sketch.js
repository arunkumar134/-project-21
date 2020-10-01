var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200, 60, 20);
  wall=createSprite(1200,200,100,200);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet.velocityX=speed;

}

function draw() 
{
  background(255,255,255);  
 
  console.log(damage);
 if(bullet.collide(wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage<10)
  {
    wall.shapeColor=color(0,128,0);
  }

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }

 }
  drawSprites();
}
