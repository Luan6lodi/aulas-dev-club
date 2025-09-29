// Exemplo: querySelector com JS separado do HTML

function alterar() {
  // Selecionando por ID (igual no CSS usa #)
  let titulo = document.querySelector("#titulo");
  titulo.innerText = "Alterado com querySelector";
  titulo.style.color = "red";

  // Selecionando por classe (igual no CSS usa .)
  let primeiroParagrafo = document.querySelector(".texto");
  primeiroParagrafo.style.fontWeight = "bold";
  primeiroParagrafo.style.color = "blue";

  // Selecionando por tag (igual no CSS usa direto a tag)
  let input = document.querySelector("input");
  input.value = "Texto preenchido pelo JS";
}
