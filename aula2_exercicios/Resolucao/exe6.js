function exibirNomes() {
    let nomes = document.getElementById("txtNomes").value;
    nomes = nomes.split(" ");

    for (let i = 0; i < nomes.length; i++){
        //Para o for interno eu mando o nome - nomes[i]
        for (let j = nomes[i].length - 1; j >= 0; j--) {
            //No for interno eu itero o nome como se fosse um array - nomes[i][j]
            document.write(nomes[i][j] + "<br>");
        }

    }
}