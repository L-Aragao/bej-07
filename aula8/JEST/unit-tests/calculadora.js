const sum = (x, y) => {
    if(isNumber(x) && isNumber(y)) return x + y
    else return null
   }

const sub = (x, y) => {
    if(isNumber(x) && isNumber(y)) return x - y
    else return null
}

const isNumber = (n) => Number(n) === n;

module.exports = { sum, sub }