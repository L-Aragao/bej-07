// function sum(x, y) { return  x + y }


//index.js
function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor - desconto;
 }
 
 const sum = (x, y) => {
     if(isNumber(x) && isNumber(y)) return x + y
     else return null
    }

const isNumber = (n) => Number(n) === n;
    
module.exports = { aplicarDesconto, sum }



