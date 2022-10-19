//callbacks

const fs = require('fs')
function retorno(err, contents){
    console.log("Leu o Arquivo")
    console.log(contents)
}

const pathFile1 = "/Users/mac_luiz/Documents/Workspace/bej-07/aula3/funcoesAsincronas/files/texto1.txt"

let file = fs.readFile(pathFile1, 'UTF-8',retorno)

//TODO trazer exercicios!!!
