/* El objeto tiene propiedad especifica */ 

function tienePropiedad(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return "El objeto no tiene la propiedad";
    }else{
        return "El objeto no tiene la propiedad";
    }
}

let obj = { nombre: "Juan", edad: 30}

console.log(tienePropiedad(obj, "nombre"));
// Output: El objeto tiene la propiedad
console.log(tienePropiedad(obj, "direccion")); 
//Output: El objeto no tiene la propiedad