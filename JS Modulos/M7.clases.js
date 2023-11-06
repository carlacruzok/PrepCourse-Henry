// CLASE: AUTO CON PROPIEDADES (ENTRE PARENTESIS, QUE SON LOS PARAMETROS QUE VAMOS A PASAR EN LA INSTANCIA DE CLASE)
// FUNCION CONSTRUCTORA -> las clases tienen propiedades (como parametros) y metodos.

// recibimos las propiedades como parametros y para poder declarlas utilizamos la palabra "this" para referirnos a ellas
// luego las igualamos a su valor recibido por parametro
function Auto(puertas, color, marca, año, ruedas){ // nombre de la clase la primera letra con Mayuscula
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    //METODO
    this.informacion = function () {
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    };
}
// Inicializamos la clase Auto para poder usar la plantilla
//DEFINIMOS LA 1° INSTANCIA DE MI CLASE
var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4); //new permite crear una instancia de la clase
console.log(miPrimerAuto)
miPrimerAuto.informacion(); // invocamos a la funcion de la instancia de la clase

// EXPRESIÓN DE CLASE
class Auto{ // se usa constructor para declarar las propiedades
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color)
    }
}
var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
miSegundoAuto.informacion();
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca); 


// Palabra reservada THIS, permite definir el contexto
class Football {
    constructor(jugador){
        this.jugador = jugador;
    } obtenerNombre(){
        console.log(this.jugador);
    }
}

var Argentina = new Football('Messi'); // asignamos a una vble la clase Football, para agregar un jugador
var Brasil = new Football('Pele');

Argentina.obtenerNombre();
Brasil.obtenerNombre();

// definimos una clase usuario 
function Usuario(nombre, email){
    this.nombre = nombre;
    this.email = email;
}
//PROTOTYPE -> los obj o elementos pueden extender sus propiedades y metodos - HERENCIA
// utilizando la propiedad, definimos una funcion a la clase usuario
Usuario.prototype.presentacion = function (){
    return 'Mi nombre es ' + this.nombre + ', mi email es: ' + this.email
}

var German = new Usuario('German', 'ger@mail.com')
console.log(German)
console.log(German.presentacion())


Array.prototype.mayoresQueTres = function (){
    var arreglo = [];
    for (var i = 0; i < this.length ; i++){
        if (this[i] > 3){
            arreglo.push(this[i])
        }
    } return arreglo;
}
//nuevoArray hereda el metodo mayores que tres definido con el metodo prototype
var arr = [1,2,3,4,5];
var nuevoArray = arr.mayoresQueTres()
console.log(nuevoArray); 

//idem anterior para nuevoArray2
var arreglo2 = [1, 2, 13, 18, 25]
var nuevoArray2 = arreglo2.mayoresQueTres()
console.log(nuevoArray2) 

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre ;
        this.edad = edad
    }
    saludar(){
        return 'Hola, mi nombre es: ' + this.nombre + 'y tengo ' + this.edad + 'años' 
    }
}

class Programador extends Persona {
    constructor(nombre, edad, experiencia){
        super(nombre, edad)
        this.experiencia = experiencia
    }
    codear (){
        return 'Soy ' + this.nombre + 'codeo desde ' + this.experiencia + 'y tengo ' + this.edad + 'años'
    }
}

var fatima= new Persona('Fatima', 18)

console.log (fatima.saludar());

var Programador = new Programador ('Horacio', 25, 4);
console.log(Programador)