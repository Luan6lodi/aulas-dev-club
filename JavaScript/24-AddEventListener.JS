    // ---------------------------------------------------------------------
    // Pegando o elemento
    let caixa = document.getElementById("caixa");

    // ---------------------------------------------------------------------
    // 🔹 Exemplo 1: clique
    caixa.addEventListener("click", function() {
      caixa.style.backgroundColor = "lightgreen";
      caixa.textContent = "Você clicou!";
    });

    // ---------------------------------------------------------------------
    // 🔹 Exemplo 2: mouse passando em cima
    caixa.addEventListener("mouseover", function() {
      caixa.style.backgroundColor = "lightblue";
      caixa.textContent = "Mouse entrou!";
    });

    // ---------------------------------------------------------------------
    // 🔹 Exemplo 3: mouse saindo
    caixa.addEventListener("mouseout", function() {
      caixa.style.backgroundColor = "lightgray";
      caixa.textContent = "Mouse saiu!";
    });

    // ---------------------------------------------------------------------
    // 🔹 Exemplo 4: evento de teclado
    // Se pressionar qualquer tecla, mostra no console
    document.addEventListener("keydown", function(event) {
      console.log("Tecla pressionada:", event.key);
    });


    /*
    📌 Vantagens do addEventListener:

Pode adicionar vários eventos ao mesmo elemento sem sobrescrever os anteriores.

Permite separar HTML e JavaScript (mais organizado).

Dá pra remover eventos com removeEventListener.
    */

//👉 Exemplo extra de vários eventos no mesmo elemento:
caixa.addEventListener("click", () => alert("Primeiro evento"));
caixa.addEventListener("click", () => alert("Segundo evento"));
//Se fosse com onclick, o segundo sobrescreveria o primeiro.
