/*global defineSuite*/
defineSuite([
         'Renderer/Command',
     ], function(
         Command) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    it('constructs', function() {
        var c = new Command();
        expect(c.boundingVolume).toBeUndefined();
        expect(c.modelMatrix).toBeUndefined();
        expect(c.offset).toBeUndefined();
        expect(c.count).toBeUndefined();
        expect(c.primitiveType).toBeUndefined();
        expect(c.renderState).toBeUndefined();
        expect(c.shaderProgram).toBeUndefined();
        expect(c.uniformMap).toBeUndefined();
        expect(c.vertexArray).toBeUndefined();
    });

});