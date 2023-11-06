function cuidadoConElConsoleLog(nombre) {
       console.log(nombre);
        //return nombre;
};

function otraFuncion() {
    return(
        "el nombre retornada por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('Camilo')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}
