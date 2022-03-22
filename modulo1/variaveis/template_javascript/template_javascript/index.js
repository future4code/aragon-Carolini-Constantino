/* Respostas dos exercícios de interpretação

1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.


let a = 10
let b = 10
console.log(b)

b = 5
console.log(a, b)
* resposta: 10
            10 5

2.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
resposta: 10 10 10 

3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let horaTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let valorPagoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/horasTrabalhadasPorDia} por hora`)

Exercícios de escrita de código*/

let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

/* Foi impresso undefined porque não foi definido nenhum valor às variavéis.
*/

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome)
console.log(typeof idade)

/*Notei que o type delas mudaram para string porque os dados vieram de uma prompt, logo sempre será frase, mesmo quando for números.*/

console.log("Olá", nome, "você tem", idade, "anos.")

//2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?".

gostaDeGatos = prompt("Você gosta de gatos?")
let perg1 = true
console.log(perg1)

gostaDeChurrasco = prompt("Você gosta de churrasco?")
let perg2 = false 
console.log(perg2)

eGaúcho = prompt("Você é gaúcho?")
let perg3 = true
console.log(perg3)

let a = 10
let b = 25
let c 

a = c
b = a
c = b
    
var num1 = prompt("Digite um número");
var num2 = prompt("Digite outro número para somar e multiplicar");

resultado1 = Number(num1)+Number(num2);
console.log("X = ", resultado1);
    
resultado2 = num1*num2;
console.log("Y = ", resultado2);