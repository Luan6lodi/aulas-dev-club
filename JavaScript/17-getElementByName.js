// Exemplo: getElementsByName com JS separado do HTML

function mostrarEscolha() {
  // Pegamos todos os inputs que têm name="linguagem"
  let linguagens = document.getElementsByName("linguagem");

  // Variável para guardar a escolha
  let escolhida = "";

  // Percorremos todos os inputs
  for (let i = 0; i < linguagens.length; i++) {
    // Verificamos qual está marcado (checked)
    if (linguagens[i].checked) {
      escolhida = linguagens[i].value;
    }
  }

  // Exibimos o resultado no parágrafo com id="resultado"
  let resultado = document.getElementById("resultado");
  if (escolhida !== "") {
    resultado.innerText = "Você escolheu: " + escolhida;
    resultado.style.color = "blue";
  } else {
    resultado.innerText = "Nenhuma opção selecionada!";
    resultado.style.color = "red";
  }
}
