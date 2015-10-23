import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var ballRadius = 10;
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
console.log(you); 

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
  if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
  };
  if(x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
  };  
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
  if(meLocationY + meHeight/2  == y + 10 && meLocationX + meWidth/2 == x + 10){
    alert('meow');
    you.health = you.health - 20;
    console.log(you.health);
  }
  if(meLocationY - meHeight/2 == y - 10 && meLocationX - meWidth/2 == x - 10){
    alert('meow');
    you.health = you.health - 20;
    console.log(you.health);
  }
  if(meLocationY - meHeight/2 == y - 10 && meLocationX + meWidth/2 == x + 10){
    alert('meow');
    you.health = you.health - 20;
    console.log(you.health);
  }
    if(meLocationY + meHeight/2 == y + 10 && meLocationX - meWidth/2 == x - 10){
    alert('meow');
    you.health = you.health - 20;
    console.log(you.health);
  }
};
setInterval(draw, 10);
