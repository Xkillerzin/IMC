function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 17) classificacao = "Muito abaixo do peso";
  else if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Acima do peso";
  else classificacao = "Obesidade";

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
