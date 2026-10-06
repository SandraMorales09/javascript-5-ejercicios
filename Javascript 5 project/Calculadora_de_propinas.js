//HTML
<input id="monto" type="number" placeholder= "Monto de la factura">
<input id= "propina" type="number"placeholder="Propina (%)">
<button id="calcular">Calcular</button>
<p id="resultado"></p>

// Javascript document.getElementById("calcular").addEventListener("click",calcularPropina);

function calcularPropina() {
    let monto = parseFloat(document.getElementByI("monto").value);
    let propina =parseFloat(document.getElementById("propina").value);
    let total = monto + (monto * propina / 100);
    document.getElementById("resultado").innerHTl = Total: $${total.toFixed(2)}´;
}