// Ler  um arquivo e depois criar um arquivo adicionado 
// o conteudo o primeiro  no segundo mais algum texto


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

const escreveArquivo = (caminhoArquivo, texto) => new Promise((resolve, reject) => {
    fs.writeFile(caminhoArquivo, texto, (erro, conteudo) => {
        if(erro){
            reject(erro)
        }else{
            resolve(conteudo)
        }
    })
})

let caminhoArquivo1 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto1.txt'
let caminhoArquivo2 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto2.txt'

//roteiro de execucao
async function lerEscrever(caminho1, caminho2){
    let arquivo1 = await leArquivo(caminho1)
    await escreveArquivo(caminho2, arquivo1+'$')
    let arquivo2 = await leArquivo(caminho2)
    console.log(arquivo1)
    console.log(arquivo2)
}
lerEscrever(caminhoArquivo1, caminhoArquivo2)