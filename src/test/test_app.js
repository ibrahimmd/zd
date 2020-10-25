var expect  = require('chai').expect;
var request = require('request');
var db = require('../db');
var User = require('../models/User');


describe('demo app test', () => {
    // cleanup db before test
    before((done) => { 
        User.destroy({
            where: {},
            truncate: true
          }).then(() => {
                  done();
          });
    });

  
    it('home page content', function(done) {
        request('http://localhost:3000/' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).has.string('home');
            done();
        });
    });

    it('set', function(done) {
        request('http://localhost:3000/set?username=mochatest&name=mocha&lastname=test' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).has.string('mochatest');
            done();
        });
    });
    
    it('get unknown user', function(done) {
        request('http://localhost:3000/get?username=notfound' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).has.string('User not found');
            done();
        });
    });

    it('get mochatest user', function(done) {
        request('http://localhost:3000/get?username=mochatest' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);    
            expect(body).has.string('mocha test');
            done();
        });
    });    
    


});

