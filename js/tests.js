import Goodguy from './goodguy'
import you from './goodguy';
(function() {
  'use strict';  



// var you = new Goodguy;


 
  describe('Creating a new Goodguy', function () {

    
      
        it('should be an instance of Goodguy', function() {
          expect(Goodguy).to.be.an('object');
        });
        it('you should be an instance', function(){
          expect(you).to.be.an('object');
        })  
        

        it('should have a health', function () {
          expect(you.health).to.equal(100);
        });
        
        it('should have a die function', function () {
          expect(you.die).to.be.a('function');
        });
      });
  


}());
