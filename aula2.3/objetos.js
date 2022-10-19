//Objetos

const nome1 = "Luiz"
const sobreNome1 = "De Aragão"
const idade1 = 32

const nome2 = "Maria"
const sobreNome2 = "Bonita"
const idade2 = 55

console.log(`{ nome: '${nome1}', sobrenome: '${sobreNome1}', idade: '${idade1}' }`)
console.log(`{ nome: '${nome2}', sobrenome: '${sobreNome2}', idade: '${idade2}' }`)

//JSON - Javascript Object Notation

const aluno1 = {
    nome: "Luiz",
    sobreNome: "De Aragao",
    Idade: 30,
    classe: {
        professora: "Tia do prezinho",
        numero_da_chamada: 30
    }
}

//Maneira de adiciona propriedades em um obj generico
aluno1['cidade'] = "São Paulo"

console.log(aluno1.classe.professora)
console.log(aluno1.cidade)

const obj = {};

// Object.defineProperty( obj, "MY_FAKE_CONSTANT", {
//   value: "MY_FAKE_CONSTANT_VALUE",
//   writable: false,
//   enumerable: true,
//   configurable: false // instead of true
// });

// console.log(obj.MY_FAKE_CONSTANT)
// obj.MY_FAKE_CONSTANT = "TEST"
// console.log(obj.MY_FAKE_CONSTANT)




// console.log(pessoa1)
// Acessar propriedades de um objeto usar o operador (.)
// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)


// Factory - exe na pasta factory

// const fabricaPessoas = function (nome, sobrenome, idade) { 
//     return {
//         nome, 
//         sobrenome, 
//         idade
//     }    
// } 

// const listaPessoas = []
// for(let i = 0; i < 10; i++){
//     ...
//     listaPessoas.push(...)
// }

// const fabricaPessoas = function (nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade,

//         fala() {
//             console.log(`Eu sou o ${this.nome} e a minha idade atual é ${this.idade}.`);
//         },

//         incrementaIdade() {
//             this.idade++;
//         }
//     }
// }

// const pessoa2 = fabricaPessoas("Mario", "Bros", 30)
// const pessoa3 = fabricaPessoas("Bowser", "Kopa", 50)
// const pessoa4 = fabricaPessoas("Princess", "Peach", 40)
// const pessoa5 = fabricaPessoas("Toad", "Bros", 50)

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)
// console.log(pessoa5)

// pessoa2.fala()
// pessoa2.incrementaIdade()
// pessoa2.fala()
// pessoa2.incrementaIdade()
// pessoa2.fala();
// pessoa2.incrementaIdade();
// pessoa2.fala();