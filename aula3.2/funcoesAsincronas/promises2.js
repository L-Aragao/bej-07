// Reforçando o porque do callback, promise e asyncAwait:

const calculado = (numero) => {
    setTimeout(() => numero * 2, 2*1000)
}

let resultado = calculado(2)
console.log(resultado) // undefined
let conta = resultado + 10 
console.log(conta) // error - NaN or undefined10


// Abordagem considerando o async e usando promisse para lidar com o EventLoop
const calculoDobro = (numero) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(numero*2), 2*1000)
})

resultado = calculoDobro(10)
console.log(resultado) // promise

resultado.then(
        result => {
            console.log(result)
            return calculoDobro(result)
        }
    ).then(
        result => console.log(result)
    )