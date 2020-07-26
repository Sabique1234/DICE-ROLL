//BLUE PRINT FOR SNAKE AND LADDER GAME:-

//100-95-90-85-80-75-70-65-60-55
// 5 -10-15-20-25-30-35-40-45-50

//WAY TO THE TOP :-

//(RIGHT TO LEFT)
//(LEFT TO RIGHT)

//<=<=<=<=<=<=<=<=<=<=
//=>=>=>=>=>=>=>=>=>=>


//VARIABLES FOR SANKE AND LADDER GAME
var  board,board_img;

//PLAYER VARIABLE
var player, player_img;

//RANDOM NUMBER FOR DICE
var rand;

//DICE 
var dice1,dice2,dice3,dice4,dice5,dice6;
var dice

//LOADS THE IMAGES
function preload()
{
 dice1=loadImage("images/dice1.jpg");
 dice2=loadImage("images/dice2.jpg");
 dice3=loadImage("images/dice3.jpg");
 dice4=loadImage("images/dice4.jpg");
 dice5=loadImage("images/dice5.jpg");
 dice6=loadImage("images/dice6.jpg");

 board_img=loadImage("images/board.png");

 player_img=loadImage("images/player.jpg");
}

//SPRITES SETUP
function setup(){
//CAMERA ALIGNMENT
 canvas= createCanvas(displayWidth/2+100,displayHeight-150);

board=createSprite(280,280);
board.addImage(board_img);
board.scale=1;

dice=createSprite(660,495,50,50);
rand=Math.round(random(1,6));

 //PLAYER
 player=createSprite(75,480,30,30);
 player.addImage(player_img);
 player.scale=0.5;
 
 //ASSIGNING RANDOM NUMBER
 //A DICE HAS 6 FACES
 
 //console.log(rand);


}
//INSTRUCTIONS
function draw(){
  background("#1E3D69"); 

//ROLLS THE DICE AFTER PRESSING UP KEY
if(keyDown(UP_ARROW)){
  //diceRoll();
  
   rand=Math.round(random(1,6));
  switch(rand){
    case 1:dice.addImage(dice1);
           break;
    case 2:dice.addImage(dice2);
           break;
    case 3:dice.addImage(dice3);
           break;
    case 4:dice.addImage(dice4);
           break;
    case 5:dice.addImage(dice5);
           break;
    case 6:dice.addImage(dice6);   
    default: break;                  
  }
  dice.scale=0.5;
}
//SHOWS TEXT, ASKING FOR PRESSING THE UP KEY
fill("green");
textSize(20);
text("PRESS UP KEY",585,100);
 
 

  drawSprites();
}

//function diceRoll(){

//}