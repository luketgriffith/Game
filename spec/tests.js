(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Goodguy = function Goodguy(params) {
  //good guy constructor
  params = params || {};
  this.name = params.name;
  this.health = params.health;
  this.die = function () {
    alert('you died');
  };
};
var you = new Goodguy(); //new good guy, you
you.name = 'Darth';
you.health = 100;
you.die = function () {
  alert('you are so dead');
};

exports['default'] = Goodguy;
exports['default'] = you;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _goodguy = require('./goodguy');

var _goodguy2 = _interopRequireDefault(_goodguy);

var _goodguy3 = _interopRequireDefault(_goodguy);

(function () {
  'use strict';

  // var you = new Goodguy;

  describe('Creating a new Goodguy', function () {

    it('should be an instance of Goodguy', function () {
      expect(_goodguy2['default']).to.be.an('object');
    });
    it('you should be an instance', function () {
      expect(_goodguy3['default']).to.be.an('object');
    });

    it('should have a health', function () {
      expect(_goodguy3['default'].health).to.equal(100);
    });

    it('should have a die function', function () {
      expect(_goodguy3['default'].die).to.be.a('function');
    });
  });
})();

},{"./goodguy":1}]},{},[2])


//# sourceMappingURL=tests.js.map
