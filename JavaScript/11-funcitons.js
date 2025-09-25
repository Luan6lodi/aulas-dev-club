// 📌 Funções em JavaScript

// Funções são blocos de código que podemos reutilizar.
// Elas servem para executar uma tarefa específica, sempre que forem chamadas.
// Sintaxe básica:
// function nomeDaFuncao(parametros) { ... }

// -----------------------------
// 📌 Exemplo 1: Função simples
function saudacao() {
  console.log("Olá, bem-vindo ao estudo de funções!");
}

// Chamando a função
saudacao(); // 👉 Saída: Olá, bem-vindo ao estudo de funções!


// -----------------------------
// 📌 Exemplo 2: Função com parâmetros
function somar(a, b) {
  return a + b; // retorna a soma dos dois valores
}

console.log(somar(5, 7)); // 👉 Saída: 12
console.log(somar(10, 20)); // 👉 Saída: 30


// -----------------------------
// 📌 Exemplo 3: Função com valor padrão
function saudacaoNome(nome = "visitante") {
  console.log("Olá, " + nome + "!");
}

saudacaoNome("Luan"); // 👉 Saída: Olá, Luan!
saudacaoNome();       // 👉 Saída: Olá, visitante!


// -----------------------------
// 📌 Exemplo 4: Função anônima (armazenada em variável)
const multiplicar = function(x, y) {
  return x * y;
};

console.log(multiplicar(4, 5)); // 👉 Saída: 20


// -----------------------------
// 📌 Exemplo 5: Função de seta (Arrow Function)
const dividir = (x, y) => {
  return x / y;
};

console.log(dividir(20, 4)); // 👉 Saída: 5


// -----------------------------
// 📌 Exemplo 6: Arrow Function simplificada
const quadrado = n => n * n;

console.log(quadrado(6)); // 👉 Saída: 36


// -----------------------------
// 📌 Exemplo 7: Funções dentro de funções
function operacoes(a, b) {
  function soma(x, y) {
    return x + y;
  }
  function subtracao(x, y) {
    return x - y;
  }

  return "Soma: " + soma(a, b) + " | Subtração: " + subtracao(a, b);
}

console.log(operacoes(10, 3)); // 👉 Saída: Soma: 13 | Subtração: 7
