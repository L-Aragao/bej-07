//Testes da calculadora
const calculadora = require('./calculadora')

test('Validar soma', () =>{
    let resultado = calculadora.sum(10, 5);
    expect(resultado).toEqual(15)
    resultado = calculadora.sub('10', 20);
    expect(resultado).toEqual(null)
})

test('Subtrair dois numeros', () =>{
    const resultado = calculadora.sub(10, 20);
    expect(resultado).toEqual(-10)
})

test('Validar nao operacao com strings', () => {
    const resultado = calculadora.sub('10', 20);
    expect(resultado).toEqual(null)
})