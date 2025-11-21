document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoIMC = document.getElementById('resultadoIMC');
    const imagemResultado = document.getElementById('imagemResultado');
    const efeitoSom = document.getElementById('efeitoSom');
  
    if (altura <= 0 || peso <= 0 || isNaN(altura) || isNaN(peso)) {
      resultadoIMC.textContent = 'Por favor, insira valores válidos.';
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = '';
    let imagem = '';
  
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      imagem = 'images/madruga.png';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
      imagem = 'images/chaves.png';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
      imagem = 'images/barriga.png';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
      imagem = 'images/barriga.png';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
      imagem = 'images/barriga.png';
    } else {
      classificacao = 'Obesidade grau 3';
      imagem = 'images/barriga.png';
    }
  
    resultadoIMC.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
    imagemResultado.innerHTML = `<img src="${imagem}" alt="Resultado IMC">`;
  
    if (efeitoSom) efeitoSom.play();
  });
  