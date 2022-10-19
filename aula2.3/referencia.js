/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/

// valores copiados para dados primitivos
let a = 10
let b = a

console.log(a)
console.log(b)

a = 15 
console.log(a)
console.log(b)


//por referencia * ponteiros - para estrutura de dados mais complexas OBJETOS
const d = {
    nome: 'Luiz',
    sobrenome: 'De Aragao'
  };

const e = d;

console.log(d);
console.log(e);

e.nome = 'João';
console.log(d);
console.log(e);