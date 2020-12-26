const express = require('express');
const authController = require('../controller/auth')
const Operadores = require('../models/operadores')
const Empilhadeiras = require('../models/empilhadeira')
const db = require('../models/db')

const router = express.Router();

router.post('/coletor', authController.coletor);

router.post('/login', authController.login);

router.post('/empilhadeiras', authController.empilhadeiras);

router.post('/operador', authController.operador);

// router.post('/delOperadores/:id', (req, res) =>{
//     db.Operadores.detroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(()=> res.redirect('/Dashboard/operadores'))
// });

// router.delete('/delEmpilhadeira/:id', (req, res) =>{
//     Empilhadeiras.detroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(()=> res.redirect());
// });

module.exports = router;