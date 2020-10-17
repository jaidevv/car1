
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(20,200,50,50);
  wall= createSprite(1500,200,60,height/2);
  wall.shapecolour=(80,80,80);
  speed = random(55,90);
  weight = random(400,500);
  car.velocityX=speed;
}

function draw() {
  background("black");  
  if(wall.x-car.x < (wall.x+car.x)/2)
  {
    car.velocityX=0;
    var d= 0.5 * weight * speed * speed/22500;
    if(d > 180)
      {
          car.shapecolour="green";
      }
      if(d < 180 && d > 100)
      {
        car.shapecolour="yellow";
      }
      if(d > 100)
      {
        car.shapecolour="red";
      }

  }
  drawSprites();
}