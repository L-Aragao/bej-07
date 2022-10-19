// Funções são snippet (pequeno bloco/ trecho de codigo)
// Pode ser invocado pelo seu identificador (nome)
// Podem receber parametros
// tem 2 tipos implicitos de parametros: arguments(UM objeto array) e this (informacoes do contexto da funcao)
// Podem retornar qualquer tipo de valor

function funcao1 () {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(this)
    // console.log(msg)
}
funcao1('msg1', 'msg2' )
//exercicio testar o this com Closure