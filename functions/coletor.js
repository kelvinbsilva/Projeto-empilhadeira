var Oleo_motor = document.getElementById("Oleo_motor");
var Agua_radiador = document.getElementById("Agua_radiador");
var Freios = document.getElementById("Freios");
var Embreagem = document.getElementById("Embreagem");
var Coletor = document.getElementById("Coletor");
var Pneus = document.getElementById("Pneus");
var Nivel_oleo = document.getElementById("Nivel_oleo");
var Extintor = document.getElementById("Extintor");
var Sistema_Ilum = document.getElementById("Sistema_Ilum");
var Garfo = document.getElementById("Garfo");
var Torre = document.getElementById("Torre");
var Botijão = document.getElementById("Botijão");
var Assento = document.getElementById("Assento");
var Limpo = document.getElementById("Limpo");
var Correntes = document.getElementById("Correntes");
var Pintura = document.getElementById("Pintura");
var Mangueiras = document.getElementById("Mangueiras");
var Hora_i = document.getElementById("hora_i");
var Hora_f = document.getElementById("hora_f");
var OBS = document.getElementById("OBS");
var Turno = document.getElementById("Turno");
var Setor = document.getElementById("Setor");

document.getElementById("btnSubmit").onclick = function () {
    console.log(OBS.value);
    console.log(Hora_i.value);
    console.log(Hora_f.value);
    console.log(Turno.value);
    console.log(Setor.value);

    if (Oleo_motor.checked) {
        console.log("Selecionou oloe motor");
    } else {
        console.log("não selecionou oloe motor");
    }

    if (Agua_radiador.checked) {
        console.log("Selecionou Agua do radiador");
    } else {
        console.log("Não selecionou Agua do radiador");
    }
    if (Freios.checked) {
        console.log("Selecionou Freios");
    } else {
        console.log("Não selecionou Freios");
    }
    if (Embreagem.checked) {
        console.log("Selecionou Embreagem");
    } else {
        console.log("Não selecionou Embreagem");
    }
    if (Coletor.checked) {
        console.log("Selecionou Coletor");
    } else {
        console.log("Não selecionou Coletor");
    }
    if (Pneus.checked) {
        console.log("Selecionou Pneus");
    } else {
        console.log("Não selecionou Pneus");
    }
    if (Nivel_oleo.checked) {
        console.log("Selecionou Nivel de oleo");
    } else {
        console.log("Não selecionou Nivel de oleo");
    }
    if (Extintor.checked) {
        console.log("Selecionou Extintor");
    } else {
        console.log("Não selecionou Extintor");
    }
    if (Sistema_Ilum.checked) {
        console.log("Selecionou Sistema de Iluminação");
    } else {
        console.log("Não selecionou Sistema de Iluminação");
    }
    if (Garfo.checked) {
        console.log("Selecionou Garfo");
    } else {
        console.log("Não selecionou Garfo");
    }
    if (Torre.checked) {
        console.log("Selecionou oloe motor Torre");
    } else {
        console.log("Não selecionou Torre");
    }
    if (Botijão.checked) {
        console.log("Selecionou Botijão");
    } else {
        console.log("Não selecionou Botijão");
    }
    if (Assento.checked) {
        console.log("Selecionou Assento");
    } else {
        console.log("Não selecionou Assento");
    }
    if (Limpo.checked) {
        console.log("Selecionou Limpo");
    } else {
        console.log("Não selecionou Limpo");
    }
    if (Correntes.checked) {
        console.log("Selecionou Correntes");
    } else {
        console.log("Não selecionou Correntes");
    }
    if (Pintura.checked) {
        console.log("Selecionou Pintura");
    } else {
        console.log("Não selecionou Pintura");
    }
    if (Mangueiras.checked) {
        console.log("Selecionou Mangueiras");
    } else {
        console.log("Não selecionou Mangueiras");
    }
};