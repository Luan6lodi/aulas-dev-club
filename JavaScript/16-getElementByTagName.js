// Exemplo: getElementsByTagName com JS separado do HTML

function mudarTexto() {
  // Pegamos todos os elementos <p> da página
  let paragrafos = document.getElementsByTagName("p");

  // getElementsByTagName retorna um HTMLCollection (parecido com array)
  // Então usamos um loop para mexer em cada parágrafo
  for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].innerText = "Parágrafo " + (i + 1) + " alterado!";
    paragrafos[i].style.color = "green";   // deixa o texto verde
    paragrafos[i].style.fontSize = "20px"; // aumenta o tamanho da fonte
  }
}
