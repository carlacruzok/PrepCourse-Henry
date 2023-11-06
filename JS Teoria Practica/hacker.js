// for (var i = 0; i < arr.length; i++){
//     if( arr[i] === 0) cero ++
//      else if (arr[i] < 0)negativo ++
//         else positivo ++
//     }
//     decimalcero = (cero / arr.length+1).toFixed(6)
//     decimalnegativo = (negativo / arr.length+1).toFixed(6)
//     decimalpositivo = (positivo / arr.length+1).toFixed(6)
      
//     console.log (decimalcero, decimalnegativo, decimalpositivo)
let array = [1, 'Henry', 2]
let newarray = array.filter((numero) => Number.isInteger(numero));
console.log(newarray)
return newarray