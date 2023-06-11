describe('Testing my function',()=>{
    beforeEach(()=>{
        checkresults = 0;
    })
    // it signifies test
    it('Should check response codes the user API',()=>{

        var checkresults = 'hello';
        var array1 = [1,2,3,4,5];
        var chai = require('chai');
        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();

        // test Driven Development
        assert.isArray(array1,'not an Array');

        // API returns Latest 10 users registred
        // 

        // Behavior Driven Development
        expect(array1).to.be.an('array').that.includes(3);
        expect(array1).to.have.lengthOf(10);

        array1.should.be.an('array').that.includes(3);
        array1.should.have.lengthOf(5);
    })
    it('Should check response codes',()=>{

    })

}) 