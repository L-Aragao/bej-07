class Mamifero {
    #idade;

    constructor(idade) {
        this.#idade = idade;
    }

    get idade() { return this.#idade; }

    set idade(value) { this.#idade = value; }
}

class Pessoa extends Mamifero {
    #nome;
    #sobreNome;

    constructor(nome, sobreNome, idade) {
        super(idade);
        this.#nome = nome;
        this.#sobreNome = sobreNome;
        console.log(this)
    }

    get nome() { return this.#nome; }

    set nome(value) { this.#nome = value; }

    get sobreNome() { return this.#sobreNome; }

    set sobreNome(value) { this.#sobreNome = value; }

    getNomeCompleto() { return `${this.#nome} ${this.#sobreNome}` }
    
    // mais membros da classe…
}

const pessoa = new Pessoa('Luiz', 'De Aragao', 33)

console.log(pessoa.nome)
console.log(pessoa.sobreNome)
console.log(pessoa.getNomeCompleto())




