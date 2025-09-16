console.log("tanto faz")

/*
🔹 1. Executar JavaScript no navegador
Opção A: Console do navegador

Abra qualquer página no navegador.

Pressione F12 (ou Ctrl+Shift+I) → abre o DevTools.

Vá na aba Console.

Digite código JS e pressione Enter:

console.log("Olá, mundo!");


Resultado: Olá, mundo! aparece no console.

Opção B: Arquivo HTML

Crie um arquivo index.html:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Teste</title>
</head>
<body>
  <h1>Testando JS</h1>

  <script>
    console.log("Olá do HTML!");
    alert("Mensagem do JS!");
  </script>
</body>
</html>


Abra o arquivo no navegador.

O alert aparece na tela e o console.log aparece na aba Console do DevTools.

🔹 2. Executar JavaScript fora do navegador (Node.js)

Instale o Node.js (já vimos que você já fez isso).

Crie um arquivo teste.js:

console.log("Executando com Node.js!");


Abra o terminal do VS Code ou CMD na pasta do arquivo.

Digite:

node teste.js


Resultado no terminal:

Executando com Node.js!


🔹 Resumo rápido

| Método               | Como usar                     | Resultado                   |
| -------------------- | ----------------------------- | --------------------------- |
| Console do navegador | F12 → Console → digitar JS    | Mensagem aparece no console |
| Arquivo HTML         | `<script>` no HTML            | Mensagem no console e alert |
| Node.js              | `node arquivo.js` no terminal | Mensagem no terminal        |


*/