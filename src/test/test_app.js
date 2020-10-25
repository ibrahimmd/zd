var expect  = require('chai').expect;
var request = require('request');
var db = require('../db');
var User = require('../models/User');


describe('demo app test', () => {
    before((done) => { //Before each test, empty the database
        User.destroy({
            where: {},
            truncate: true
          }, done())
    });
  
    it('home page content', function(done) {
        request('http://localhost:3000/' , function(error, response, body) {
            expect(body).has.string('home');
            done();
        });
    });

    it('set', function(done) {
        request('http://localhost:3000/set?username=mochatest&name=mocha&lastname=test' , function(error, response, body) {
            expect(body).has.string('mochatest');
            done();
        });
    });
    
    it('get unknown user', function(done) {
        request('http://localhost:3000/get?username=notfound' , function(error, response, body) {
            expect(body).has.string('User not found');
            done();
        });
    });

    it('get mochatest user', function(done) {
        request('http://localhost:3000/get?username=mochatest' , function(error, response, body) {
            expect(body).has.string('mocha test');
            done();
        });
    });    
    


});

