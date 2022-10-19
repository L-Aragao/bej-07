function verificarData(){
    let data = document.getElementById("txtData").value; // 20/05/2021
    data = data.split(/[,./-\s]/); // Para estudar Regex - expressoes regulares
    document.write("Dia: "+data[0]+"<br>");
    document.write("Mês: "+data[1]+"<br>");
    document.write("Ano: "+data[2]+"<br>");
}