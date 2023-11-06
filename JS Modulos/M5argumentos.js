// objeto arguments -> es propio de las funciones, es un objeto que se comporta como una arreglo
//contiene todos los parametros de la funciones

function saludar(idioma, nombre, saludo){
    console.log(arguments)
    return "hola"
}
console.log(saludar('español', 'Jairo'))

function saludar(prop){
    console.log(prop)
    return "hola"
}
console.log(saludar('español', 'Jairo'))