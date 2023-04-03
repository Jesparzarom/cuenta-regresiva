function cuentaRegresiva() {

    // Fecha actual en la zona horaria de Buenos Aires
    var fechaActual = new Date().getTime();

    // Fecha objetivo (1 de julio de 2023) en la zona horaria de Buenos Aires
    var fechaObjetivo = new Date("July 1, 2023 00:00:00 GMT-0300").getTime();

    // Diferencia de tiempo entre la fecha actual y la fecha objetivo
    var diferencia = fechaObjetivo - fechaActual;

    // Conversión de la diferencia de tiempo a días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualización del contenido del div con la cuenta regresiva
    document.getElementById("cuentaAtras").innerHTML =
        "<div class='div-contador'>" +

            //div con los días
            "<div class='dias'>Días: " +
                dias +
            "</div>" +

            //div con las horas
            "<div class='horas'>Horas: " +
                horas +
            "</div>" +

            //div con los minutos
            "<div class='minutos'>Minutos: " +
                minutos +
            "</div>" +

            //div con los segundos
            "<div class='segundos'>Segundos: " +
                segundos +
            "</div>" +

        "</div>"
        
        ;

    // Si la cuenta regresiva ha llegado a cero, se detiene la actualización
    if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("cuentaAtras").innerHTML =
            "¡La cuenta regresiva ha terminado!";
    }
}

document.getElementById("contador").onclick = function () {
    // Llamada a la función "cuentaRegresiva" cada segundo
    var intervalo = setInterval(cuentaRegresiva, 1000);
};
