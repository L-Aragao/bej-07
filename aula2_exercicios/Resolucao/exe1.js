//1 – Calcule a média de N notas digitadas pelo usuário (separados por espaço) .

function calcularMedia() {
    let notas = document.getElementById("txtNumeros").value;
    notas = notas.split(" ")
    let totalNotas = 0
    for(i in notas){
        totalNotas += parseInt(notas[i])
        document.write(`Nota ${(parseInt(i) + 1)} é ${notas[i]}<br>`);
    }
    let notaMedia = totalNotas/ notas.length
    document.write(`A media de notas é: ${notaMedia}<br>`)
}