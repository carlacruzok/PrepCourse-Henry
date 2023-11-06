// var frase =  "The Henry Challenge is close!";

// const seppalabra = frase.split(' ');
// //console.log(seppalabra); // [ 'The', 'Henry', 'Challenge', 'is', 'close!' ]
// for (var i = 0; i < seppalabra.length; i++){
//     seppalabra[i] = seppalabra[i].split('').reverse().join('')
// }
//   return seppalabra.join(' ')
//console.log(seppalabra.join(''))

// console.log('Hola Mundo') 
// var string = 'plural'
// var palabra = ''
//    for (var i = 0; i < string.length; i++){
//       if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'){
//         palabra += string[i]
//       }
//     }
//     console.log(palabra)
//    return palabra


//---------------------------------------------hacker rank----------------------------------------------------------
// Dada una matriz de números enteros, calcula las razones de sus elementos que son positivos , negativos y cero . 
//Imprima el valor decimal de cada fracción en una nueva línea conlugares después del decimal.
// Nota: Este desafío introduce problemas de precisión. Los casos de prueba están escalados a seis decimales, 
//aunque las respuestas con error absoluto de hastason aceptables.
// Ejemplo
// Hayelementos, dos positivos, dos negativos y uno cero. Sus proporciones son,y. Los resultados se imprimen como:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
  // Write your code here
  
let positivo = 0, negativo = 0, cero =  0
let decimalcero, decimalpositivo, decimalnegativo;
for (var i = 0; i < arr.length; i++){
  if( arr[i] === 0) cero ++
   else if (arr[i] < 0)negativo ++
      else positivo ++
  }
  decimalcero = (cero / arr.length)
  decimalnegativo = (negativo / arr.length)
  decimalpositivo = (positivo / arr.length)
    
  console.log(decimalpositivo.toFixed(6))
  console.log(decimalnegativo.toFixed(6))
  console.log(decimalcero.toFixed(6))
}

// Dados cinco números enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando
// exactamente cuatro de los cinco números enteros. Luego imprima los valores mínimo y máximo respectivos como una sola
// línea de dos enteros largos separados por espacios.
// Ejemplo
// La suma mínima esy la suma máxima es. La función imprime
// 16 24

let arr = [1,3,5,7,9]
let summax = 0, summin = 0
min = Math.min(...arr)
max = Math.max(...arr)
  for (var i = 0; i < arr.length; i++){
    summin = summin + arr[i]
    summax = summax + arr[i]
}
summin=summin - max
summax= summax - min
console.log(summin, summax)