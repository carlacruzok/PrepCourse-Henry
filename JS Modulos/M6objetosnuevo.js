//objeto se definen entre {}

var objeto = {} // objeto vacio

var frutas = {
    1:'manzana',
    2:'uva',
    3:'naranja'
}
console.log(frutas) //{ '1': 'manzana', '2': 'uva', '3': 'naranja' }

//notacion por punto
//objeto.propiedad // devuelve el valor de la propiedad
var usuario = {
    nombre: 'Andres',
    password: 'hola123',
    edad: 26,
    online: true
}
//usuario.edad y usuario['online'] devuelven el valor de la propiedad
var profesion = 'programador'; 
usuario[profesion]=true // asignamos valor a la propiedad programador
usuario.username = 'Grego' // asignamos valor a la propiedad
console.log(usuario)

//notacion por corchete
var estudiante = {}
estudiante.nombre = 'Luciano' // creando propiedad con notacion por punto
estudiante['edad']= 18 // creando propiedad con bracket notation y asignando valor
var escuela = 'Henry'
estudiante.escuela = true // le asigno un valor y creando la propiedad escuela
//estudiante tiene {nombre: 'Luciano, edad: 18, escuela:true}
estudiante[escuela] = true
//estudiante ahora tiene {nombre: 'Luciano, edad: 18, escuela:true, henry:true}

// agregamos una propiedad al objeto estudiante de tipo funcion que seria un metodo
estudiante.saludo = function(){
    console.log ('Hola a todos')
}

// para invocar a la funcion saludo del objeto estudiante
estudiante.saludo()

//METODO KEYS
// devuelve un string con todas las propiedades
console.log( Object.keys(estudiante)) // [ 'nombre', 'edad', 'escuela', 'Henry', 'saludo' ]

//METODO VALUES
// devuelve un arreglo con los valores
console.log(Object.values(estudiante))// [ 'Luciano', 18, true, true, [Function (anonymous)] ]

console.log(estudiante.hasOwnProperty('edad'))

// iteracion FOR IN 
for(var clave in estudiante){ // clave es el iterador
    console.log(estudiante[clave]) // devuelve los valores de mi objeto
}

//THIS referencia al objeto donde nos encontramos. Se usa en los metodos de los objetos

var usuario = {
    nombre: 'Andres',
    password: 'hola123',
    edad: 26,
    online: true,
    saludar: function(){
        console.log('hola,' + this.nombre)
    }
}
usuario.saludar()

// METODO CREATE nos permite crear un nuevo objeto a partir de un prototipo especificado
// Object.create
var obj1 = {} // esto es lo mismo que lo siguiente
var obj = Object.create({}) // creamos un objeto con un objeto vacio - obj{}
console.log(obj) // Object {}

// creamos un objeto a partir de un prototipo de objeto
var obj= Object.create(Object.prototype) // es lo mismo que crear un objeto vacio var=obj{}

// metodo AASIGN, nos permite agregar propiedades a un objeto pasado por parametros
Object.assign(obj,{nombre:'Luciano'}) // {nombre: 'Luciano'}

// METODO ENTRIES, devuelve una matriz de pares clave-valor de propiedad con clave de un objeto determinado.
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]


