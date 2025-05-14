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