//RESOLUÇÕES DOS EXERCÍCIOS DA AULA DO DIA 23\03

//1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

//let array
//console.log('a. ', array)

//array = null
//console.log('b. ', array)

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)

//let i = 0
//console.log('d. ', array[i])

//array[i+1] = 19
//console.log('e. ', array)

//const valor = array[i+6]
//console.log('f. ', valor)

//Respostas:
//a. undefined
//b. null
//c. 11
//d.  3
//e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
//f. 9

//2)Leia o código abaixo com atenção

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Resposta: a resposta será imprimida toda MAIÚSCULA e todas as letras A serão substituída I

//Exercícios de escrita de código
//1. 
//let nomeDoUsuario = prompt("Qual é o seu nome?") 
//let emailDoUsuario = prompt("Qual é o seu e-mail?")

//let frase1 = "O e-mail do " + nomeDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo, " + nomeDoUsuario
//console.log(frase1)

//let frase2 = `O e-mail do ${nomeDoUsuario} foi cadastrado com sucesso. Seja bem-vindo ${nomeDoUsuario}`
//console.log(frase2)

// 2.
//let comidasPreferidas = ["sushi", "lasanha", "pizza", "risoto", "pizza"]
//console.log(comidasPreferidas)

//console.log(`primeira comida:${comidasPreferidas[0]}
//segunda:${comidasPreferidas[1]}
//terceira: ${comidasPreferidas[2]}
//quarta:${comidasPreferidas[3]}
//última:${comidasPreferidas[4]}`)

//comidasPreferidas[1] = prompt("Qual é seu prato favorito?")
//console.log(comidasPreferidas)

//3)
let atividadeUm = prompt("Diga 1 atividade que vc precisa fazer hj:")
let atividadeDois = prompt("Diga outra atividade que vc precisa fazer hoje:")
let atividadeTres = prompt("Diga uma ouuuutra atividade que vc precisa fazer hj:")

let listaDeTarefas = lista[null]
listaDeTarefas.includes(atividadeUm, atividadeDois, atividadeTres) 
console.log(lista)
