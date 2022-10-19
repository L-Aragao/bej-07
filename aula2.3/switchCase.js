//switch case

let imc = 6

switch (true) {
    case imc <= 18:
        console.log("Abaixo do peso ideal")
        break
    case imc >= 18.1 && imc < 25:
        console.log("Peso ideal")
        break
    case imc >= 25.1 && imc < 30:
        console.log("Sobrepreso")
        break
    default:
        console.log("Obesidade")
}


//Multiplos cases
const mes = new Date().getMonth();

switch (mes) {
    // Jan, Fev, Mar
    case 0:
    case 1:
    case 2:
        console.log("Verao");
        break;
    // Abr, Mai, Jun
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    // Jul, Ago, Set
    case 6:
    case 7:
    case 8:
        console.log("Inverno");
        break;
    // Out, Nov, Dez
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default:
        console.log("Algo de errado nao esta certo.");
}

// operado ternario

let nome = "Luiz"
let validaProfessor = (nome = "Luiz") ? true : false
console.log(validaProfessor)

let salario = 1000;
let bonus = salario * (salario > 10000 ? 0.10 : 0.15);
console.log(`Para seu salario de R\$${salario} o bonus e: R\$${bonus}`)
