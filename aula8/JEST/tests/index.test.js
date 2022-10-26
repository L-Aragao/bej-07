//Testes


const index = require('./index')
test('Aplicar desconto', () => {
    const result = index.aplicarDesconto(10,5);
    expect(result).toEqual(5);
})

test('Calcular soma', () => {
    const result = index.sum(10,5);
    expect(result).toEqual(15)
})
