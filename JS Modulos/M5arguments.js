//OBJETO "ARGUMENTS", similar a los array, accesible dentro de funciones que contienen los valores pasados a esa funcion
// trabaja con los argumentos de la funcion
function saludo (nombre, apellido){
    console.log(arguments[0]) // muestra el elemento en la posicion 0
    console.log(arguments.length) // se puede utilizar con el metodo lenght
}

saludo('vero', 'diaz')

//otra de las formas que podemos utilizar el objeto arguments es como parametro REST
//parametros ...REST, permite que la funcion trabaje con un numero indefinido de argumentos como si fuera un arreglo

function suma (...args){
    console.log(args)
    var sum = 0
    for(var arg of args) sum = sum + arg 
       return sum
}
var x = suma (4,8,8,12,45,31)
console.log(x)