const mysql = require('mysql');
const md5 = require('md5');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smp-br-app'
});

exports.coletor = (req, res) => {

    const {
        hora_i, hora_f, obs

    } = req.body
    let input = req.body;

    db.query('INSERT INTO coletor SET ?', {


        hora_f: hora_f,
        hora_i: hora_i,
        obs: obs,


    }, (error, results) => {
        console.log(error);
        //res.redirect('/')
    });


    db.query('INSERT INTO itens_empilhadeira SET ?', {
        mangueiras: input.mangueiras ? 1 : 0,
        embreagem: input.embreagem ? 1 : 0,
        freios: input.freios ? 1 : 0,
        coletor: input.coletor ? 1 : 0,
        extintor: input.extintor ? 1 : 0,
        sistema_ilum: input.sistema_ilum ? 1 : 0,
        garfo: input.garfo ? 1 : 0,
        torre: input.torre ? 1 : 0,
        assento: input.assento ? 1 : 0,
        limpo: input.limpo ? 1 : 0,
        pintura: input.pintura ? 1 : 0

    }, (error, results) => {
        console.log(error);        // res.redirect("/coletor"):
    })
    return res.json({ msg: 'ok' })

}

exports.itens_empilhadeira = (req, res) => {


    const {
        freios, embreagem, coletor, extintor, sistema_ilum,
        garfo, torre, assento, limpo, correntes, pintura, mangueiras,
        agua_radiador, botijao, nivel_oleo, oleo_motor
    } = req.body;


    db.query('INSERT INTO itens_empilhaasdeira SET ?', {

        agua_radiador: agua_radiador,
        botijao: botijao,
        nivel_oleo: nivel_oleo,
        oleo_motor: oleo_motor,
        freios: freios,
        embreagem: embreagem,
        coletor: coletor,
        extintor: extintor,
        sistema_ilum: sistema_ilum,
        garfo: garfo,
        torre: torre,
        assento: assento,
        limpo: limpo,
        correntes: correntes,
        pintura: pintura,
        mangueiras: mangueiras

    }, (error, results) => {
        //res.redirect("/coletor")
    })
};

exports.empilhadeiras = (req, res) => {

    const {
        numero, modelo
    } = req.body;

    db.query('INSERT INTO empilhadeiras SET ?', {

        numero:numero,
        modelo: modelo

    }, (error, results) => {
        res.redirect('/Dashboard/acesso')
    })

}; 

exports.login = async (req, res) => {
    try {
        let {
            Matricula,
            Senha
        } = req.body;
        


        if (!Matricula || !Senha) {

        }

        Senha = md5(Senha);
        //Session

        //Precisa de um array de dependencias, não um objeto, nos valores.

        db.query('SELECT * FROM login WHERE matricula = ? AND senha = ?', [
            Matricula,
            Senha
        ], (error, results) => {
            if (!results || !results.length) {
                res.status(200).redirect("/")
            } else {
                res.status(400).redirect("/Dashboard")
            }

        })

    } catch (error) {
        console.log(error);
        return;
        return res.json({ msg: 'ok' });
    }
};

exports.operador = (req, res) => {

    console.log(req.body);

    const {
        Matricula,
        Nome,
        Senha,
        Setor,
        Turno
    } = req.body;

    db.query('INSERT INTO operadores SET ?', {
        Matricula: Matricula,
        Nome: Nome,
        Senha: Senha,
        Setor: Setor,
        Turno: Turno,

    }, (error, results) => {
        res.redirect('/Dashboard/acesso')
    })
};


/* exports.register = (req, res) => {

    console.log(req.body);

    const {
        nome,
        senha,
        setor,
        turno
    } = req.body;

    db.query('INSERT INTO operador SET ?', {
        nome: nome,
        senha: senha,
        setor: setor,
        turno: turno,

    }, (error, results) => {
        res.redirect('/Dashboard/acesso')
    })
}; */



/*  exports.cad_empilhadeira = (req, res) => {

    console.log(req.body);

    const {
        id,
        tipo
    } = req.body;

    db.query('INSERT INTO cad_empilhadeiras SET ?', {
        id: id,
        tipo: tipo

    }, (error, results) => {
        res.redirect('/Dashboard/acesso')
    })
};  */





