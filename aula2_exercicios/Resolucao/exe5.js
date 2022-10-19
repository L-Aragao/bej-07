//factory
function fabricaPessoa(sexo, altura){
    return {
        sexo, altura
    }
}

listaPessoas = []

const numeroPessoas = prompt("Insira o numero de pessoas")

for(let i = 0; i < numeroPessoas; i++){
    let sexo = prompt("Insira M ou F")
    let altura = prompt("Insira a altura")
    listaPessoas.push(fabricaPessoa(sexo, altura))
}

let contadorM = 0
let contadorF = 0
let pessoaAlturaMax = listaPessoas[0]
for(pessoa of listaPessoas){
   console.log(pessoa.sexo)
    if(pessoa.sexo.toUpperCase() === 'F'){ contadorF++}
    else if(pessoa.sexo.toUpperCase() === 'M') {contadorM++}
    
    if(parseFloat(pessoa.altura) > parseFloat(pessoaAlturaMax.altura)){
        pessoaAlturaMax = pessoa
    }
}

alert(`Numero de Homem ${contadorM} `)
alert(`Numero de Mulheres ${contadorF} `)
alert(`Pessoa com a maior altura é  ${pessoaAlturaMax.sexo} - altura: ${pessoaAlturaMax.altura} `)