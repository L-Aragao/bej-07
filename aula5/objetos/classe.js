// Nova palavra reservada - new

function F() {
    this.prop = 'hello'
    // console.log(this)
}

// instaciar = utilizar/ criar um objeto com referencia de uma classe ou funcao
const f = new F();
// console.log(f);
console.log(typeof f)

// classes - pensem em RECEITAS
// em resumo são um conjunto de regras que servem de modelo para objetos
// class => é composta por this (propriedades), arguments, methods (length, apply, call, push, etc), escopo)
// function != class => classe não é de primeira ordem, isto é, não pode ser tratada como variavel
class MarvelHero {
    constructor() {
        this.nome = "NewHeo"
    };
    // Funcao em uma classe é chamda de metodo
    getEscopo() { console.log(this) }
}

// criando um objeto do tipo MarvelHero
const novoHeroi = new MarvelHero();
console.log(typeof novoHeroi)
novoHeroi.getEscopo()


class Escola {
    #professores; // # server para garantir o private 
    #alunos;

    constructor(professor, aluno) {
        this.#professores = [];
        this.#alunos = [];
        if (professor)
            this.addProfessor(professor.nome, professor.materia)
        if (aluno)
            this.addAluno(aluno.nome, aluno.serie)
    }

    setAluno(nome, serie) {
        this.#alunos.push({ nome, serie })
    }

    addProfessor(nome, materia) {
        this.#professores.push({ nome, materia })
    }

    getAlunos() { return this.#alunos }

    getProfessores() { return this.#professores }
}

let professor = { nome: 'Luiz', materia: 'Backend' }
const escola1 = new Escola(professor)

console.log(escola1)
escola1.addProfessor('Luiz', 'JS')
console.log(escola1.getProfessores())




