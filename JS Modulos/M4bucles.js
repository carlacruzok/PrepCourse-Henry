  var suma = 0;
//lo sgte se aplica a bucles
/* suma = suma + 1;
suma = suma + 2;
suma = suma++ + 3;
suma = suma + 4; */

console.log(suma); 
// BUCLE FOR

for (var i = 0 ; i < 10; i++){
    suma = suma +1;
    console.log(suma); 
}

for (var i=0 ; i<5 ; i++){
    suma = suma + i;
    console.log ('Variable de iteracion: ', i);
} 
console.log('Variable suma: ', suma)

// BUCLE WHILE
while (suma < 3){
    suma = suma +1;
    console.log(suma);
} 


// BUCLE SWITCH 
// Si nos olvidamos un break despues de un caso, pasa al sgte caso por mas que no cumpla hasta que encuentra un break
var expr = '' ;
switch (expr) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }
  
  console.log("¿Hay algo más que te quisiera consultar?"); 

  var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
} 

// switch secuencial, donde cuatro valores diferentes se comportan exactamente de la misma manera:
var Animal = "Jirafa";
switch (Animal) {
  case "Vaca":
  case "Jirafa":
  case "Perro":
  case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
    break;
  case "Dinosaurio":
  default:
    console.log("Este animal no lo hará.");
}

// SWITCH SECUENCIAL CON MULTIPLES OPERACIONES
// el algoritmo correrá en el orden en que se coloquen las declaraciones case, y que no tiene que ser numéricamente secuencial. 
var foo = 1;
var output = "Salida: ";
switch (foo) {
  case 10:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 2:
    output += "Tu ";
  case 3:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 6.");
} 

// DO WHILE 
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345" 

var i = 0;
do {
    i += 1;
    document.write(i);
  } while (i < 5); 


  // while con "continue" salta de regreso a la condicion, no termina la sentencia
  i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

//  CONTINUE se utiliza dentro de los Bucles For, permite omitir alguna de las iteraciones si se cumple una condición específica.
// BREAK se utiliza dentro de los Bucles For, permite "romper" o finalizar el bucle con antelación si se cumple una condición específica.