//array

let valor1 = "Luiz"
let valor2 = "Mario"
let valor3 = "Luigi"

let primeiroArray = ["Luiz", "Mario", "Luigi"]
console.log(primeiroArray)

let segundoArray = [1 , "Luiz", "Pedro", 10]
console.log(segundoArray)

//   [numero inteiro] - numeiro inteiro = index

console.log(segundoArray[1])

console.log(typeof primeiroArray)
console.log(typeof segundoArray)

//objetos tem propriedades e metodos
// primeiroArray = ["Luiz", "Mario", "Luigi", "Peach"] - maneira braçal

primeiroArray.push("Peach")
console.log(primeiroArray)

let terceiroArray = new Array(3) //garanto 3 mas existe a possibilidade popular o resto 32-bit
console.log(terceiroArray.length) // 3
terceiroArray.push(1)
terceiroArray.push(2)
terceiroArray[0] = 'A'
terceiroArray[1] = 'B'
terceiroArray[2] = 'C'
console.log(terceiroArray.length) // 5
console.log(terceiroArray)


terceiroArray.pop() //remove o ultimo elemento
console.log(terceiroArray)

terceiroArray.unshift('A')//  adiciona a esquerda - poem na frente
console.log(terceiroArray)

terceiroArray.shift() //remove primeiro elemento
console.log(terceiroArray)

terceiroArray.splice(0, 1) //remove dentro de um intervalo
console.log(terceiroArray)


// console.log(primeiroArray[0])
// console.log(primeiroArray[1])
// console.log(primeiroArray[2])
// console.log(primeiroArray[3])


//iteraçoes - loop
//For - While

let indice = 0

while(indice < 4){
    console.log(primeiroArray[indice])
    indice = indice + 1
    // Pesquisar atribuiçoes e incremento
    // indice +=  1
    // ++indice
    // inddice++
}


for(i = 0; i < 4; i++){
    console.log(primeiroArray[i])
}

for (i in primeiroArray) {
    console.log(i)
    console.log(primeiroArray[i])
}

for (const nome of primeiroArray){
    console.log(nome)
}
