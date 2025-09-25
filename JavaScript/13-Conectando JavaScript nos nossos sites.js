// 📌 Arquivo externo: script.js
// Esse arquivo está separado do HTML e é a melhor prática!
// Mantém o código organizado e fácil de manter.

const botao = document.getElementById("btnExterno");

botao.addEventListener("click", () => {
  alert("Você clicou no botão externo!");
});

// ✅ Resumindo:
// - Inline → Só para coisas muito rápidas (não recomendado).
// - Interno → Bom para pequenos testes no mesmo arquivo HTML.
// - Externo → Melhor forma! Código organizado e reutilizável.