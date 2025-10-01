// ---------------------------------------------------------------------
// 🔹 Usando textContent
// textContent -> altera apenas o TEXTO, sem interpretar HTML.
// Ele trata tudo como texto simples.
function alterarTexto() {
  document.getElementById("texto1").textContent =
    "Texto alterado com textContent!";
}

// ---------------------------------------------------------------------
// 🔹 Usando innerHTML
// innerHTML -> altera o conteúdo interpretando TAGS HTML.
// Isso significa que dá pra colocar <b>, <i>, <span>, etc.
function alterarHTML() {
  document.getElementById("texto2").innerHTML =
    "Texto alterado com <b>innerHTML</b>!";
}

//textContent → Só muda o texto puro (sem interpretar HTML).

//innerHTML → Muda o texto interpretando tags HTML.
