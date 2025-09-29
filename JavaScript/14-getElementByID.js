// Exemplo: getElementById com JS separado do HTML

// Criamos a função mudarTexto que será chamada quando o botão for clicado
function mudarTexto() {
  // Pegamos o elemento que tem o ID "titulo"
  let elemento = document.getElementById("titulo");

  // Mudamos o texto interno do <h1>
  elemento.innerText = "O texto foi alterado com getElementById!";

  // Também podemos alterar o estilo, por exemplo:
  elemento.style.color = "red";   // muda a cor da letra
  elemento.style.fontSize = "32px"; // aumenta o tamanho da fonte
}



