const banderas = ["img/img.jpg", "img/img1.jpg", "img/img2.webp", "img/img3.jpg", "img/img4.jpg"];
const correcta = [2, 1, 1, 3, 2]; 
const preguntas = [
    ["¿En qué fecha se celebra el Día de la Fundación del Estado Plurinacional de Bolivia?", "6 de agosto", "22 de enero", "14 de septiembre"],
    ["¿En qué fecha se celebra el Día del Trabajo en Bolivia?", "1 de mayo", "16 de julio", "6 de diciembre"],
    ["¿Qué pintor italiano del Renacimiento es conocido por obras maestras como de la última cena?", "Leonardo da Vinci", "Miguel Ángel", "Leonardo DiCaprio"],
    ["¿Qué tipo de software permite realizar tareas específicas, como editar texto, navegar por internet o jugar videojuegos?", "Software de sistema", "Software libre", "software aplicativo"],
    ["¿Cuál es la ciencia que estudia la vida?", "Química", "Biología", "Bioquímica"]
];

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
}

function cargarPregunta() {
    if (preguntas.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();
        document.getElementById("imgBandera").src = banderas[posActual];
        document.getElementById("preguntaActual").innerHTML = preguntas[posActual][0];
        document.getElementById("n1").innerHTML = preguntas[posActual][1];
        document.getElementById("n2").innerHTML = preguntas[posActual][2];
        document.getElementById("n3").innerHTML = preguntas[posActual][3];
    }
}

function limpiarOpciones() {
    document.getElementById("n1").className = "nombre";
    document.getElementById("l1").className = "letra";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l2").className = "letra";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida === correcta[posActual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarPregunta, 1000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}
