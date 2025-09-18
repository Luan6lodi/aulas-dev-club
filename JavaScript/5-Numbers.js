/*1️⃣ O que são Numbers?

No JavaScript, Numbers representam tanto números inteiros quanto números de ponto flutuante (decimais).
Não existe um tipo separado para inteiros e decimais — tudo é Number.

2️⃣ Criando Numbers
// Inteiros
const idade = 19;

// Decimais
const altura = 1.75;

// Notação científica
const grandeNumero = 1e6; // 1 * 10^6 = 1000000

3️⃣ Operações básicas
const a = 10;
const b = 3;

console.log(a + b); // Soma → 13
console.log(a - b); // Subtração → 7
console.log(a * b); // Multiplicação → 30
console.log(a / b); // Divisão → 3.3333333333333335
console.log(a % b); // Resto da divisão → 1
console.log(a ** b); // Potência → 1000 (10^3)

4️⃣ Algumas funções úteis com Numbers
| Função / Método        | O que faz                                 |
| ---------------------- | ----------------------------------------- |
| `Number.isInteger(x)`  | Verifica se `x` é um número inteiro       |
| `Number.isNaN(x)`      | Verifica se `x` é `NaN` (não é um número) |
| `parseInt("123")`      | Converte string para inteiro              |
| `parseFloat("123.45")` | Converte string para decimal              |
| `toFixed(n)`           | Formata número com `n` casas decimais     |

const num = 10.56789;
console.log(num.toFixed(2)); // 10.57

5️⃣ Número especial

JavaScript tem alguns números especiais:
console.log(Infinity);  // Infinito
console.log(-Infinity); // Menos infinito
console.log(NaN);       // "Not a Number" → resultado inválido de uma operação

Exemplo de NaN:
console.log("abc" / 2); // NaN

*/
