/*🔹 Tipos de Dados em JavaScript

Em JS, os tipos de dados se dividem em primitivos e de referência.

1. Primitivos

São imutáveis (não mudam depois de criados).

String → textos. Ex: "Olá"

Number → números (inteiros e decimais). Ex: 10, 3.14

Boolean → verdadeiro/falso. Ex: true, false

Null → valor nulo intencional. Ex: let x = null

Undefined → valor não definido. Ex: let y;

BigInt → números inteiros muito grandes. Ex: 12345678901234567890n

Symbol → valores únicos, usados em casos avançados. Ex: Symbol("id")

2. De Referência

São mutáveis e armazenados por referência.

Object → coleções de dados. Ex: { nome: "Luan", idade: 19 }

Array → lista ordenada. Ex: [1, 2, 3]

Function → funções também são objetos. Ex: function ola() {}

🔹 Strings em JavaScript

String é um texto entre aspas simples '...', duplas "..." ou crases `...`.

Exemplos:
let nome = "Luan";
let saudacao = 'Olá, mundo!';
let template = `Meu nome é ${nome}`; // template literal (pode usar variáveis)

Principais métodos de String:

| Método                      | Exemplo                           | Retorno                 |
| --------------------------- | --------------------------------- | ----------------------- |
| `.length`                   | `"Luan".length`                   | `4` (tamanho da string) |
| `.toUpperCase()`            | `"luan".toUpperCase()`            | `"LUAN"`                |
| `.toLowerCase()`            | `"LUAN".toLowerCase()`            | `"luan"`                |
| `.includes("a")`            | `"Luan".includes("a")`            | `true`                  |
| `.indexOf("a")`             | `"Luan".indexOf("a")`             | `2` (posição do "a")    |
| `.slice(0, 2)`              | `"Luan".slice(0, 2)`              | `"Lu"`                  |
| `.replace("Luan", "Mello")` | `"Luan".replace("Luan", "Mello")` | `"Mello"`               |


⚡ Resumo rápido:

Tipos de dados básicos: String, Number, Boolean, Null, Undefined, BigInt, Symbol.

String = texto, pode ser manipulado com vários métodos.

Para textos dinâmicos, use template literals com crase: `Olá ${nome}`.

*/

const texto1 = "Textos com aspas 'duplas'";
const texto2 = 'Textos com aspas "simples"';
const texto3 = `Textos com crase`; /*me permite pular linhas */

console.log(texto1);
console.log(texto2);
console.log(texto3);
