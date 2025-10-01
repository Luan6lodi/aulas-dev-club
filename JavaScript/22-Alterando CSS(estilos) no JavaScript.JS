  // ---------------------------------------------------------------------
    // Pegando o elemento <p> pelo ID
    let texto = document.getElementById("meuTexto");

    // ---------------------------------------------------------------------
    // 🔹 Alterando apenas a cor
    function mudarCor() {
      texto.style.color = "blue"; // muda a cor do texto
    }

    // ---------------------------------------------------------------------
    // 🔹 Alterando apenas o tamanho da fonte
    function mudarFonte() {
      texto.style.fontSize = "24px"; // aumenta o tamanho da letra
    }

    // ---------------------------------------------------------------------
    // 🔹 Alterando vários estilos de uma vez
    function mudarTudo() {
      texto.style.color = "red";       // cor do texto
      texto.style.fontSize = "30px";   // tamanho da fonte
      texto.style.backgroundColor = "yellow"; // cor de fundo
      texto.style.padding = "10px";    // espaço interno
      texto.style.borderRadius = "8px"; // borda arredondada
    }

    // ---------------------------------------------------------------------
    // 🔹 Resetando estilos
    function resetar() {
      texto.style = ""; // limpa todos os estilos aplicados via JS
    }

  /*  👉 Observações importantes:

Sempre que usar .style.algumaCoisa, você está alterando diretamente o estilo inline do elemento.

O nome das propriedades CSS em JavaScript mudam de kebab-case para camelCase:

background-color → backgroundColor

font-size → fontSize

border-radius → borderRadius
*/