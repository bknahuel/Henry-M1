'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('');
  var sum = 0;
  for(var i=0; i<array.length; i++){
    sum = sum + Math.pow(2, array.length-1-i) * array[i];
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  if (num <= 0) return '00000000'

  var array = [];

  while (num > 0){
    array.unshift(num%2);
    num = Math.floor(num/2);
  }
  return array.join('');
}
// OTROS METODOS DE RESOLUCION
// N°1
// function BinarioADecimal(num) {
 
//   return parseInt(num,2)
//   }

// N°2  
//   function DecimalABinario(num) {
//     // tu codigo aca
  
//    return num.toString(2)
//   }

// N°3
// function BinarioADecimal(num) {
//   // tu codigo aca
// //Dado un número entero (o número de JavaScript),
// //seguimos dividiendo el número por dos y capturando su resto hasta que el número se convierte en menos de 2.
// //Por ejemplo, si tenemos un número 25,
// //sigue dividiendo 25 por 2 hasta que obtengamos el cociente menor que 2./
// let resul = 0
// let numReverse = num.split('').reverse().join('')
// for (let i = 0; i < numReverse.length; i++) {
//     resul += +num[i] * 2 ** (num.length - 1 - i);

// }
// return resul;
// }

// N°4
// function DecimalABinario(num) {
//   // tu codigo aca

//   let binario = [];
//   if(num===0)return 0;
//   while (num != 0) {

//       binario.push(num % 2);
//       num = parseInt(num / 2);

//   }
//   return binario.reverse().join('');
// }

// N°5
// function BinarioADecimal(num) {
//  let decimal = 0;
//  let numString = num.split("").reverse().reduce()((acumulador, numeroBinario, index)=>{decimal += numeroBinario * 2 (2 ** index);},0)
//  return decimal; 
// }

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}