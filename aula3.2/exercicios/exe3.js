

//BONUS
/**
 * A partir da versao 10 do JS temos o metodo promisify da biblioteca UTIL
 * o promisify simplifica a interacao de modulo que não trabalham nativamente com promessas
 * no exercicios 1 e 2 usamos toda a estrutura de promise para lidar com o FS (nao suporta promise nativamente)
 * veja como fica com o promisify
 */

// importamos o promisify do modulo util
const fs = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile) //aqui a magica acontece

const fileEncode = 'UTF-8'

let caminho1 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto1.txt'
let caminho2 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto2.txt'
let caminho3 = '/Users/mac_luiz/Documents/Workspace/bej-07/aula3.2/funcoesAsincronas/files/texto3.txt'

// promisify encapsulou o callback e tornou o uso do fs.readFile muito mais simples:
// let arquivo1 = readFileAsync(caminho1, fileEncode)
// // arquivo1.then(result => console.log(result))

async function fluxoLeitura(){
        let arquivo1 = await readFileAsync(caminho1, fileEncode)
        let arquivo2 = await readFileAsync(caminho2, fileEncode)
        let arquivo3 = await readFileAsync(caminho3, fileEncode)
        console.log(arquivo1)
        console.log(arquivo2)
        console.log(arquivo3)
}
fluxoLeitura().catch(err => console.error(err))