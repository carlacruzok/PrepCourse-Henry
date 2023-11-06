// function sumaTres(x) {
//     console.log (x +3);
// }
// sumaTres(5);
// // PRIMERO
// function sumaTres(x){
//     return x +3;
// }

// // SEGUNDO
// var sumaTres = function(x) {
//     return x + 3;
// };

// //TERCERO
// var sumaTres = (x) => {
//     return x + 3;
// };

// var animal="caballo";
// console.log (animal);

// FUNCION DECLARADA
function estoEsUnaFuncion(){
    console.log('Uno')
    console.log('Dos')  
     console.log('Tres')
}
// // Invocacion de funcion
estoEsUnaFuncion();

// // funcion que retorna un valor
function estoEsUnaFuncionQueDevuelveValor(){
    console.log('Uno')
    console.log('Dos')  
    console.log('Tres')
    return "La funcion ha retornado una cadena de texto"
}
// // guardamos la funcion en una variable
let valorDeFuncion = estoEsUnaFuncionQueDevuelveValor();
console.log(valorDeFuncion)

// aqui tambien podemos asignar valor a las vbles y quedaria
function saludar(nombre = 'Carla', edad = 38){}
function saludar(nombre= 'carla', edad= 38){ 
    console.log('Hola mi nombres es ' + nombre + ' y tengo ' + edad + ' años');
}
saludar('Kenai', 7) // invocacion pasando los argumentos
saludar() // invocacion sin pasaqr argumentos y en ese caso devuelve *Hola mi nombres es undefined y tengo undefined años*

// FUNCION DECLARADA vs FUNCIONES EXPRESADAS
// Puede invocarse en cualquier parte del codigo, incluso antes de definir la funcion

funcionDeclarad()
function funcionDeclarad(){
    console.log('esta es una funcion declarada')
}


// Funcion anonima -> no hace falta poner el nombre de la funcion porque la asignamos a una vble
const funcionExpresada = function(){
 console.log('Esta es una funcion expresada, una funcion que se asigna como valor a una vble, si invocamos esta funcion antes de su definicion JS, nos dara ERROR..')
}
funcionExpresada()