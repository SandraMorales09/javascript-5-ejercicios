/* una cadena de texto contiene una palabra especifica */ 

function contienePalabra(cadena, palabra) {
    if (cadena.includes(palabra)) {
        return "La cadena contiene la palabra";
    } else {
        return "La cadena no contiene la palabra";
    }
}

console.log(contienePalabra("Hola mundo", "mundo"));
//Output: La cadena contiene la palabra
console.log(contienePalabra("Hola mundo", "adios")); 
//Output: La cadena no contiene la palabra