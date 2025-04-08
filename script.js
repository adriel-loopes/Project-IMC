document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém os valores dos campos e converte para número
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Validação dos dados
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    // Determina resultado e imagem
    let resultado = '';
    let imagem = '';
    let cor = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
        imagem = 'images/madruga.png';
        cor = 'orange';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
        imagem = 'images/chaves.png';
        cor = 'blue';
    } else {
        resultado = 'Acima do peso !!! 🚨';
        imagem = 'images/barriga.png';
        cor = 'red';
    }

    // Atualiza o conteúdo da página
    const resultadoIMC = document.getElementById('resultadoIMC');
    resultadoIMC.textContent = `${resultado} (IMC: ${imc.toFixed(2)})`;
    resultadoIMC.style.color = cor;

    document.getElementById('imagemResultado').innerHTML = `
        <img src="${imagem}" alt="${resultado}" aria-label="Resultado do IMC: ${resultado}">`;
});
