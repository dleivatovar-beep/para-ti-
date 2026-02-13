function abrir() {
    cambiarPantalla("pantalla2");

    const musica = document.getElementById("musica");
    musica.play();
}

// 🌹 Abrir cartas
function abrirCarta() {
    cambiarPantalla("pantalla3");
}

function cambiarPantalla(id) {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(p => {
        p.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}

function mostrarFinal() {
    cambiarPantalla("pantallaFinal");

    const texto = "Eres lo mejor que me ha pasado en la vida 💖 Gracias por existir.";
    let i = 0;
    const mensaje = document.getElementById("mensajeFinal");
    mensaje.innerHTML = "";

    function escribir() {
        if (i < texto.length) {
            mensaje.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 60);
        }
    }

    escribir();
}
