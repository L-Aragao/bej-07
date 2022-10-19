//modo typescript
let x: number = 10;

//modo javascript
var y = 5;

// function compareJs(var1, var2) {
//   console.log(var1 + 'bla bla bla' + var2)
// }

const vetor: number[] = [1, 2, 3];

function compareIfBigger(x: number, y: number): boolean {
    return x > y;
}

console.log(compareIfBigger(x, y) ? 'X maior que Y' : 'Y maior que X')



/**
 * Interfaces
 * Muitas vezes precisamos reaproveitar estrutura de dados entre várias manipulações e funções da aplicação, 
 * nisso entram as interfaces, por exemplo:
 */
interface Pessoa {
    nome: string
    idade: number
}

let testePessoa: Pessoa = { nome: 'Mario', idade: 50 }

function bomDia(pessoa: Pessoa) {
    console.log(`Bom-dia ${pessoa.nome}`);
}
const pessoa1 = { nome: "Luiz", idade: 33 }

bomDia(pessoa1)

function maiorDeIdade(pessoa: Pessoa) {
    console.log(pessoa.idade >= 18 ? "é maior de idade" : "é menor");
}

maiorDeIdade(pessoa1)

interface Professor extends Pessoa {
    materia: string
}

let variavelProfessor: Professor = { materia: "Backend", idade: 55, nome: 'Joao' }

//Exemplo de risco - receber any - qualquer tipo
function criaProfessor(_nome: any, _idade: any, _materia: any): Professor {
    return { nome: _nome, idade: _idade, materia: _materia }
}

//Exemplo seguro - receber especifico - tipos definidos
function criaProfessor2(_nome: string, _idade: number, _materia: string): Professor {
    return { nome: _nome, idade: _idade, materia: _materia }
}

console.log(criaProfessor(10, 33, 30)) // roda com resutlado nao valido
// console.log(criaProfessor2(10, 33, 30)) // quebrou
console.log(criaProfessor2('Luiz', 33, 'Backend')) // roda


/**
 * Types
 * Quando uma variável pode assumir formatos distintos mesmo que pertencendo a uma mesma entidade 
 * podemos utilizar os Types. Esses se diferem das interfaces em alguns pontos como:
 *      Interfaces podem herdar outras interfaces, Types não;
 *      Types podem assumir formatos distintos;
 */

type Polygon =
    { tipo: 'square', x: number } |
    { tipo: 'circle', radius: number } |
    { tipo: 'rectangle', x: number, y: number }

type PolygonTest = { tipo: 'pentagono', x: number, lados: 5 } | Polygon

let poligno: PolygonTest = { tipo: 'rectangle', x: 5, y: 10 }

// type TipoPassaro = {
//     asas: 2;
//   } | { asas: 0}

// type Coruja = { noturno: true, cor: string } & TipoPassaro;

// let coruja: Coruja = {asas: 2, noturno: true, cor: 'preto'}

export function area(polygon: PolygonTest) {
    switch (polygon.tipo) {
        case 'square': return polygon.x ** 2
        case 'circle': return Math.PI * polygon.radius ** 2
        case 'rectangle': return polygon.x * polygon.y;
    }
}

console.log(area(poligno))
/**
 * Enums
 * 
 * Os Enums são formas de definirmos constantes na tipagem a fim de reaproveitarmos código 
 * entre funções e/ou arquivos. 
 * Por exemplo, na função acima poderíamos usar os Enums da seguinte forma:
 */

enum PolygonTypes {
    Square,
    Circle,
    Rectangle,
    Pentagano
}

type Polygon2 =
    { type: PolygonTypes.Square, x: number } |
    { type: PolygonTypes.Circle, radius: number } |
    { type: PolygonTypes.Rectangle, x: number, y: number };



export function area2(polygon: Polygon2): number {
    switch (polygon.type) {
        case PolygonTypes.Square: return polygon.x ** 2
        case PolygonTypes.Rectangle: return polygon.x * polygon.y
        case PolygonTypes.Circle: return Math.PI * polygon.radius ** 2
    }
}

let teste: Polygon2 = {type: PolygonTypes.Circle, radius: 5}  
console.log(area2(teste))

export function perimetro(polygon: Polygon) {
    switch (polygon.tipo) {
        case 'square': return polygon.x * 4
        case 'circle': return Math.PI * 2 * polygon.radius
        case 'rectangle': return 2 * polygon.x + 2 * polygon.y
    }
}
