// metodo REDUCE. aplica una funcion reductora sobre el array y devuelve un solo valor
// sobre string, sobre array
// recibe el valor(elemento) y el acumulador (indice)
var palabras = ['Hola', 'mi', 'nombre', 'es', 'Carla']
// acumulador es el parametro (indice) , el elemento es el valor del acumulador
var frase = palabras.reduce(function(acumulador, elemento){
    return acumulador + ' ' + elemento
}, 'Frase completa: ')

//sobre numeros
var numeros = [1,2,3,4,5]
var suma = numeros.reduce(function(acumulador, elemento){ // (acumulador, elemento) => {}
    return acumulador + elemento
}, 0)
console.log(suma)

function multiplicar (a,b){
    return a * b
}
var producto = numeros.reduce(multiplicar) //llamando a una funcion dentro del reduce
 console.log(producto)