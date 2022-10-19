//Ler arquivos com async e await

const fs = require('fs')
const codificacao = 'UTF-8'

const leArquivo = (caminhoArquivo) => new Promise((resolve, reject) => {
    fs.readFile(caminhoArquivo, codificacao, (erro, conteudo) => {
        if(erro){
            reject(erro)
        }else{
            resolve(conteudo)
        }
    })
})

let caminho1 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto1.txt'
let caminho2 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto2.txt'
let caminho3 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto3.txt'

async function fluxoLeitura(){
    let arquivo1 = await leArquivo(caminho1)
    let arquivo2 = await leArquivo(caminho2)
    let arquivo3 = await leArquivo(caminho3)
    console.log(arquivo1)
    console.log(arquivo2)
    console.log(arquivo3)
}
console.time()
fluxoLeitura().finally(console.timeEnd())

// Promise.catch() // captura a falha da execucao - abra janela para tramamento do erro
// Promise.then() // retorna promessa
// Promise.finally() // mesmo que algum erro aconteça, ação do contexto finally sera executada - não retorna nada, encerra promessa


// Lembrem que o Async Await trabalha com promessas, isso nos permite utilizar o Promise.All
// Promise.All é um recurso que explora o paralelismo, processamos em threads do Libuv e webApi
async function fluxoLeituraParalela(){
    let arquivo1 = leArquivo(caminho1)
    let arquivo2 = leArquivo(caminho2)
    let arquivo3 = leArquivo(caminho3)
        
    Promise.all([arquivo1, arquivo2, arquivo3])
        .then(
            result => {
                console.log(result[0])
                console.log(result[1])
                console.log(result[2])
            }
        )
}
console.time()
fluxoLeituraParalela().finally(console.timeEnd())// Nesse Exemplo temos um resultado de 4 a 5 vezes mais rapido