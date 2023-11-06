// foreach, no devuelve nada, solo recorre el arreglo.
// no es necesario pasarle todos los parametros (elemento, indice, array)
var arreglo =['Hola', 'como estas', 'chau']
arreglo.forEach(function(elem, indice, array){
    elem = elem + ' a'
    console.log(elem)
    console.log(elem, indice, array)
    return elem
})


//devuelve un nuevo arreglo 
var otro = arreglo.forEach(function(elem, indice){
    elem = elem + ' ' + indice
    console.log(elem)
})

//filter-> devuelve un nuevo array con los elementos que cumplan cierta condicion

var filtrados = arreglo.filter(function(elem){
    if (elem.length === 4) return elem
})
console.log(filtrados)

numeros = [1,2,3,4,5,6]
var filtrados = numeros.filter(function(elem){
    if (elem === 3) return elem
})
console.log(filtrados)

//reduce -> devuelve un elemento, luego de haber operado todos los elmentos del array
// primero se pasa el acumulador que se define solo en 0, el segundo es el elemento
// el segundo parametro del reduce, es en donde va a empezar el acumulador, si no se le pasa
// parametro el acumulador es 0
var total = numeros.reduce(function(acum, elem){
    acum = acum + elem
    return acum
}, 10)
console.log(total)