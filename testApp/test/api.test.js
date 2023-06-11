var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

chai.use(chaiHttp);

describe('1 - Testing the home page',()=>{
    it('should return status code 200(OK)',()=>{
        chai.request(`http://localhost:6500`)
        .get('/')
        .then((response)=>{
            expect(response).to.have.status(200);
        })
        .catch(err=>{
            throw(err);
        })
    })
})

describe('2 - Testing the APIs',()=>{

    it('should return status code 200(OK)',()=>{
        chai.request(`http://localhost:6500`)
        .get('/allMovies')
        .then((response)=>{
            expect(response).to.have.status(200);
        })
        .catch(err=>{
            throw(err);
        })
    })
     // negative test case fro get APIs
    it('should not return status code !201(created)',()=>{

        chai.request(`http://localhost:6500`)
        .get('/movies/db')
        .then((response)=>{
            assert.notEqual(response.statusCode,201);
        })
        .catch(err=>{
            throw(err);
        })
    })

    it('should return status code 200(OK)',()=>{

        chai.request(`http://localhost:6500`)
        .get('/movies/db')
        .then((response)=>{
            assert.notEqual(response.statusCode,201);
        })
        .catch(err=>{
            throw(err);
        })
    })

    it('should return status code 200(OK)',()=>{
        chai.request(`http://localhost:6500`)
        .get('/allMovies')
        .then((response)=>{
            expect(response.text).to.be.an('String');
        })
        .catch(err=>{
            throw(err);
        })
    })

    // dont return error. but he info
    // htpp code -> data  
})

describe('3 - Testing the udner dev apis',()=>{
    it('should return status code 404(for under dev) ',()=>{
        chai.request(`http://localhost:6500`)
        .get('/inDev')
        .then((response)=>{
            expect(response).to.have.status(404);
        })
        .catch(err=>{
            throw(err);
        })
    })
})