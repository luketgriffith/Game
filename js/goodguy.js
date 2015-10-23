var Goodguy = function (params) {  //good guy constructor
  params = params || {};
  this.name = params.name;
  this.health = params.health;
  this.die = function(){
    alert('you died');
  }
}
var you = new Goodguy();  //new good guy, you
you.name='Darth';
you.health= 100;
you.die = function(){
  alert('you are so dead');
}

export default Goodguy;
export default you;