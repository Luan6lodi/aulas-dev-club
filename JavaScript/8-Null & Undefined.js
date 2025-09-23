/*
=====================================================
📌 Diferença entre null e undefined no JavaScript
=====================================================

| Característica | undefined                                | null                                |
|----------------|------------------------------------------|-------------------------------------|
| Definição      | É o valor padrão de uma variável         | É um valor atribuído manualmente    |
|                | declarada mas não inicializada.          | para indicar "ausência de valor".   |
| Tipo (typeof)  | "undefined"                              | "object" (bug histórico do JS)      |
| Uso comum      | Quando algo não foi definido ainda.      | Quando você quer "esvaziar" ou dizer|
|                |                                          | que algo não existe mais.           |
| Atribuição     | Automática pelo JS (quando não           | Feita pelo desenvolvedor, para      |
|                | inicializa a variável).                  | indicar intencionalmente "sem valor".|

=====================================================
*/

// 🔹 Exemplo 1: Variável sem valor inicial → undefined
let nome;
console.log(nome);
// A variável foi declarada, mas não recebeu nenhum valor → retorna undefined

// 🔹 Exemplo 2: Variável recebendo null → ausência de valor
let idade = null;
console.log(idade);
// Aqui o valor foi atribuído como null de propósito → representa "sem valor"

// 🔹 Exemplo 3: Comparando null e undefined com ==
console.log(undefined == null);
// true → porque na comparação "fraca" eles são tratados como equivalentes

// 🔹 Exemplo 4: Comparando null e undefined com ===
console.log(undefined === null);
// false → porque na comparação "estrita" os tipos são diferentes

// 🔹 Exemplo 5: Função sem retorno → undefined
function teste() {}
console.log(teste());
// Como a função não tem return, o resultado é undefined

// 🔹 Exemplo 6: Objeto com propriedade ausente → undefined
let pessoa = { nome: "Luan" };
console.log(pessoa.idade);
// A propriedade idade não existe no objeto → retorna undefined

// 🔹 Exemplo 7: Resetando valor de variável com null
let carro = "Fusca";
carro = null;
console.log(carro);
// A variável existia, mas foi "zerada" com null
