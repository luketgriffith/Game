console.log('Hello, World');
var canvas = document.getElementById("canvas");
var gameSize = { x: canvas.width, y: canvas.height };
console.log(gameSize.x);


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
           left: Math.random()*1000, 
           bottom:  Math.random()*1000,
           right: Math.random()*1000,
           top: Math.random()*1000,
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


  // $("body").key(function(e) {
  // if(e.keyCode == 37) { // left
  //   meLocationX += 5;
  // } else if(e.keyCode == 39) { // right
  //   meLocationX -= 5;
  // } else if(e.keyCode == 38){
  //   meLocationY += 5;
  // } else if(e.keyCode == 40){
  //   meLocationY -= 5;
  // } e.preventDefault();
  // });