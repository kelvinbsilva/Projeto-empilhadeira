const express = require('express');
const Operadores = require('../models/operadores')
const Empilhadeiras = require('../models/empilhadeira')
const Coletor = require('../models/coletor')
const Filter = require('../controller/filter')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/Dashboard', (req, res) => {
    res.render('dashboard');
});
router.get('/coletor', (req, res) => {
    res.render('coletor');
});
router.get('/Dashboard/acesso', (req, res) => {
    
        res.render('acesso')
});

router.get('/Dashboard/monitoramento', async (req, res) => {
    Coletor.findAll({include:[
        {association: 'empilhadeiras', required: true }, 
        {association: 'operadores', required: true }
    ]}
     ).then(function (coletor) {
        res.render('monitoramento', {
            coletor: coletor
        })
    })
});

router.get('/Dashboard/operadores', async (req, res) => {
    await Operadores.findAll().then(function (operadores) {
        res.render('operadores', {
            operador: operadores
        })
    })
});

router.get('/Dashboard/empilhadeiras', async (req, res) => {
    await Empilhadeiras.findAll().then(function (empilhadeiras) {
        res.render('empilhadeiras', {
            empilhadeiras: empilhadeiras
        })
    })
});

router.get('/Dashboard/monitoramento/:idoperadores/operador', Filter.filterOperador);

router.get('/Dashboard/monitoramento/:idempilhadeiras/empilhadeira', Filter.filterEmpilhadeira);

module.exports = router;