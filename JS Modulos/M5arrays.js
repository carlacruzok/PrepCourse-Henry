var listaDeCompras = []; // definicion de arreglo
var listaDeCompras = new Array() // definicion de arreglo usando el objeto Array (le paso los valores)
listaDeCompras[3] = 'Tomates'; // carga de datos en el indice 3
listaDeCompras[1] = 'Lechuga';

//METODO LENGTH
console.log(listaDeCompras.length); //muestra la longitud del arreglo

var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length; // otra forma de uso de LENGTH
console.log(nombres);

listaDeCompras[1]; // toma el elemento del indice 1 sin mostrar
var elementoDelArray = listaDeCompras[1]; // guardo el elemento del indice 1 en una variable
console.log(elementoDelArray); //muestro el elemento

//METODO PUSH UNSHIFT POP SHIFT
var colores = ['amarillo', 'azul'];
colores.push('rojo'); // PUSH agrega elmentos al final del array y devuelve la longitud del arreglo
colores.unshift('verde'); //UNSHIFT agrega elementos al principio del array y devuelve la nueva longitud
colores.pop(); //POP elimina el ultimo elemento del array y devuelve el elmento eliminado
colores.shift(); // elimina el primer elemento del array y devuelve el elmento eliminado
console.log(colores); 

//METODO INCLUDES -> devuelve TRUE or FALSE
//includes() determina si un arreglo incluye o contiene un elemento específico. 
var pintores= ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
var  incluyeDali = pintores.includes('Monet') // devuelve false porque Monet no esta en pintores
var incluyeDali = pintores.includes('Dali') // devuelve true 
console.log(incluyeDali);

//METODO EVERY -> devuelve TRUE or FALSE
//every() determina si todos los elementos en un arreglo satisfacen una misma condición
var numeros = [10, 6, 8, 9];
console.log(numeros.at(-1)) //devuelve el ultimo elemento del arreglo
var numeros = new Array(10, 6, 8, 9)
var cumplenCondicion = numeros.every((num) => { 
    return num > 5;
});
console.log(cumplenCondicion); // Devuelve true


//METODO SPLIT -> convierte un string en un arreglo separando cada caracter
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

//METODO JOIN -> convierte un arreglo en un string,
//join()  uniendo todos los elementos de este en una misma cadena.
var palabraArreglada = palabraSeparada.join(''); 
console.log(palabraArreglada);

// FOREACH -> nos permite recorrer un arreglo, realizando alguna acción en cada elemento.
//forEach(function(elmento, indice-> es opciones)){} 
var numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num)); //Recorre cada numero del arreglo, guarda el num en num y lo muestra por separado

numeros.forEach((num) => {
    if (num === 3) {
       console.log(num);
    }
});


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


//METODO MAP map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. 
//La diferencia es que este método devuelve un nuevo arreglo con los elementos modificados.
var masUno = numeros.map((num) => {
   return num + 1;
});
console.log(masUno);

var num = [2,3,4,5]
function multiplicarPorTres (num){
    return num * 3
}

var producto = num.map(multiplicarPorTres)


//BUCLE FOR con metodo split -> for (condicion inicial, condicion a cumplir, expresion) {instrucciones}
function encontrarLetraP(string){
    var letras = string.split('');

    for(var i = 0; i < letras.length; i++){
        if (letras[i]=== 'p'){
        console.log('Si contiene a P');
    }
    }
}
encontrarLetraP('prep Course');
encontrarLetraP('papa') 

// BUCLE WHILE
var arr = [];
while(arr.length < 5){
    arr.push('BOOM');
}
console.log(arr);


//
var arr = [];
var n=1;
while (n<3){
    arr.push(Math.random());
}