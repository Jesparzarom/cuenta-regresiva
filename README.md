![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
[![License](https://img.shields.io/github/license/Jesparzarom/cuenta-regresiva.svg)](https://github.com/Jesparzarom/cuenta-regresiva/blob/main/LICENSE)
![Repo size](https://img.shields.io/github/repo-size/Jesparzarom/cuenta-regresiva.svg)



# Cuenta regresiva en Javascript:

Este código HTML muestra dos ejemplos de cómo implementar un contador regresivo en una página web utilizando JavaScript.

El primer ejemplo consiste en iniciar el contador en el mismo documento HTML en el que se encuentra el código. Para ello, se utiliza un enlace con el id "contador", que al ser clicado, ejecutará el código JavaScript que se encuentra en el archivo "counterIn.js" y que generará la cuenta regresiva en el div vacío con el id "cuentaAtras".

El segundo ejemplo muestra cómo abrir una página HTML separada, denominada "contador.html", que contiene el código necesario para mostrar el contador regresivo. Se utiliza un enlace con el id "contadorDos" que al ser clicado, abrirá el archivo "contador.html" donde se ejecutará el código JavaScript y se mostrará el contador regresivo.

En resumen, este código proporciona dos formas distintas de implementar un contador regresivo en una página web utilizando JavaScript y puede ser utilizado como base.

---



### MÉTODO 1: INICIAR CUENTA REGRESIVA EN LA MÍSMA PÁGINA

```javascript
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
            "<div class='segundos'>Segundos:</div>" +
            "<div class='segundos'>" +
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

// Inicia el contador en la misma página al hacer click
document.getElementById("contador").onclick = function () {
    // Llamada a la función "cuentaRegresiva" cada segundo
    var intervalo = setInterval(cuentaRegresiva, 1000);
};


```
Este es el código JavaScript que se utiliza para generar la cuenta regresiva en la página web. La función `cuentaRegresiva()` calcula la diferencia de tiempo entre la fecha actual y la fecha objetivo (1 de julio de 2023) en la zona horaria de Buenos Aires, y luego convierte esa diferencia en días, horas, minutos y segundos.

> La función se activa cuando se hace clic en un elemento HTML con el ID "contador" (`id="contador"`). Esto se logra mediante el uso del método `onclick` en la última línea del archivo. Cuando se hace clic en el elemento, se llama a la función `cuentaRegresiva()` cada segundo mediante el uso de la función `setInterval`

Después, el contenido del div con el id "cuentaAtras" (`id="cuentaAtras"`) se actualiza con el tiempo restante en una estructura de HTML que utiliza divs para mostrar cada uno de los valores (días, horas, minutos y segundos) de forma separada.

La función también detiene la actualización cuando la cuenta regresiva ha llegado a cero, y en ese caso, el contenido del div se actualiza para mostrar un mensaje indicando que la cuenta regresiva ha terminado.



---

### METODO 2: ABRIR CUENTA REGRESIVA EN OTRO DOCUMENTO
```javascript
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
    "<div class='segundos'>Segundos:</div>" +
    "<div class='segundos'>" +
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

// Cuando se carga la página de destino, se inicia el contador
document.addEventListener("DOMContentLoaded", function() {
    setInterval(cuentaRegresiva, 1000);
  });
```
Este archivo JavaScript también contiene una función llamada `cuentaRegresiva` que calcula la cuenta regresiva para una fecha objetivo (en este caso, el 1 de julio de 2023) y actualiza el contenido de un elemento HTML con la cuenta regresiva en tiempo real. La función utiliza las mismas fórmulas para calcular la cantidad de días, horas, minutos y segundos restantes que la función anterior.

La diferencia es que en este caso, para ejecutar la función se utiliza el evento `DOMContentLoaded`, que se dispara cuando se ha cargado completamente el contenido HTML de la página. El `setInterval` se utiliza para actualizar la cuenta regresiva cada segundo.

---
