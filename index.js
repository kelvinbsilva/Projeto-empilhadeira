const mysql = require('mysql');
const path = require('path')
const express = require('express');
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('smp-br-app', 'root','', {host: 'localhost',
dialect: 'mysql' }  )

sequelize.authenticate().then(function(){
  console.log('OK')
}).catch(function(err) {
  console.log('NOK' + err);
})


const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(8080);
app.set('view engine', 'hbs');



 