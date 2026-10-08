//HTML 
<input id="tarea" type="text" placeholder="Nueva tarea">
<button id="agregar">Agregar</button>
<ul id="lista"></ul>

// Javascript 
let tareas = [];

document.getElementById("agregar").addEventListener("click", agregarTarea);
function agregarTarea() {
  let tarea = document.getElementById("tarea").value;
  tareas.push({ texto: tarea, completada: false });
  mostrarTareas();
}

function mostrarTareas() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  tareas.forEach((tarea, indice) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${tarea.completada ? "checked" : ""}>
      <span>${tarea.texto}</span>
      <button class="eliminar">Eliminar</button>
    `;
    lista.appendChild(li);
    li.querySelector("button.eliminar").addEventListener("click", () => {
      tareas.splice(indice, 1);
      mostrarTareas();
    });
    li.querySelector("input[type='checkbox']").addEventListener("change", () => {
      tarea.completada = !tarea.completada;
      mostrarTareas();
    });
  });
}