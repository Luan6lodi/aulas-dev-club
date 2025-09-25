// 📌 JavaScript e a DOM

// 👉 DOM significa *Document Object Model* (Modelo de Objeto do Documento).
// É a forma como o navegador representa a estrutura de uma página HTML,
// permitindo que o JavaScript manipule elementos, estilos e eventos dinamicamente.

// -----------------------------
// 📌 Exemplo 1: Selecionando elementos
// Podemos selecionar elementos HTML para manipulá-los.

const titulo = document.getElementById("meuTitulo"); // Seleciona pelo id
const paragrafos = document.getElementsByTagName("p"); // Seleciona por tag
const destaque = document.querySelector(".destaque"); // Seleciona a primeira ocorrência de uma classe
const todos = document.querySelectorAll("p"); // Seleciona todos os <p>

console.log(titulo);
console.log(paragrafos);
console.log(destaque);
console.log(todos);


// -----------------------------
// 📌 Exemplo 2: Alterando conteúdo
// innerText → altera apenas o texto
// innerHTML → permite inserir tags HTML

titulo.innerText = "Título alterado via JavaScript!";
destaque.innerHTML = "<strong>Esse parágrafo está em destaque!</strong>";


// -----------------------------
// 📌 Exemplo 3: Alterando estilos (CSS)
titulo.style.color = "blue";       // muda a cor
titulo.style.fontSize = "30px";    // muda o tamanho da fonte
destaque.style.backgroundColor = "yellow"; // muda o fundo


// -----------------------------
// 📌 Exemplo 4: Criando e adicionando elementos
const novoParagrafo = document.createElement("p"); // cria elemento <p>
novoParagrafo.innerText = "Sou um parágrafo criado dinamicamente!";
document.body.appendChild(novoParagrafo); // adiciona no body


// -----------------------------
// 📌 Exemplo 5: Removendo elementos
// removeChild precisa do pai → elementoPai.removeChild(elementoFilho)
document.body.removeChild(novoParagrafo);


// -----------------------------
// 📌 Exemplo 6: Eventos na DOM
// Eventos são ações do usuário: clique, teclado, mouse, etc.

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
  alert("Você clicou no botão!");
});

// Arrow function no evento
botao.addEventListener("mouseover", () => {
  botao.style.backgroundColor = "lightgreen";
});

botao.addEventListener("mouseout", () => {
  botao.style.backgroundColor = "";
});
