// Exemplo: getElementsByClassName com JS separado do HTML

function mudarTexto() {
  // Pegamos todos os elementos com a classe "item"
  let elementos = document.getElementsByClassName("item");

  // getElementsByClassName retorna uma "coleção" (HTMLCollection),
  // parecida com um array. Então precisamos usar um loop para percorrer.

  for (let i = 0; i < elementos.length; i++) {
    // Mudamos o texto de cada elemento
    elementos[i].innerText = "Texto alterado no elemento " + (i + 1);

    // Também mudamos o estilo só pra ver bem a diferença
    elementos[i].style.color = "blue";
    elementos[i].style.fon
