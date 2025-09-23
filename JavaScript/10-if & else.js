// ----------------------------
// 📌 IF & ELSE EM JAVASCRIPT
// ----------------------------

/*
O if e o else são usados para criar estruturas de decisão.

👉 Estrutura básica:
if (condição) {
   // código executado SE a condição for verdadeira (true)
} else {
   // código executado SE a condição for falsa (false)
}

⚡ Podemos também usar "else if" para testar várias condições.
*/

// ----------------------------
// 📌 EXEMPLO 1: Simples com if e else
// ----------------------------

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// ----------------------------
// 📌 EXEMPLO 2: Usando if, else if e else
// ----------------------------

let nota = 75;

if (nota >= 90) {
  console.log("Aprovado com nota excelente!");
} else if (nota >= 70) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado.");
}

// ----------------------------
// 📌 EXEMPLO 3: Condição booleana direta
// ----------------------------

let temCarteira = true;

if (temCarteira) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}

// ----------------------------
// 📌 EXEMPLO 4: Condição com comparação
// ----------------------------

let senha = "12345";

if (senha === "12345") {
  console.log("Acesso permitido.");
} else {
  console.log("Senha incorreta!");
}

// ----------------------------
// 📌 EXEMPLO 5: If dentro de If (aninhado)
// ----------------------------

let usuario = "admin";
let logado = true;

if (logado) {
  if (usuario === "admin") {
    console.log("Bem-vindo, administrador!");
  } else {
    console.log("Bem-vindo, usuário comum.");
  }
} else {
  console.log("Por favor, faça login primeiro.");
}
