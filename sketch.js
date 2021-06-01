var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 Surface1=createSprite(700,550,150,20);
 Surface2=createSprite(500,550,150,20);
Surface3=createSprite(300,550,150,20);
Surface4=createSprite(100,550,150,20);
Ball=createSprite(50,50,20,20)

    //create box sprite and give velocity

    Surface1.shapeColor="blue";
    Surface2.shapeColor="green";
    Surface3.shapeColor="red";
    Surface4.shapeColor="black";
    Ball.shapeColor="white";

Ball.velocityX=4;
Ball.velocityY=9;
}

function draw() {
    background("yellow");    
    //create edgeSprite
edges=createEdgeSprites();
Ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
if(Surface1.isTouching(Ball)&&Ball.bounceOff(Surface1)){
    Ball.shapeColor="Blue";
}
if(Surface2.isTouching(Ball)&&Ball.bounceOff(Surface2)){
    Ball.shapeColor="green";
}
if(Surface3.isTouching(Ball)&&Ball.bounceOff(Surface3)){
    Ball.shapeColor="red";
}
if(Surface4.isTouching(Ball)&&Ball.bounceOff(Surface4)){
    Ball.shapeColor="black";
}
drawSprites();
}
