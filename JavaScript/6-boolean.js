/*
O que é um Boolean?

Em JavaScript, um Boolean é um tipo de dado que só pode ter dois valores:

true → verdadeiro

false → falso

Ele é muito usado em condições, comparações e estruturas de controle (if, while, etc).

Exemplos práticos:
let ligado = true;
let desligado = false;

console.log(ligado);     // true
console.log(desligado);  // false

Comparações retornam Boolean:
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 === 10); // true

Boolean com funções nativas:

Você pode transformar valores em Boolean com o construtor Boolean() ou com !! (dupla negação):


console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("oi"));// true

console.log(!!123);        // true
console.log(!!"");         // false


📌 Resumindo: Boolean é o tipo lógico do JS, e é a base de todo controle de fluxo no código.


*/
