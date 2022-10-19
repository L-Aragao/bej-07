//1 – Calcule a média de N notas digitadas pelo usuário (separados por espaço) .

function validarMaioridade() {
    let valores = document.getElementById("txtNumeros").value;
    valores = valores.split(" ")
    let contador = 0
    for (let i = 0; i < valores.length; i++) {
        if (parseInt(valores[i]) >= 18) {
            contador = contador + 1
            // contador++
        }
    }
    document.write(`A quantidade de pessoas com mais de 18 anos é: ${contador}`)
}