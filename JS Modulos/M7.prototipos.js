//PROTOTYPE -> los obj o elementos pueden extender sus propiedades y metodos
// protopype ARRAY (objeto global)
Array.prototype.mayorQueTres = function (){
    var arregloModificado = [];

    for (var i = 0; i < this.length; i++){
        if (this[i] > 3){ // this equivale al arreglo que esta invocando el metodo
            arregloModificado.push(false);
        } else {
            arregloModificado.push(this[i]);
        }
    }return arregloModificado
}

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);
// Creamos una clase
class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
// mediante prototype agregamos un metodo
 // creamos un metodo para la clase latinoamerica para agregar Paises utilizando el metodo prototype
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
//creamos una vble que sera igual a la instancia de clase Latinoamerica
let continente = new LatinoAmerica(); 
//accedemos al metodo agregarPais
continente.agregarPais('México');
//
console.log(continente.paises);