var movingrect
var fixedrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite (400,200,150,200)
  fixedrect = createSprite (500,200,70,70)
    
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
  
  
  
}

function draw() {
  background("orange"); 
  movingrect.x = mouseX
  movingrect.y = mouseY 
  drawSprites();
if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
&& fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 
&& movingrect.y - fixedrect.y < fixedrect.height/2 + fixedrect.height/2
&&fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
{
  movingrect.shapeColor = "red" 
  fixedrect.shapeColor = "red"
}
else {
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
}

}