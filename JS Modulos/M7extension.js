
class Persona {
    constructor (nombre, edad){ 
    this.nombre = nombre;
    this.edad = edad;
}
saludar() {
    console.log('Hola, mi nombres es: ' + this.nombre + '. Tengo ' + this.edad);
}
}

// definimos una instancia de la clase para Martin y mas adelante Programador
var martin = new Persona ('Martin', 26);
// 
class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad); // heredo las propiedades entre () de Persona
        this.añosDeExperiencia = añosDeExperiencia; // la definimos porque es nueva prop
    }
    codear(){
        console.log ('Soy ' 
        + this.nombre 
        + '. codeo desde hace ' 
        + this.añosDeExperiencia 
        + ' años');
    }
}
// creamos nueva instancia de programador
var programador = new Programador ('Maria', 37, 4);
//martin.saludar(); // llamamos al metodo de la instancia de la clase
//programador.codear();
programador.saludar()

 

