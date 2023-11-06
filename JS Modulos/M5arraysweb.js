let frutas = ["Manzana", "Banana"]; // agrega las 2 frutas en el arrat frutas
let primero = frutas[0];
console.log (primero);
let ultimo = frutas[frutas.length - 1];
console.log (ultimo);

console.log(frutas.length); // muestra la logitud del array


frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice); // muestra el elmento y la posicion por cada elemento del arreglo
}); 

let nuevaLongitud = frutas.push("Naranja"); //agrega al final
console.log(frutas);
console.log (nuevaLongitud);

var eleminado = frutas.pop(); //elimina del principio

frutas.unshift("Fresa"); //agrega al principio
eleminado = frutas.shift; //elmimna del principio
console.log(frutas);