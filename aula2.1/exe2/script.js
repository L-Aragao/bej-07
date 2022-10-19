const numero = prompt('Digite um numero:');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz Quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>Pontecia de 3: ${numero ** 3}</p>`
texto.innerHTML += `<p>Não é um numero?: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arrendodar para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Arrendodar para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Apresenta o numero com 2 casa decimais: ${numero.toFixed(2)}</p>`