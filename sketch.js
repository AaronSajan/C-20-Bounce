var a,b;



function setup() {
  createCanvas(1200,800);
  a= createSprite(400, 100, 50, 80);
  a.shapeColor= "green"
  b = createSprite(400,800,80,30)
  b.shapeColor = "blue"
  a.velocityY = -5
  b.velocityY = +5
}

function draw() {
  background(255,255,255);  
//a.x= World.mouseX;
//a.y = World.mouseY;
//console.log(a.x-b.x)
if(a.x-b.x<b.width/2+a.width/2
  && b.x-a.x<b.width/2+a.width/2){
a.velocityX= a.velocityX*(-1)
b.velocityX= b.velocityX*(-1)
  }
  if(a.y-b.y<b.height/2+a.height/2
    && b.y-a.y<b.height/2+a.height/2){
  a.velocityY= a.velocityY*(-1)
  b.velocityY= b.velocityY*(-1)
    }
  drawSprites();
}