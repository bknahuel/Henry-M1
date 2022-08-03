'use strict'

function BinarioADecimal(num) {
  // tu codigo aca


}

function DecimalABinario(num) {
  // tu codigo aca
  const arr = [];
  if (num < 0){
    Math.ceil(num);
    arr.unshift(num % 2);
  } else {
    return "El numero es menor a 0";
  }
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}