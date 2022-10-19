// Metodo pertence a um objeto
// funcao pertence a um contexto
// todo metodo é uma funcao, mas nem toda funcao é um metdo

// function nomeDaFuncao(){
//     console.log("primeira funcao!")
// }

// nomeDaFuncao()

// Outro Exemplo

// function primeiraFuncao(nome){
//     console.log(`${nome} Bem vindo a aula de funcoes`)
// }

// primeiraFuncao("Luiz"


function somar(x, y) {
    // console.log(`O resultado da some é ${a + b}`)
    let soma = x + y
    console.log("O resultado da soma é: " + soma)
}

// somar(10, 5)
subtrair(10, 5)
multiplicar(10, 5)
dividir(10, 5)
resto(10,3)

function subtrair(x, y) {
    console.log(`O resultado da subtracao é ${x - y}`)
}

function multiplicar(x, y) {
    console.log(`O resultado da multiplicao é ${x * y}`)
}

function dividir(x, y) {
    console.log(`O resultado da divisao é ${x / y}`)
}

function resto(x, y) {
    console.log(`O resto da divisao é ${x % y}`)
}

/**
 * Function declaration podem ser invocadas 
 * antes ou depois de serem definidas no código fonte, não faz diferença.
 * Isso é chamado de function hosting 
 */


//Function expressions - Função Anonima

/**
 * Funções anônimas são funções sem nome.
 * Funções anônimas podem ser usadas como argumento para outras funções 
 */
const sum = function (x, y) {
    return x + y
}

let soma2 = sum(10, 5)
console.log(soma2)

// Funcoes de seta - Arrow Functions
const subtraction = (x = 0, y = 0) => x - y

console.log(subtraction(10, 5))

const calcularRaizQuadrada = function (n = 1){
    // return Math.sqrt(n)
    return n ** 0.5
}
Math.sqrt(64)

console.log(subtraction())
console.log(calcularRaizQuadrada())
console.log(calcularRaizQuadrada(8))