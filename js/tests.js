import Goodguy from './main.js'
console.log(Goodguy);
(function() {
  'use strict';

var Goodguy;

// var you = new Goodguy;
describe('Goodguy', function () {

  
  describe('Creating a new Goodguy', function () {



        it('should be an instance of Goodguy', function () {
          expect(you).to.be.an.instanceof(Goodguy);
        });

        it('should have a health', function () {
          expect(you.health).to.equal(100);
        });
        
        it('should have a die function', function () {
          expect(you.die).to.equal(function(){
          alert('you died');
          });
        });
  });

});


}());