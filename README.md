## Cuenta regresiva en Javascript activada mediante un botón e insertación de la misma en un div, se pueden seguir los siguientes pasos:

###### El div retornado en el código js puede ser personalizable con clases css propias o de frameworks.

---
> ###### DESCARGAR ZIP: https://github.com/Jesparzarom/cuenta-regresiva/archive/refs/heads/main.zip

---

1. En primer lugar, en el archivo HTML, se debe crear un botón con el id "contador" y un div con un id "cuentaAtras" donde se mostrará la cuenta regresiva:
html
```html
<button id="contador">Iniciar cuenta regresiva</button>
<div id="cuentaAtras"></div>
```
2. En el archivo Javascript, se puede crear una función que calcule la diferencia de tiempo entre la fecha actual y el 1 de julio de 2023, en la zona horaria de Buenos Aires, y actualice el contenido del div con la cuenta regresiva.



```javascript
function cuentaRegresiva() {
   // Fecha actual en la zona horaria de Buenos Aires
    var fechaActual = new Date().getTime();

    // Fecha objetivo (1 de julio de 2023) en la zona horaria de Buenos Aires
    var fechaObjetivo = new Date("July 1, 2023 00:00:00 GMT-0300").getTime(); 

    // Diferencia de tiempo entre la fecha actual y la fecha objetivo
    var diferencia = fechaObjetivo - fechaActual;

    ////// CONVERSION DE LA DIFERENCIA A DÍAS, HORAS, MINUTOS Y SEGUNDOS///////
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));    // Calcula la diferencia en días

    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcula la diferencia en horas

    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));  // Calcula la diferencia en minutos

    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);  //Calcula la diferencia en segundos


  //////// ACTUALIZACIÓN DEL CONTENIDO DEL DIV CON LA CUENTA REGRESIVA ///////
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
    document.getElementById("cuentaAtras").innerHTML = "¡La cuenta regresiva ha terminado!";
  }
}

```

3. Finalmente, se puede agregar un listener al botón con id "contador" para que llame a la función "cuentaRegresiva" cada segundo.

```javascript
document.getElementById("contador").onclick = function() {
  // Llamada a la función "cuentaRegresiva" cada segundo
  var intervalo = setInterval(cuentaRegresiva, 1000);
};
```
> #### Con estos pasos, al hacer clic en el botón con id "contador", se iniciará una cuenta regresiva que se actualizará cada segundo y mostrará el tiempo restante en el div con id "cuentaAtras", separado por días, horas, minutos y segundos. Si la cuenta regresiva ha llegado a cero, se mostrará un mensaje
