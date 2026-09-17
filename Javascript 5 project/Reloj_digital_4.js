//HTML
<p id="hora"></p>

// JavaScript
setInterval(() => {
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  document.getElementById("hora").innerHTML = `${hora.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}, 1000);

