/*var nombreMascota = 'Blacky'
console.log(nombreMascota.length)

// funcion que no recibe parametros
function logHola(){ // 
    console.log('Hola!')
}
logHola(); // invocamos a la funcion (se ejecuta lo que hay dentro de la funcion)

// funcion que recibe parametros
function logHola(nombre){
    console-log('Hola' + nombre);
}
logHola('Martin'); // aqui debemos pasarle el argumento a la funcion 
function sumar(x, y){  
    var suma = x + y
    //console.log(suma)
    return suma
}
sumar (5, 8)*/
function bienvenidos(){
    console.log('Bienvenidos al curso preparatorio de Js')
}

bienvenidos()

var autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla']
autos.forEach (function(auto, indice){
    console.log(auto, indice)
})
// muestra
//Ford 0
//Chevrolet 1
//Toyota 2
//Tesla 3
//undefined

// FOR EACH recorre el array y en cada elemento va ejecutando una funcion. Esa funcion puede recibir 2 paramentros (el elemento que se va iterando)
// el segundo es la posicion (indice) que se va iterando (puede ir o no r).
// lo que ejecuta la funcion va a afectar el indice que se esta iterando
//podemos escribir el callback en los parentesis como una funcion anonima
autos.forEach(function(elemento, indice){
    console.log(elemento);
});

//o podemos crear una instancia de una fcion para usarla como callback
function mostrarNombre(elemento){
    console.log(elemento)
}

// y llamar a esta funcion dentro de los parentesis del metodo foreach
autos.forEach(mostrarNombre)

//MAP
