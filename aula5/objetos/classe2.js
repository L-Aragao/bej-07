// getter N Setter
// no JS temos duas palavras reservadas para lidar com o encapsulamento de classes
// o get e o set
// utilizamos deles para manipular as propriedades da classe de maneira "segura"

class Person {
    #_firstname;
    #_lastname;
    #privadao;

    constructor(nome, sobrenome) {
        this.#_firstname = nome;
        this.#_lastname = sobrenome;
    }

    get fullName() {
        return this.#_firstname + ' ' + this.#_lastname;
    }

    get firstname() { return this.#_firstname; }

    set firstname(value) {
        this.#_firstname = value;
    }

    get lastname() { return this.#_lastname; }

    set lastname(value) {
        this.#_lastname = value;
    }

    returnMetodo() { return 'Aqui temos um metodo puro!'; }
}

// get e set não são tratados como metodos/ funcoes no objeto destino, 
// sao transparecidos como propriedades
const pessoa = new Person('Luiz', 'De Aragao')

pessoa.fullName = 'Teste'
pessoa.lastname = 'Ultimo'

console.log(pessoa.fullName)
console.log(pessoa.firstname)
console.log(pessoa.lastname)
console.log(pessoa.getMetodo()) // aqui afirmamos o uso com o call ()
