// funciones 
function sumaTres(x){
    console.log (x + 3);
}
sumaTres(5);

//otras declaraciones de functiones
// PRIMERO -> idem anterior pero lo retorna al valor
function sumaTres(x) {
    return x + 3;  
}

// SEGUNDO -> guardando la funcion en una variable
var sumaTres =  function (x){
    return x + 3; 
};

// TERCERO -> funcion flecha
var sumaTres = (x) => {
    return x + 3;
};

// todas las sintaxis cumplen con lo mismo, sumarle un valor y retornarlo
// console.log -> imprime un valor (ayuda al programador)
// return -> 

var animal = "CABALLO";
console.log (animal);
