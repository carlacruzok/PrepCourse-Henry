// devuelve un array con los elementos duplicados
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
console.log (doubles)   

// devuelve un  array con la raiz cuadrada de los numeros
var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots) 

// usando map para invertir una cadena
var str = "12345";
[].map 
  .call(str, function (x) {
    return x;
  })
  .reverse()
  .join("")

//toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.
var kvArray = [
    { clave: 1, valor: 10 },
    { clave: 2, valor: 20 },
    { clave: 3, valor: 30 },
  ];
  
  var reformattedArray = kvArray.map(function (obj) {
    var rObj = {};
    rObj[obj.clave] = obj.valor;
    console.log(rObj)
    return rObj;
  });
  console.log(reformattedArray)
 