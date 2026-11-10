
const botonAbrir = document.getElementById("botonAbrir");

const contenido = document.getElementById("contenido");
const portada = document.querySelector(".portada");

// Abrir la invitación
botonAbrir.addEventListener("click", function () {
    contenido.classList.remove("oculto");
    botonAbrir.style.display = "none";
    portada.style.opacity = "0.15";
});

document.getElementById("botonCerrar").addEventListener("click", function() {

    let mensaje = 
        "\u00A1Hola! \u2728 Confirmo con mucho gusto mi asistencia a tus XV a\u00F1os, Arlenne Espinoza. \uD83C\uDF89\uD83D\uDC96\n\n" +
        "Asistiremos [n\u00FAmero de personas] personas. \u00A1Estamos muy felices de acompa\u00F1arte en esta celebraci\u00F3n tan especial! \uD83E\uDD73\uD83D\uDC95 \u00A1All\u00E1 nos vemos!";

    let url = "https://wa.me/19514105197?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");

});




// CONTADOR REGRESIVO XV AÑOS ARLENNE

const fechaEvento = new Date(2026, 10, 23, 18, 0, 0).getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador").innerHTML =
            "<strong>¡HOY ES EL GRAN DÍA! 💙</strong>";
        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(3, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);
