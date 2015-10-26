
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Goodguy from './goodguy';
import you from './goodguy';


console.log(you);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 


var x = canvas.width/2; //make bad guy 1
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var badWidth = 20;

var hitsound = new Audio('../punch.wav');  


var x2 = canvas.width/5;  //make bad guy 2
var y2 = canvas.height -30;
var dx2 = 1;
var dy2 = -1;
var badWidth2 = 20;
var badHeight = 30


var meHeight = 20;  //get good guy on page
var meWidth= 20;
var meLocationX = (canvas.width-meWidth)/2;
var meLocationY = (canvas.height-meHeight)/2
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;






document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37){
        leftPressed = true;
    } else if(e.keyCode == 38){
        upPressed = true;
    } else if(e.keyCode == 40){
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37){
        leftPressed = false;
    } else if(e.keyCode == 38){
        upPressed = false;
    } else if(e.keyCode == 40){
        downPressed = false;
    }
}

function drawMe() {
    ctx.beginPath();
    ctx.rect(meLocationX, meLocationY, meWidth, meHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

}

function dude(){

  ctx.beginPath();
  ctx.rect(x, y, 20, 20);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

}
function dude2(){

  ctx.beginPath();
  ctx.rect(x2, y2, 20, 20);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

}
var time1 = Date.now();
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
    dude(); //creating bad guy
    dude2();
    drawMe(); //creating good guy
 
    $('.healthMon').text(you.health); //adding health monitor
    var time2 = Date.now();
    var score= (time2-time1)/1000
    $('.scoreMon').text(score);
  
    if(x + dx < 0){ 
      x = canvas.width;
     }
    if(x + dx > canvas.width){
      x = 0;
    } 
    if(y + dy > canvas.height-badHeight || y + dy < 0) {
        dy = -dy;
    }    
    if(x2 + dx2 > canvas.width-badWidth2 || x2 + dx2 < 0) {   //making red guy bounce around
        dx2 = -dx2;
    }
    if(y2 > canvas.height) {  //make red guy go through the top and bottom
        y2 = 0;
    }  
    if(y2 < 0){
      y2 = canvas.height;
    }
    
    if(rightPressed){   //moving Good Guy around
        meLocationX = meLocationX += 1;
            if(meLocationX + meWidth> canvas.width){
             meLocationX = 0 - meWidth;}
    } else if(leftPressed){
        meLocationX = meLocationX -= 1;
            if(meLocationX < 0 ){
             meLocationX = canvas.width;
           }
    } else if(upPressed){
        meLocationY = meLocationY -= 1;
            if(meLocationY < 0){
              meLocationY = canvas.height + me;
            }
    } else if(downPressed){
        meLocationY = meLocationY += 1;
            if(meLocationY + meHeight > canvas.height){
              meLocationY = 0;
            }
    }
   x += dx;
   y += dy;
   x2 += dx2;
   y2 += dy2;
   var z = ((x-meLocationX)*(x-meLocationX)) + ((y-meLocationY)*(y-meLocationY))
   var z2 = ((x2-meLocationX)*(x2-meLocationX)) + ((y2-meLocationY)*(y2-meLocationY))

   var d= Math.sqrt(z);
   var d2= Math.sqrt(z2);
   if( d < 20){
    
        
      $('.hitMon').addClass('show');
      setTimeout( function(){
      $('.hitMon').removeClass('show')
      }, 500)
      $('body').addClass('flash');
      setTimeout(function(){
        $('body').removeClass('flash');
      }, 10)
    if(x< meLocationX){    //making sure bad guy doesn't get 'stuck' on good guy
      x = x - meWidth -2;
    }
    if(y < meLocationY){
      y = y - meHeight -2;
    }
    if(x> meLocationX){
      x= x + meWidth + 2;
    }
    if(y> meLocationY){
      y = y+ meHeight + 2;
    } 
     
     dx= -dx;
     dy= -dy;
     d = 21;
     hitsound.play();
     you.health= you.health - 20;
     if (you.health === 0){
        you.die();
        you.health = 100; 
        time1 = time2; 
        }
    
   }
   if( d2 < 20){
    
      $('.hitMon').addClass('show');
      setTimeout( function(){
      $('.hitMon').removeClass('show')
      }, 500)
      $('body').addClass('flash');
      setTimeout(function(){
        $('body').removeClass('flash');
      }, 10)
    
    // alert('hit!');
    if(x2< meLocationX){    //making sure bad guy doesn't get 'stuck' on good guy
      x2 = x2 - meWidth -2;
    }
    if(y2 < meLocationY){
      y2 = y2 - meHeight -2;
    }
    if(x2> meLocationX){
      x2= x2 + meWidth + 2;
    }
    if(y2> meLocationY){
      y2 = y2+ meHeight + 2;
    } 
     
     dx2= -dx2;
     dy2= -dy2;
     d2 = 21;
     hitsound.play();
     you.health= you.health - 20;
     if (you.health === 0){
        you.die();
        you.health = 100;
        time1 = time2;
      
     }
    
   }
};

setInterval(draw, 10);

export default Goodguy;
