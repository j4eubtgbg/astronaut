var bath,b;
var astronaut;
var gym,g;
var brush,b2;
var drink,d;
var eat,e;
var sleep,s;
var iss,bg;
var move,m;
var edges;


function preload(){
bg = loadImage('iss.png');
sleep = loadAnimation('sleep.png');
brush = loadAnimation('brush.png');
gym = loadAnimation('gym1.png','gym2.png');
eat = loadAnimation('eat1.png','eat2.png');
drink = loadAnimation('drink1.png','drink2.png');
move = loadAnimation('move.png','move1.png');
bath = loadAnimation('bath1.png','bath2.png');
}


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  edges = createEdgeSprites();
  iss = createSprite(400,200);
  iss.addImage('ew',bg);
  iss.scale = 0.23;

  astronaut = createSprite(300,230);
  astronaut.addAnimation('13',sleep);
  astronaut.scale = 0.05;

  background(255,255,255);  
 

  if(keyDown('UP_ARROW')){
    astronaut.addAnimation('brushing',brush);
    astronaut.changeAnimation('brushing');
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  if(keyDown('DOWN_ARROW')){
    astronaut.addAnimation('eat',eat);
    astronaut.changeAnimation('eat');
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  if(keyDown('LEFT_ARROW')){
    astronaut.addAnimation('drink',drink);
    astronaut.changeAnimation('drink');
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  if(keyDown('RIGHT_ARROW')){
    astronaut.addAnimation('bath',bath);
    astronaut.changeAnimation('bath');
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  if(keyDown('m')){
    astronaut.addAnimation('move',move);
    astronaut.changeAnimation('move',move);
    astronaut.y = 350;
    astronaut.velocityX = 3;
    astronaut.velocityY = 3;

  }
  astronaut.bounceOff(edges);
  drawSprites();
}