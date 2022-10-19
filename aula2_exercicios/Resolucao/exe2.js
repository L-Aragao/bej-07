//1 – Calcule a média de N notas digitadas pelo usuário (separados por espaço) .

function calcularQuadradoLista() {
    let notas = document.getElementById("txtNumeros").value;
    notas = notas.split(" ")
    let listaDosQuadrados = []
    for(i in notas){
        listaDosQuadrados.push(parseInt(notas[i])** 2)
        document.write(`Valor ao quadrado de ${(parseInt(notas[i]))} é ${listaDosQuadrados[i]}<br>`);
    }
    document.write(`Os numeros ao quadrado sao: ${listaDosQuadrados}<br>`)
}