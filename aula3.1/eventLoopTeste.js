// Exemplo 1 de asyncronismo
// console.log(`hello1`)
// setTimeout(() => console.log("Hello2"), 1000)
// console.log(`hello3`)
// Resultado sera hello1, hello3, hello2

// Exemplo 2 Asyncronismo com funcoes
// function sayHello(){
//     console.log("Hello!")
// }

// function sayHelloLate(){
//     setTimeout(() => console.log("Hello late"), 1000 )
// }

// sayHelloLate()
// sayHello()
// // resultado sera hello, hello late


// Exemplo 3 - asyncronismo envolvendo funcoes

function primeiraTemperatura(){
    //setTimeOut pode receber uma funcao como parametro, setTimeOut(funcao, tempo)
    //depois do tempo ele executa a funcao
    // () => 25 - criamos uma funcao anonima que retorna 25
    setTimeout(()=> 25, 1000) // esperar 1 segundos - 1 s = 1000 ms
}

function segundaTemperatura(){
    setTimeout(()=> 30, 1000) // esperar 1 segundos - 1 s = 1000 ms
}

function verificaTemperatura(){
    setTimeout(
    () => {if(Number.isInteger(a) && Number.isInteger(b)){ 
        if(a >= b){
            console.log("Fraude na bomba")
        }else{
            console.log("Validacao OK")
        }
    }else {
        console.log("A leituras nao estao completas/ corretas")
    }}, 1000)
}



let a = primeiraTemperatura()
console.log(a) // undefined 
let b = segundaTemperatura()
console.log(b) // undefined
verificaTemperatura() // A leituras nao estao completas/ corretas

/**  Com o ultimo exemplo conseguimos validar o modo de trabalho do nodeJs
 * o Asincronismo pode atrapalhar a logica.
 * temos mecanismos como callback, promises e await async para conseguir
 * lidar com isso
*/