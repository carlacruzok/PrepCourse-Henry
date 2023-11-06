// operador AND
function mayorYMenor(num){
    if(num > 5 && num < 10) console.log(true);
    else console.log(false);
}
mayorYMenor(2)
mayorYMenor(7)

function mayorYMenorYPar(num){
    if (num >5 && num<10 && num%2===0) console.log(true);
    else console.log(false);
}
mayorYMenorYPar(7);
mayorYMenorYPar(8);

//operador OR
function operadorOr(str){
    if (str==='Henry' || str.length<2) console.log(true);
    else console.log(false);
}

operadorOr('javascript');
operadorOr('h');
operadorOr('Henry');

//operador NOT
function negacion(permiso){
    if (!permiso) console.log('Tiene permiso');
}
negacion(true);
negacion(false); 

// o lo mismo que decir
function negacion(permiso){
    if (permiso === true) console.log('Tiene permiso')
}
negacion(true); 

function negacion(permiso){
    if (permiso !== true) console.log('Tiene permiso')
}
negacion(false);
