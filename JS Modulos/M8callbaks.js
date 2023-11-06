var devuelveUsuario = function(){
    return 'Camilo';
};

var devuelveSaludo = function(){
    return 'Hola';
};

var saludar = function (cb1, cb2){
    return cb1() + ' ' + cb2();
};

var resultado = saludar(devuelveSaludo, devuelveUsuario);
console.log (resultado);

// la funcion recibe un parametro (comida)
var devuelvoFrase = function (comida){
    return 'Hoy quiero comer: ' + comida;
}

// la funcion recibe 2 parametros, /comida y otra funcion)
var hablar = function (comida, cb) {
    return cb(comida);
}

//la nueva vble ejecutara la funcion hablar y pasando como parametro pizza y la funcion devuelvo frase, que es nuestro callback
    var fraseFinal = hablar('Pizza', devuelvoFrase);
    console.log(fraseFinal);

    // la fcion "hablar" que ejecuta el callback, recibio por parametro la vble comida y ademas la funcion callback (llamada cb)
    // a su vez esta vble comida se le paso como argumento al callback cb, por lo que la vble comida fue utilizada como argumento en ambas fnciones

