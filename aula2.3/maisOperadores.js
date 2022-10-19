/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade
=== igualdade estrita (valor e tipo)
!= dirença
!== diferente estrito (valor e tipo)
*/

console.log(10 > 9) // true
console.log(10 >= 10) // true
console.log(9 < 9) // false
console.log(8 <= 9) //true
console.log( "10" == 10) //true
console.log( "10" === 10) //false
console.log( "10" != 10) //false
console.log( "10" !== 10) //true

/*
    Operadores Lógicos
    && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR -> OU
    ! -> NOT -> NÃO
*/


const usuario = 'Luiz'; 
const senha = '123456';

// //                      True        OR          False
const vaiLogarOr = (usuario === 'Luiz' || senha === '12345'); //true

console.log(vaiLogarOr);  // true
console.log(!vaiLogarOr); // false
console.log(!!vaiLogarOr);// true

//Estudar Falsy values - TODO Homework