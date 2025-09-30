// script.js

// ===========================
// Alterando texto de um elemento
// ===========================
document.getElementById("titulo").textContent = "Título Alterado com JS";

// ===========================
// Alterando HTML interno (pode usar tags)
// ===========================
document.querySelector(".texto").innerHTML = "Agora esse <strong>texto</strong> foi alterado";

// ===========================
// Alterando estilo (CSS pelo JS)
// ===========================
document.getElementById("titulo").style.color = "red";
document.getElementById("titulo").style.fontSize = "30px";

// ===========================
// Alterando atributo (exemplo: botão)
// ===========================
document.getElementById("botao").setAttribute("title", "Passe o mouse e veja!");

// ===========================
// Mudando conteúdo ao clicar no botão
// ===========================
document.getElementById("botao").addEventListener("click", function() {
  document.getElementById("titulo").textContent = "Você clicou no botão!";
  document.querySelector(".texto").style.color = "blue";
});

/*
👉 Nesse exemplo você aprende:

textContent → muda só o texto.

innerHTML → muda o conteúdo e aceita tags HTML.

.style → altera CSS direto pelo JS.

setAttribute → altera atributos do elemento.

addEventListener("click") → muda algo quando o usuário interage.
*/
