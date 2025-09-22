// 🔹 O que é um Object
// Um objeto é uma coleção de pares chave–valor. Cada chave é uma string (ou símbolo) e cada valor pode ser de qualquer tipo.

// 🔹 Criando um objeto
// Forma literal
let pessoa = {
  nome: "Luan",
  idade: 19,
  estudante: true,
};

// Forma com construtor
let carro = new Object();
carro.marca = "Toyota";
carro.ano = 2020;

// 🔹 Acessando valores
console.log(pessoa.nome); // "Luan" (dot notation)
console.log(pessoa["idade"]); // 19 (bracket notation)

// 🔹 Alterando e adicionando valores
pessoa.idade = 20; // altera
pessoa.cidade = "São Paulo"; // adiciona nova chave

// 🔹 Métodos em objetos
let cachorro = {
  nome: "Rex",
  latir: function () {
    console.log("Au au!");
  },
};

cachorro.latir(); // "Au au!"

// 🔹 Objetos dentro de objetos
let aluno = {
  nome: "Maria",
  notas: {
    matematica: 9,
    portugues: 8,
  },
};

console.log(aluno.notas.matematica); // 9
