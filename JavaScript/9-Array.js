// ----------------------------
// 📌 ARRAYS EM JAVASCRIPT
// ----------------------------

/*
Um **Array** em JavaScript é uma estrutura de dados que serve
para armazenar vários valores dentro de uma mesma variável.
Esses valores podem ser de QUALQUER tipo: números, strings,
objetos, booleanos, até mesmo outros arrays (arrays dentro de arrays).

👉 Sintaxe básica:
let nomeDoArray = [elemento1, elemento2, elemento3];

- Os elementos são separados por vírgula (,).
- A contagem dos índices começa em 0 (zero-based index).
*/

// Exemplo de um array simples com números
let numeros = [10, 20, 30, 40, 50];
console.log("Array de números:", numeros);

// Exemplo de um array com diferentes tipos de dados
let misto = [42, "Olá", true, null, undefined];
console.log("Array misto:", misto);

// Exemplo de array de strings
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];
console.log("Array de frutas:", frutas);

// ----------------------------
// 📌 ACESSANDO ELEMENTOS DO ARRAY
// ----------------------------
/*
Para acessar um elemento do array, usamos o índice:
nomeDoArray[indice];

⚠️ Lembre-se: o primeiro índice é 0!
*/

console.log("Primeira fruta:", frutas[0]); // Maçã
console.log("Segunda fruta:", frutas[1]); // Banana
console.log("Última fruta:", frutas[frutas.length - 1]); // Uva

// ----------------------------
// 📌 PROPRIEDADES E MÉTODOS IMPORTANTES
// ----------------------------

/*
.length → retorna o tamanho do array (quantos elementos tem).
.push() → adiciona um elemento no FINAL do array.
.pop() → remove o ÚLTIMO elemento do array.
.unshift() → adiciona um elemento no INÍCIO do array.
.shift() → remove o PRIMEIRO elemento do array.
.indexOf(valor) → retorna o índice do valor procurado.
.includes(valor) → verifica se o valor existe no array.
*/

console.log("Quantidade de frutas:", frutas.length); // 4

frutas.push("Manga"); // adiciona no final
console.log("Depois do push:", frutas);

frutas.pop(); // remove do final
console.log("Depois do pop:", frutas);

frutas.unshift("Morango"); // adiciona no início
console.log("Depois do unshift:", frutas);

frutas.shift(); // remove do início
console.log("Depois do shift:", frutas);

console.log("Índice da Laranja:", frutas.indexOf("Laranja"));
console.log("Tem Uva no array?", frutas.includes("Uva"));

// ----------------------------
// 📌 PERCORRENDO UM ARRAY
// ----------------------------
/*
Podemos percorrer um array de várias formas.
A mais comum é o "for" ou o "for...of".
*/

console.log("Percorrendo frutas com for:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log("Percorrendo frutas com for...of:");
for (let fruta of frutas) {
  console.log(fruta);
}
