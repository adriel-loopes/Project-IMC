document.getElementById('imcForm').addEventListener('submit', function(event) {
    // Adiciona um ouvinte de eventos para o formulário. Quando o formulário é submetido, executa esta função
    event.preventDefault(); // Evita o comportamento padrão do formulário, que seria recarregar a página

    // Obtém o valor dos campos de entrada
    const altura = parseFloat(document.getElementById('altura').value);
    // Captura o valor digitado no campo de altura, converte-o para número de ponto flutuante

    const peso = parseFloat(document.getElementById('peso').value);
    // Captura o valor digitado no campo de peso, também convertendo para número de ponto flutuante

    // Calcula o IMC
    const imc = peso / (altura * altura);
    // Fórmula do IMC: peso dividido pela altura ao quadrado

    let resultado = 'Abaixo do peso'; // Texto padrão para o resultado do IMC
    let imagem = 'images/madruga.png'; // Caminho padrão da imagem

    // Determina a faixa do IMC e a imagem a ser exibida
    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
        imagem = 'images/madruga.png';
        document.getElementById('resultadoIMC').style.color = 'orange';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Peso normal';
        imagem = 'images/chaves.png';
        document.getElementById('resultadoIMC').style.color = 'blue';
    } else {
        resultado = 'Acima do peso !!!   🚨';
        imagem = 'images/barriga.png';
        document.getElementById('resultadoIMC').style.color = 'red';
    }

    // Exibe o resultado e a imagem na página
    document.getElementById('resultadoIMC').textContent = resultado;
    document.getElementById('imagemResultado').innerHTML = `<img src="${imagem}" alt="${resultado}">`;
});
