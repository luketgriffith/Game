import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var meHeight = 20;
var meWidth = 20;
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
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
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
        meLocationX += 2;
    } else if(leftPressed){
        meLocationX -= 2;
    } else if(upPressed){
        meLocationY -= 2;
    } else if(downPressed){
        meLocationY += 2;
    }
  x += dx;
  y += dy;

}
setInterval(draw, 10);
