function promedio(arr) {
    let suma = 0;
    for (let i = 0; i < arr. length; i++)
    {
        suma += arr[i];
    }        
    return suma / arr.length;
}

console.log(promedio([1, 2, 3, 4, 5])); // Output: 3