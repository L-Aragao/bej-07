//promise

// Importando o Modulo de leitura do JS
const fs = require('fs')

// O caminho do arquivo que eu quero manipular
const pathFile1 = "/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto1.txt"
const pathFile2 = "/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto2.txt"


// Promise - aqui trazemos a ideia de promessa
// Sabemos que não tera uma soluçao instantanea no callstack, entao criamos a promesa
// que tera uma soluçao ou rejeicao: resolve e reject
// assim conseguimos encadear as execucoes - Uma alternativa para as funcoes de callbacks

// ex de funcao que retorna uma promessa:
const leArquivo = (caminhoDoArquivo) => new Promise((resolve,reject) => {
    fs.readFile(caminhoDoArquivo, 'UTF-8', (err, contents) => {
        if(err) { 
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

let arquivo1 = leArquivo(pathFile1)
//console.log(arquivo1) //promise

// then - essa verbo, palavra reservada, indica que havera uma acao assim que a promessa for cumprida com sucesso
arquivo1.then(
    resultado => { //resultado da execucao, pode ser direcionado para alguma acao
        console.log(resultado)
        return leArquivo(pathFile2) //podemos retornar uma promise para aumentar a interaçoes
    })
    .then(
        resultado => console.log(resultado)
    )


//Exercicio: use promises para encadear a chamada da funcao calculoDobro

const calculoDobro = (x) => new Promise((resolve, rejects) => {
    resolve(x*2)
})

calculoDobro(10).then(
    result => {
        console.log(result)
        return calculoDobro(result)
    }
).then(
    result => console.log(result)
)