var assert = require('chai').assert
var r = require('../../../../../');

describe('Root require from top to deep deps', function(){
  describe('require the module iself', function(){
    it('should require a non index.js', function(){
      assert.equal(r, r('index.js'));
    });
  });

  describe('require a non index.js', function(){
    it('should require a non index.js', function(){
      assert.equal(require('../../../../module/module.js'), r('test/module/module.js'));
    });

    it('should require a index.js automatically', function(){
      assert.equal(require('../../../../othermodule'), r('test/othermodule'));
    });

    it('should require a nested path with non problem', function(){
      assert.equal(require('../../../../some/nested/path'), r('test/some/nested/path'));
    });
  });
});