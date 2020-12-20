const express = require('express');
const authController = require('../controller/auth')

const router = express.Router();

router.post('/coletor', authController.coletor);

 router.post('/itens_empilhadeira', authController.itens_empilhadeira); 
/* 
router.post('/itens_emp_gas', authController.itens_emp_gas); */

router.post('/login', authController.login);

router.post('/empilhadeiras', authController.empilhadeiras);

router.post('/operador', authController.operador);

module.exports = router;
