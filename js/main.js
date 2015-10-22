import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Hello, World');
var canvas = document.getElementById("canvas");


var Goodguy = function(canvas, health){   //making a Goodguy constructor
  this.health = health,
  this.die = function(){
    console.log('you died');

  }
}
var me = new Goodguy;  //instance of Goodguy
me.health = 100;
console.log(me);
var enemies = [$('#enemy'), $('#enemy2'), $('#enemy3'), $('#enemy4'), ];

var animate = function(y) {
          _.each(y, function(x){
           x.animate({
           left: Math.random()*200, 
           bottom:  Math.random()*200,
           right: Math.random()*200,
           top: Math.random()*200,
           }, 1000, 'linear', function(){
             animate(enemies);
          });
})};          
animate(enemies);
        




$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    $('#wat').animate({
      left: "-=20",
      
    }, 50);

  }
  else if(e.keyCode == 39) { // right
    $('#wat').animate({
      left: "+=20",
      
    }, 50);

  }
  else if(e.keyCode == 38){
    $('#wat').animate({
      bottom: '+=20',
      
    }, 50);

  }
    else if(e.keyCode == 40){
    $('#wat').animate({
      bottom: '-=20',
      
    }, 50);

} e.preventDefault();

});