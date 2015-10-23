import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var badWidth = 20;
var meHeight = 20;
var meWidth = 20;
var meLocationX = (canvas.width-meWidth)/2;
var meLocationY = (canvas.height-meHeight)/2
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var Goodguy = function (params) {
  params = params || {};
  this.name = params.name;
  this.health = params.health;
  this.die = function(){
    alert('you died');
  }
}

var you = new Goodguy();
you.name='Darth';
you.health= 100;
you.die = function(){
  alert('you are so dead');
}


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
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dude();
  drawMe();
 
    $('.healthMon').text(you.health);
    if(x + dx > canvas.width-badWidth || x + dx < 0) {
        dx = -dx;
    }
    if(y + dy > canvas.height-badWidth || y + dy < 0) {
        dy = -dy;
    }    


  if(rightPressed){
        meLocationX = meLocationX += 1;
    } else if(leftPressed){
        meLocationX = meLocationX -= 1;
    } else if(upPressed){
        meLocationY = meLocationY -= 1;
    } else if(downPressed){
        meLocationY = meLocationY += 1;
    }
   x += dx;
   y += dy;
   var z = ((x-meLocationX)*(x-meLocationX)) + ((y-meLocationY)*(y-meLocationY))
   var d= Math.sqrt(z);
   
   if( d < 20){

    alert('hit!');
      
     dx= -dx;
     dy= -dy;
  
     you.health= you.health - 20;

     

     if (you.health === 0){
        you.die();


     }
    
   }
};
setInterval(draw, 10);
