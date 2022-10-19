//callbacks

//Importando o Modulo de leitura do JS
const fs = require('fs')

//O caminho do arquivo que eu quero manipular
const pathFile1 = "/Users/mac_luiz/Documents/Workspace/bej-07/aula3.1/funcoesAsincronas/files/texto1.txt"

// O modulo FS no metodo readFile, pede uma funcao de retorno - o callback
// function retorno(err, contents){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Leu o Arquivo")
//         console.log(contents)
//     }
// }
// fs.readFile(pathFile1, 'UTF-8', retorno)


//Nesse exemplo encadiamos o readFile e o writeFile utilizando de callback
// fs.readFile(pathFile1, 'UTF-8', (err, contents) => {
//     let pathFile2 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.1/funcoesAsincronas/files/texto2.txt'
//     let texto = contents + " teste com Arquivo2"
//     fs.writeFile(pathFile2, texto, (err, contents) => {
//         if (err) {
//             console.log('deu ruim')
//             console.log(err)
//         } else {
//             console.log("Arquivos manipulados com sucesso")
//             console.log(contents)
//         }
//         fs.readFile(pathFile2, 'UTF-8', (err, contents) => {
//             console.log(err || contents)
//         })
//     })
// })

// Exercicio para fixar
// recebe um numero - depois de 3 segundos, retorna o dobro e 
// depois de 3 segundo retorna o dobro do dobro


// Essa abordagemn não funciona por conta do event loop

// function calculoDobro(numero) {
//     setTimeout(
//         () => numero * 2,
//         3 * 1000
//     )
// }

// let resultado1 = calculoDobro(10) // 20
// console.log(resultado1) // undefined
// let resultado2 = calculoDobro(resultado1) 
// console.log(resultado2) // undefined

// Aqui trazemos a aplicação do callback
// Pensando no funcionamento do eventLoop o callback explora a possibilidade de uma func
// Receber outra func como parametro, isso encadead as chamadas e conseguimos
// 'Driblar' o async do JavaScript
function calculoDobro(numero, callback) {
    setTimeout(
        () => {
            let resultado = numero * 2
            console.log(`O dobro de ${numero} é: ${resultado}`)
            if (callback) {
                callback(resultado)
            }
        },
        3 * 1000)
}

// quando passamos funcoes como parametro não podemos resolver a funcao,
// isto e, nao podemos passar a funcao com o call - ()
// errado:
// calculoDobro(10, calculoDobro())

// correto:
calculoDobro(10, calculoDobro)

// outra maneira possivel é criar uma funcao anonima, assim conseguimos passar a funcao com o call
// vamos explorar isso nos casos onde precisamos encader mais de 1 funcao e tbm transmitir paramentros
// exe:
calculoDobro(10, (x) => calculoDobro(x)) // x é um nome arbitrario ele representa o retorno da primeira chamada

// Exercicio - pegue como referencia o exercico do posto
// no arquivo eventLoopTeest.js e utilize o callback

let leitura1 = 0
let leitura2 = 0

function primeiraTemperatura(callback) {
    //setTimeOut pode receber uma funcao como parametro, setTimeOut(funcao, tempo)
    //depois do tempo ele executa a funcao
    // () => 25 - criamos uma funcao anonima que retorna 25
    console.log(`comecou a rodar a primeira leitura`)
    setTimeout(() => {
        leitura1 = 25 
        callback()
    }, 3000) // esperar 1 segundos - 1 s = 1000 ms    
}

function segundaTemperatura(callback) {
    console.log(`comecou a rodar a segunda leitura`)
    setTimeout(() => {
        leitura2 = 30 
        callback()
    }, 3000) // esperar 1 segundos - 1 s = 1000 ms
}

function verificaTemperatura() {
    console.log(`comecou a validacao`)
    setTimeout(
        () => {
            if (Number.isInteger(leitura1) && Number.isInteger(leitura2)) {
                if (leitura1 >= leitura2) {
                    console.log("Fraude na bomba")
                } else {
                    console.log("Validacao OK")
                }
            } else {
                console.log("A leituras nao estao completas/ corretas")
            }
        }, 1000)
}

// callbacks das funcoes
primeiraTemperatura(() => {
    segundaTemperatura(() => {
        verificaTemperatura()
    })
})
