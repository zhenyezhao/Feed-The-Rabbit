var garden,rabbit;
var gardenImg,rabbitImg;
var orangeLeafImg,appleImg,redLeafImg
var orangeLeaf,apple,redLeaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeafImg=loadImage("orangeLeaf.png")
  appleImg=loadImage("apple.png")
  redLeafImg=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX;
  drawSprites();
  var select=Math.round(random(1,3));
  if(frameCount%50==0){
    if(select==1){
      createOrange()
    }
    else if(select==2){
      createRed();
    }
    else{
      createApple();
    }
  }

}
function createOrange(){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale=0.05;
  orangeLeaf.velocityY=+3
  orangeLeaf.lifetime=150;

}
function createRed(){
  redLeaf=createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale=0.05;
  redLeaf.velocityY=+3
  redLeaf.lifetime=150;
  
}
function createApple(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=+3
  apple.lifetime=150;
  
}