//1 – Calcule a média de N notas digitadas pelo usuário (separados por espaço) .

function retornarMaior() {
    let valores = document.getElementById("txtNumeros").value;
    // let valores = "-1 50 20 30 -10"
    valores = valores.split(" ")
    // const valoresAgoraNumericos = valores.map(str => {
    //     return Number(str);
    // });
    // maiorValor = Math.max(...valoresAgoraNumericos);
    let maiorValor = valores[0]
    for (let i = 1; i < valores.length; i++) {
        console.log(valores[i])
        if (parseInt(valores[i]) > parseInt(maiorValor)) {
            maiorValor = valores[i]
        }
    }
    document.write(`O maior valor inserido é: ${maiorValor}`)
}
// retornarMaior()
//Math.max - uma boa alternativa