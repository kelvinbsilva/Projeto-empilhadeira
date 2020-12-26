const Operadores = require('../models/operadores');
const Coletor = require('../models/coletor');

module.exports = {
    async filterOperador(req, res) {

        const {
            idoperadores
        } = req.params;

            await Coletor.findAll({
                where : {idoperadores},
                include:[
                    {association: 'empilhadeiras', required: true }, 
                    {association: 'operadores', required: true }
                ]
            }
            ).then(function (coletor) {
            res.render('monitoramento', {
                coletor: coletor
            })
        })
    },
    
    async filterEmpilhadeira(req, res) {

        const {
            idempilhadeiras
        } = req.params;

            await Coletor.findAll({
                where : {idempilhadeiras},
                include:[
                    {association: 'empilhadeiras', required: true }, 
                    {association: 'operadores', required: true }
                ]
            }
            ).then(function (coletor) {
            res.render('monitoramento', {
                coletor: coletor
            })
        })
    }
}