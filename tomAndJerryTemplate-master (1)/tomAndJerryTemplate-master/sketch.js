var bg,tom,jerry,tomImage1,tomImage2,tomImage3,jerryImage1,jerryImage2,jerryImage3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
     tomImage1= loadAnimation("images/cat1.png");
      tomImage2=loadAnimation("images/cat2.png","images/cat3.png"); 
      tomImage3= loadAnimation("images/cat4.png"); 
      jerryImage1=loadAnimation("images/mouse1.png"); 
      jerryImage2= loadAnimation("images/mouse2.png","images/mouse3.png");
       jerryImage3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(850,600);
tom.addAnimation("tomSleeping",tomImage1)
tom.scale=0.2
jerry=createSprite(200,600);
jerry.addAnimation("jerryStanding",jerryImage1)
jerry.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) 
    { tom.velocityX=0;
     tom.addAnimation("tomLastImage", tomImage3);
      tom.x =300;
       tom.scale=0.2;
        tom.changeAnimation("tomLastImage"); 
        jerry.addAnimation("jerryLastImage", jerryImage3); jerry.scale=0.15;
         jerry.changeAnimation("jerryLastImage"); }
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){ 
        tom.velocityX = -5; tom.addAnimation("tomRunning", tomImage2); 
        tom.changeAnimation("tomRunning");
         jerry.addAnimation("jerryTeasing", jerryImage2); 
         jerry.frameDelay = 25;
          jerry.changeAnimation("jerryTeasing"); }
  //For moving and changing animation write code here


}
