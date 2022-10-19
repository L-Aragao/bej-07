// Escopo na sua menor avaliaçao é onde um dado/ variavel/ propriedade pode ser modificado ou acessado
// Basicamente exitem dois 2 global, função

// var result = 20

// if (true){
//     let result = 10;
// }
// console.log(result) //error

// if (true){
//     (() => {let result = 10})();
// }
// console.log(result) // error

// if (true) {
//     //IIFE
//     (function () {
//         var result = 10;
//     })();
//     console.log(result); // ReferenceError
// }


// function logResult() {
//     var result = 5;
// }
// if (true) {
//     logResult();
// }
// console.log(result);  // ReferenceError

// Resolvendo referencias de escopo em cadeia
// JavaScript segue o principio de "Closer is better"
// se a function outer() declara o objeto x, e ela possui a function inner() que tambem declara um objeto x:
// outer() tera a referencia do x de outer 
// inner() tera a referencia do x de inner

// x = 'teste';

//quebra o principio funcional declarar variarivel sem var ou let, e em escopo de funcoes o Var ter maior vunerabilidade
// function outer() {
//     console.log(x) // quebra apenas se definirmos o escopo com LET
//     function inner() {
//         console.log(`Veio como ${x}`)
//         let x = 'INNER'
//         console.log(`Saiu como ${x}`)
//         return x;
//     }
//     let x = 'OUTTER'
//     return { x: x, y: inner() };
// }
// console.log(outer())
// console.log(x)

//Closures

// function outter(){
//     let x = "Vale Alguma coisa "
//     function inner(y){
//         return x + y + ' teste'
//     }
//     return inner
// }

// let teste = outter()
// console.log(teste)
// console.log(teste('tudo bem'))


// exercicio - escodam os dados confidencias utilizando de closure
// Closures podem ser usadas para omitir/esconder propriedades e dados (encapsulamento)
// Traz o conceito de privado

const escola = (function() {
    let professores = [];
    let alunos = [];
    function addAluno(nome, serie) {
        alunos.push({nome, serie})
    }
    function addProfessores(nome, materia){
        professores.push({nome, materia})
    }
    function getAlunos(){return alunos}
    function getProfessores(){return professores}
    return {
        adionarAluno: addAluno,
        adicionarProfessores: addProfessores,
        retornarAlunos: getAlunos,
        retornarProfessores: getProfessores
    };
})()

console.log(escola)
escola.adicionarProfessores('Luiz', 'JS')
console.log(escola.retornarProfessores())