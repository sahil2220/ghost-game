gameState = "play"

function preload(){
  backgroundImg=loadImage("tower.png");
  ghostimg=loadImage("ghost-jumping.png")
  dorsimg=loadImage("door.png")
  climberimg=loadImage("climber.png")
}

function setup(){
 createCanvas(600,600)
 bground=createSprite(300,300);
 bground.addImage("for loking",backgroundImg);
 bground.velocityY=-2;
  
  ghost=createSprite(300,400);
  ghost.addImage("main charecter",ghostimg);
  ghost.scale=0.4;
  
  invisibleg=new Group();
  dorsg=new Group();
  climberg= new Group();
}

function draw(){
  background(0);
  
  if (gameState==="play"){
    
  if (climberg.isTouching(ghost)){
    ghost.velocityY=0;                                         
    
  }
  
  if(keyDown("space")){
    ghost.velocityY=-4;
  }
    ghost.velocityY=ghost.velocityY+0.5;
  
  if(keyDown("right")){
    ghost.x=ghost.x+3            
  }
  
  if(keyDown("left")){
    ghost.x=ghost.x-3            
  }
  
  spawndors();
  
  if(bground.y<0){
    bground.y=bground.height/4
  }
     if (ghost.isTouching(invisibleg)){
       gameState="end";
     }
        
  drawSprites();
  }
  if (gameState==="end"){
    textSize(40);
    fill("pink");
    stroke("yellow");
    strokeWeight(5);
    text("GAME OVER",160,300);
    
    
  }
  

  
  
}
 
function spawndors () {
  if(frameCount % 60 === 0) {
    dors=createSprite(300,-20,10,10)
    dors.x=Math.round(random(100,400))
    dors.velocityY=3;
    dors.addImage("abc",dorsimg)
    dorsg.add(dors);
    
    climber=createSprite(300,50,10,10);
    climber.x=dors.x;
    climber.addImage("abcd",climberimg);
    climber.velocityY=3;
    climberg.add(climber);
    
    ghost.depth=dors.depth; 
    ghost.depth=ghost.depth+1;
    
    invisible=createSprite(300,60,climber.width,5);
    invisible.x=climber.x;
    invisible.velocityY=3;
    invisible.visible=false;
    invisibleg.add(invisible);
  }
  
}








