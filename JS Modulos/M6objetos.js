// var -> key (o propiedad)-value (valor). var clave: valor
//declaracion de objetos. var nombre = {} 

var deportes = {
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
            };

// definimos objeto PERSONA
var persona = {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}}; //objeto dentro de otro objeto

// ACCEDER a la propiedad de un objeto. tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
//obtener valores de un objeto.propiedad
console.log(persona.edad);

//Cambiar el valor de una propiedad
persona.nombre = 'Martin'; //Asignamos Martin a la propiedad nombre
console.log(persona.nombre);

persona.edad = 32;
console.log(persona.edad);

// Creamos un objeto vacio. No se pueden crear propiedades vacias
 var autos = {};
// creamos la propiedad marca para el objeto y le asignamos valores
 autos.marcas = ['Ford', 'Audi', 'Ferrari'];
 console.log(autos);

//eliminamos la propiedad marcas y autos queda vacio
 delete autos.marcas;
 console.log(autos);

// funciones en objetos
var misFunciones = {
  saludar: function(){
    console.log('Hola');
    }
}
misFunciones.saludar();

// DOT NOTATION -> utilizamos la notacion por puntos
var atuendos = {
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes']};

console.log(atuendos.manos);

//BRAKET NOTATION -> utilizamos la notacion por CORCHETES
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {}
  var diferenciaDeNotaciones = function(propUno,propDos){
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos]= ['Hamburguesa', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);

//Cuando necesitemos utilizar una variable externa para guardarla como propiedad en un objeto.
//utilizar Bracket-Notation sin comillas para que funcione correctamente.

// HAS OWN PROPERTY ->nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto.
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

//KEYS ->devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo={continentes: 7, paises: 195, oceanos: 5};
//For-In nos permite iterar sobre un objeto utilizando dos variables pivot.
for (var prop in mundo){
    console.log('Esta es la propiedad: ' + prop);
    console.log('este es el valor' + mundo[prop])
};

var mascota= {
    animal: 'Perro',
    raza: 'Ovejero Aleman',
    amistoso: true,
    dueña: 'Maria Lopez',
    info: function (){ console.log ('Mi perro es: ' + this.raza);
    },
};

mascota.info();