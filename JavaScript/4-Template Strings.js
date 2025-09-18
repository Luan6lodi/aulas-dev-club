/*1️⃣ O que são Template Strings?

Template Strings (ou Template Literals) são uma forma de escrever strings no JavaScript usando crases ` ao invés de aspas simples ' ou aspas duplas ".

Elas trazem vantagens como:

Inserir variáveis diretamente na string.

Quebrar strings em múltiplas linhas sem precisar de \n.

Inserir expressões diretamente dentro da string.

2️⃣ Sintaxe básica

const nome = "Luan";
const idade = 19;

// Usando template string
const frase = `Meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(frase);
// Saída: Meu nome é Luan e eu tenho 19 anos.
${...} é chamado de placeholder: é onde você coloca variáveis ou expressões.

3️⃣ Múltiplas linhas
const mensagem = `Olá, Luan!
Bem-vindo ao mundo do JavaScript.
Hoje você vai aprender Template Strings.`;

console.log(mensagem);

Saída:
Olá, Luan!
Bem-vindo ao mundo do JavaScript.
Hoje você vai aprender Template Strings.

4️⃣ Expressões dentro de Template Strings

Você pode colocar qualquer expressão dentro do ${}:
const a = 5;
const b = 10;

console.log(`A soma de ${a} + ${b} é ${a + b}`);
// Saída: A soma de 5 + 10 é 15

5️⃣ Comparação com strings normais
// String normal
const nome = "Luan";
const idade = 19;
const frase1 = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";

// Template String
const frase2 = `Meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(frase1);
console.log(frase2);
Template Strings tornam o código muito mais legível e limpo.


*/
