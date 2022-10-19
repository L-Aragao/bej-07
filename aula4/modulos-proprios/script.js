const mod1 = require('./mod1')
const mod2 = require('./mod2')
const mod3 = require('./mod3')

const m1 = new mod1()
const m2 = mod2.pessoas
const m3 = mod3

console.log(mod1)
m1.cumprimentar("Oi, tudo bem!?")

console.log(mod2)
console.log(m2)
console.log(m2.nome)
console.log(m2.sobreNome)
console.log(m2.idade)

console.log(mod3)
console.log(m3)
console.log(m3.nome)
console.log(m3.sobreNome)
