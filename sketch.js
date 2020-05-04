var fixed,moving;


function setup() {
  createCanvas(800,400);
fixed = createSprite(150,40,40,10);
moving = createSprite(200,150,40,10);
}

function draw() {
  background("green"); 
  moving.x = mouseX;
  moving.y = mouseY;
  if(fixed.x-moving.x<fixed.width/2+moving.width/2&&
    moving.x-fixed.x<fixed.width/2+moving.width/2&&
    fixed.y-moving.y<fixed.height/2+moving.height/2&&
    moving.y-fixed.y<fixed.height/2+moving.height/2)
{
  fixed.shapeColor = "black";
  moving.shapeColor = "black";
}
else{fixed.shapeColor = "violet" ;
moving.shapeColor = "violet";

}


  drawSprites();
}