const express = require('express');
const exphbs  = require('express-handlebars');
const config = require('config');
const app = express();
//const { Sequelize } = require('sequelize');
const _ = require('lodash');
const db = require('./db');
const User = require('./models/User');

//var db_url=`${config.get('app.db.type')}://${config.get('app.db.username')}:${config.get('app.db.password')}@${config.get('app.db.host')}:${config.get('app.db.port')}/${config.get('app.db.database')}`;
//const db = new Sequelize(db_url);

// (async function(){
//     try {
//         await db.authenticate();
//         console.log('db connection has been established successfully.');
//     } catch (error) {
//         console.error('unable to connect to the db:', error);
//         process.exit(1);
//     } finally{        
//     }
// }());
    
//User.create({username: "hello", name: "name", lastname: "lastname"});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {

    
    res.render('home');

});

app.get('/get', function (req, res) {

    if(_.isEmpty(req.query.username)) {
        res.render('error', { error_message: 'username not set'});
    }
    else {
        User.findOne({ where: { username: req.query.username } })
            .then(user => { 
                if(_.isObject(user)) {
                    res.render('data', { name: user.name, lastname: user.lastname });
                }                
                else if(_.isNull(user)) {
                    res.render('error', { error_message: `User not found`});
                }
                else {
                    res.render('error', { error_message: `User not found`});
                }                
            })
            .catch(err => {
                console.log("error:"+err)
                res.render('error', { error_message: `error getting data`});
            })
        //res.render('get', { message: 'not empty'});
    }
    
});

app.get('/set', function (req, res) {    
    // FIXME: no sanity checks performed on input
    if(_.isEmpty(req.query.username) || _.isEmpty(req.query.name) || _.isEmpty(req.query.lastname)) {
        res.render('error', { error_message: 'username, name, or lastname not set'});
    }else {
        User.create({username: req.query.username, name: req.query.name, lastname: req.query.lastname})
            .then(user => {
                if(_.isObject(user)) {                    
                    res.render('info', { info_message: `user ${user.username} saved`});
                } 
                else {
                    res.render('error', { error_message: `user ${req.query.username} not saved`});
                }                
            })
            .catch(err => {                
                res.render('error', { error_message: `user ${req.query.username} not saved`});
            })        
    }
    
});

app.listen(3000);

