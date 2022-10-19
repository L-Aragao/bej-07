//Exercicio factory
//Para testar no navegador no navegador
function fabricaPessoas(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoas = []

const numero = parseInt(prompt("insira o numero de pessas"))

for (let i = 0; i < numero; i++) {
    let nome = prompt(`Insira o nome da pessoa ${i + 1}`)
    let sobrenome = prompt(`Insira o sobrenome da pessoa ${i + 1}`)
    let idade = prompt(`Insira a idade da pessoa ${i + 1}`)
    pessoas.push(fabricaPessoas(nome, sobrenome, idade))
}

console.log(pessoas.join("\n"))
alert(JSON.stringify(pessoas))


const texto = document.getElementById('texto');

texto.innerHTML = `<h1>Lista de Pessoas</h1>`

for (let i = 0; i < pessoas.length; i++) {
    texto.innerHTML += `<p>Dados da pessoa ${i + 1} </p>`
    texto.innerHTML += `<p>Nome: ${pessoas[i].nome} </p>`
    texto.innerHTML += `<p>Sobrenome: ${pessoas[i].sobrenome} </p>`
    texto.innerHTML += `<p>Idade: ${pessoas[i].idade} </p>`
    texto.innerHTML += `<p></p>`
}