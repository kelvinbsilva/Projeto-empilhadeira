const path = require('path')
const express = require('express');
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');
const Operadores = require('./models/operadores');
const Coletor = require('./models/coletor');
const Empilhadeiras = require('./models/empilhadeira');
const db = new Sequelize({database: 'smp-br-app', username: 'root',password: '', host: 'localhost',
dialect:'mysql'})

db.authenticate().then(function(){
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

Operadores.init(db);
Coletor.init(db);
Empilhadeiras.init(db);

Coletor.associate(db.models);
Operadores.associate(db.models);

module.exports = db;

 