/** async await é uma maneira mais elegante de se utilizar o promise
 * o async await e o promise tem por objetivo serializar nosso codigo
 * isto é, tratamos as funçoes como se estivessemos em um contexto sincrono
 */

// A prova que Async Await é equivalente as Promise Then
// async function calculoDobro(numero) {
//     setTimeout(() => numero*2, 2 * 1000)
// }

// let resultado =  calculoDobro(10)
// console.log(resultado) // promisse

// resultado.then( // conseguimos utiliza o then em uma promise retornar pelo async
//     result => console.log(result)
// )
//------------------------------------------------------------


const fs = require('fs')

const pathFile1 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto1.txt'
const pathFile2 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto2.txt'

// Lembrando que utilizamos callback, promise e AsyncAwait para garantir relaçao em açoes
// arquivo1 = fs.readFile(pathFile1, 'UTF-8',(err, contents) => contents)
// arquivo2 = fs.readFile(pathFile2, 'UTF-8',(err, contents) => contents)
// console.log(arquivo1) // undefined
// console.log(arquivo2) // undefined
// No exemplo acima verificamos a necessidade do de alguma das abordagens


// Alguns modulos/metodos não tem relação nativa com promise e isso compromete o fluxo do async e await
// Uma saida é encapsular o metodo em um contexto que aceite promise
// Fazemos isso com o fs.readFile:
const leArquivo = (caminhoArquivo) => new Promise((resolve, reject) => {
    fs.readFile(caminhoArquivo, 'UTF-8', (err, contents) => {
        if(err) reject(err)
        else resolve(contents)
    })
})

async function leiturasConsecutivas(){
    const arquivo1 = await leArquivo(pathFile1)
    console.log(arquivo1)
    const arquivo2 = await leArquivo(pathFile1)
    console.log(arquivo2)
}
leiturasConsecutivas() 
