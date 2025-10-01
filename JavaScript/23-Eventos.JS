
/*
<!-- Trabalhando com Eventos no JavaScript -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Eventos em JavaScript</title>
  <style>
    #caixa {
      width: 200px;
      height: 200px;
      background-color: lightgray;
      text-align: center;
      line-height: 200px;
      border-radius: 10px;
      transition: 0.3s; /* deixa suave as mudanças 
    }
  </style>
</head>
<body>
  
  <!-- Caixa que vai reagir aos eventos -->
  <div id="caixa">Passe o mouse aqui!</div>

  <!-- Botão com evento de clique direto no HTML -->
  <button onclick="clicou()">Clique aqui</button>
*/

  // Pegando o elemento
    let caixa = document.getElementById("caixa");

    // ---------------------------------------------------------------------
    // 🔹 Exemplo 1: evento direto no botão (onclick no HTML)
    function clicou() {
      alert("Você clicou no botão!");
    }

    // ---------------------------------------------------------------------
    // 🔹 Exemplo 2: addEventListener (mais usado e mais limpo)
    // Quando o mouse passa em cima da div
    caixa.addEventListener("mouseover", function() {
      caixa.style.backgroundColor = "lightblue";
      caixa.textContent = "Mouse entrou!";
    });

    // Quando o mouse sai da div
    caixa.addEventListener("mouseout", function() {
      caixa.style.backgroundColor = "lightgray";
      caixa.textContent = "Mouse saiu!";
    });

    // Quando clicar na div
    caixa.addEventListener("click", function() {
      caixa.style.backgroundColor = "lightgreen";
      caixa.textContent = "Clicou na caixa!";
    });

    // ---------------------------------------------------------------------
    // 🔹 Outros eventos comuns
    // document.addEventListener("keydown", function(event) {
    //   alert("Você apertou a tecla: " + event.key);
    // });

/*
📌 Principais formas de usar eventos:

Direto no HTML (ex: onclick="funcao()") → mais simples, mas polui o código.

Com addEventListener → mais organizado e flexível.

👉 Eventos mais usados:

click → quando clica

mouseover → quando o mouse entra no elemento

mouseout → quando o mouse sai

keydown → quando uma tecla é pressionada

keyup → quando solta a tecla

change → quando muda o valor de um input

submit → quando envia um formulário

load → quando a página termina de carregar
*/

