// let array = ['hi', 'hello', 'ni hao', 'guten tag']
// let palabralarga = array[0] 
// console.log(palabralarga)
//   for (var i = 0; i < array.length; i++){
//       if (array[i].length >= palabralarga.length)
//       palabralarga = array[i]
//       console.log(palabralarga)
//   } 
//   console.log(palabralarga)
//   return palabralarga
//---------------------------------------------------------------------------------------------

// let amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
// let newobj = {}
// let nombre = 'toni'
//   for (var i= 0; i < amigos.length; i++){
//     if (amigos[i].nombre === nombre)
//     newobj = (amigos[i])
  
//   }
//    return newobj 
   //---------------------------------------------------------------------------------------------


   // function numeroSimetrico(num) {
   //  var numero = num.toString();
   //  console.log(numero, num)
   //  let otronumero= numero.split(' ')
   //  console.log(otronumero)
   //  let masnum = otronumero.reverse()
   //  console.log(masnum)
   //  let onum= masnum.join('')
   //  console.log(onum)
   //  if (numero === num) return true
   //  else return false
   // }

   // numeroSimetrico(123545)
  
 //---------------------------------------------------------------------------------------------

function invertir (string){
let arr = string.split('')
  console.log(arr)
  let nuevo = arr.reverse()
  console.log(nuevo)
  let fin = nuevo.join('')
  console.log(fin)
}
console.log(invertir('123456, Hola mundo'))