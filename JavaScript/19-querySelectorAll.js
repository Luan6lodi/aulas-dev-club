// Exemplo: querySelectorAll com JS separado do HTML

function alterarTodos() {
  // Seleciona todos os elementos com a classe "item"
  let itens = document.querySelectorAll(".item");

  // querySelectorAll retorna um NodeList, que podemos percorrer com forEach
  itens.forEach((elemento, index) => {
    elemento.innerText = "Item " + (index + 1) + " alterado!";
    elemento.style.color = "green";
    elemento.style.fontWeight = "bold";
  });
}
