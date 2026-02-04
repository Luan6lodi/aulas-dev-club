/* 
===========================================
 OBJETO Math no JavaScript
===========================================

O Math é um objeto nativo do JS que serve para:
- cálculos matemáticos
- arredondamentos
- potências
- raízes
- números aleatórios
- trigonometria
- etc

IMPORTANTE:
Math NÃO é uma classe → você não usa "new Math()"
Você usa direto: Math.metodo()
*/

/* =========================================
   ARREDONDAMENTOS
========================================= */

let num = 7.6;

// Arredonda para cima
console.log(Math.ceil(num)); 
// → 8

// Arredonda para baixo
console.log(Math.floor(num)); 
// → 7

// Arredonda matematicamente
console.log(Math.round(num)); 
// → 8

// Remove casas decimais (não arredonda, só corta)
console.log(Math.trunc(7.9)); 
// → 7


/* =========================================
   POTÊNCIA E RAIZ
========================================= */

// Potência (2³)
console.log(Math.pow(2, 3)); 
// → 8

// Raiz quadrada
console.log(Math.sqrt(25)); 
// → 5

// Raiz cúbica
console.log(Math.cbrt(27)); 
// → 3


/* =========================================
   MÁXIMO E MÍNIMO
========================================= */

console.log(Math.max(10, 50, 2, 99, 3)); 
// → 99

console.log(Math.min(10, 50, 2, 99, 3)); 
// → 2


/* =========================================
   NÚMEROS ALEATÓRIOS
========================================= */

// Número aleatório entre 0 e 1
console.log(Math.random());
// → exemplo: 0.4839201

// Número aleatório entre 0 e 10
let random0a10 = Math.random() * 10;
console.log(random0a10);

// Número inteiro aleatório entre 1 e 10
let inteiro1a10 = Math.floor(Math.random() * 10) + 1;
console.log(inteiro1a10);


/* =========================================
   CONSTANTES MATEMÁTICAS
========================================= */

console.log(Math.PI); 
// → 3.141592653589793

console.log(Math.E);  
// → 2.718281828459045


/* =========================================
   VALOR ABSOLUTO
========================================= */

console.log(Math.abs(-50));
// → 50


/* =========================================
   EXEMPLO PRÁTICO (USO REAL)
========================================= */

// Simulando sistema de sorteio
function sortearNumero(min, max) {
  /*
    Fórmula padrão:
    Math.floor(Math.random() * (max - min + 1)) + min
  */
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(sortearNumero(1, 100));
// → sorteia um número entre 1 e 100
