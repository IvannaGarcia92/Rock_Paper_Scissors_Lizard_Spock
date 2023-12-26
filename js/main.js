let puntosJugador = 0;
let puntosPc = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosJugador = document.querySelector("#puntos-jugador");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionJugador = document.querySelector("#eleccion-jugador");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

//CONTENIDO ADICIONAL
// Obtiene el elemento del botón de reinicio
//let reiniciar = document.getElementById("#reiniciar");
// Añade un evento de clic al botón de reinicio
//reiniciar.addEventListener("click", reiniciarJuego);

function iniciarTurno(e) {
    let eleccionPc = Math.floor(Math.random() * 5);
    let eleccionJugador = e.currentTarget.id; // devuelve el id del boton que estamos haciendo click
    
    // Teniendo en cuenta lo siguiente:
    // piedra => 0
    // papel => 1
    // tijera => 2
    // lagarto => 3
    // spock => 4
    // Transformamos la información, asignando numeros a cada opcion
    if (eleccionPc === 0) {
        eleccionPc = "piedra💎";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel📋";
    } else if (eleccionPc === 2) {
        eleccionPc = "tijera✂";
    } else if (eleccionPc === 3) {
        eleccionPc = "lagarto🦎";
    } else if (eleccionPc === 4) {
        eleccionPc = "Spock🖖🏻";
    }
    //console.log(`Usuario: ${eleccionJugador}`);
    //console.log(`Bot: ${eleccionPc}`);

    // piedra vence a tijera
    // piedra vence a lagarto

    // tijera vence a papel
    // tijera vence a lagarto

    // papel vence a piedra
    // papel vence a Spock

    // lagarto vence a Spock
    // lagarto vence a papel

    // Spock vence a tijera
    // Spock vence a piedra

    // si son iguales es empate

    // validaciones usuario vencedor
    if ( 
        // Si vence piedra 💎
        (eleccionJugador === "piedra💎" && eleccionPc === "tijera✂") ||
        (eleccionJugador === "piedra💎" && eleccionPc === "lagarto🦎") ||
        // Si vence tijera ✂
        (eleccionJugador === "tijera✂" && eleccionPc === "papel📋") ||
        (eleccionJugador === "tijera✂" && eleccionPc === "lagarto🦎") ||
        // Si vence papel 📋
        (eleccionJugador === "papel📋" && eleccionPc === "piedra💎") ||
        (eleccionJugador === "papel📋" && eleccionPc === "Spock🖖🏻") ||
        // Si vence lagarto 🦎
        (eleccionJugador === "lagarto🦎" && eleccionPc === "Spock🖖🏻") ||
        (eleccionJugador === "lagarto🦎" && eleccionPc === "papel📋") ||
        // Si vence Spock 🖖🏻
        (eleccionJugador === "Spock🖖🏻" && eleccionPc === "tijera✂") ||
        (eleccionJugador === "Spock🖖🏻" && eleccionPc === "piedra💎") 
    ) {
        ganaJugador();
    } else if (
        // Si vence piedra 💎
        (eleccionPc === "piedra💎" && eleccionJugador === "tijera✂") ||
        (eleccionPc === "piedra💎" && eleccionJugador === "lagarto🦎") ||
        // Si vence tijera ✂
        (eleccionPc === "tijera✂" && eleccionJugador === "papel📋") ||
        (eleccionPc === "tijera✂" && eleccionJugador === "lagarto🦎") ||
        // Si vence papel 📋
        (eleccionPc === "papel📋" && eleccionJugador === "piedra💎") ||
        (eleccionPc === "papel📋" && eleccionJugador === "Spock🖖🏻") ||
        // Si vence lagarto 🦎
        (eleccionPc === "lagarto🦎" && eleccionJugador === "Spock🖖🏻") ||
        (eleccionPc === "lagarto🦎" && eleccionJugador === "papel📋") ||
        // Si vence Spock 🖖🏻
        (eleccionPc === "Spock🖖🏻" && eleccionJugador === "tijera✂") ||
        (eleccionPc === "Spock🖖🏻" && eleccionJugador === "piedra💎") 
    ) {
        ganaPc();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionJugador.innerText = eleccionJugador;
    contenedorEleccionPc.innerText = eleccionPc;

    // ocurre cuando alguno de los jugadores llega a los 5 puntos
    if (puntosJugador === 5 || puntosPc === 5) {
        if (puntosJugador === 5) {
            instrucciones.innerText = " 🔥¡Ganaste el juego!🔥 "
        }
        if (puntosPc === 5) {
            instrucciones.innerText = " 😭¡Ha ganado el Bot!😭 "
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

// ocurre cuando gana un punto el jugador
function ganaJugador() {
    puntosJugador++;
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorGanaPunto.innerText = " ¡Ganaste un punto! 💯 "
}

// ocurre cuando gana un punto la pc 
function ganaPc() {
    puntosPc++;
    contenedorPuntosPc.innerText = puntosPc;
    contenedorGanaPunto.innerText = " ¡El Bot ganó un punto! 😢 "
}

// ocurre cuando hay empate 
function empate() {
    contenedorGanaPunto.innerText = " ¡Empate! 😯 "
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled"); 
    
    puntosJugador = 0;
    puntosPc = 0;

    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorPuntosPc.innerText = puntosPc;

    instrucciones.innerText = "El primero en llegar a 5... GANA!";
}
