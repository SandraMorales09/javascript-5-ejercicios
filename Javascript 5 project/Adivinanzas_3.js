//HTML
<p id="mensaje">Adivina un número entre 1 y 100</p>
<input id="numero" type="number">
<button id="enviar">Enviar</button>

// JavaScript
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

document.getElementById("enviar").addEventListener("click", verificarNumero);

function verificarNumero() {
  let numero = parseInt(document.getElementById("numero").value);
  if (numero === numeroAleatorio) {
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Adivinaste el número";
  } else if (numero < numeroAleatorio) {
    document.getElementById("mensaje").innerHTML = "El número es mayor";
  } else {
    document.getElementById("mensaje").innerHTML = "El número es menor";
  }
}
