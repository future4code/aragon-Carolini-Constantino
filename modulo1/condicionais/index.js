//Exercícios de interpretação
//1)
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/
//Respostas:
//a)Ele quer saber se o número enviado pelo usuário, na prompt, tem a 
//divisão exata por 2, ou seja, que o resto da divisão seja (===)igual a 0
//b)pares
//c)impares

//2)
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

/*ela cria uma condição onde, dependendo da fruta escolhida, 
vai imprimir uma frase pronta e vai preecher com o nome da fruta escolhida(que vem pela primpt)
e o seu valor (pela condicional)
a)para verificar o valor de determinada fruta escolhida
b)2,25
c) 5, pq ele vai puxar o último valor definido pro preço, que no caso é 5 

3)*/
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

 a)está declarando que a variável "numero" 
vai conter a resposta do usuário, que vai chegar por um prompt, em forma de número
b)Se fosse 10, apareceria a mensagem "Esse número passou no teste",
se fosse o número -10 não ia aparecer nada pq não tem else ali, nem outra 
opção que contemple os números menores que 0
}
c)Sim, haverá o erro na linha 54 pq a variável "mensagem" ñ foi definida
fora da condicional, ela só funciona dentro da condicional (numero>0)  

Exercícios de escrita de código

1)
let respostaDoUsuario = Number(prompt("Qual sua idade?"))

function calculo(resposta) {
    if (resposta >= 18){return "Você pode dirigir!"}
    else {return "Você não pode dirigir"}
}
const resultado = calculo(respostaDoUsuario)
console.log(resultado)*/

//2)
//const respostaDoUsuário = prompt("Em qual turno você estuda? (M, V ou N)")
//const respostaFinal = respostaDoUsuário.toUpperCase()

//function verificandoTurno(resposta){
//   if (resposta === "M" ll resposta === "manha" ll resposta === "Manhã"){return "Bom dia!"}
// else if (resposta === "V"){return "Boa tarde!"}
// else {return "Boa noite!"}




//const resultado = verificandoTurno(respostaFinal)
//console.log(resultado)

//3)
//const respostaUsuario = prompt("Em qual turno você estuda? (M, V ou N)")
//const respostaF = respostaUsuario.toUpperCase() 

//function analisandoTurno(respostA){
//switch (respostA){
  //  case "M": return "Bom dia!"
  //  case "V": return "Boa tarde!"
  //  case "N": return "Boa noite!"
  //  default: return "Você não é estudante!"
//}
//}

//const conclusao = analisandoTurno(respostaF)
//console.log(conclusao)

//4)
//function requisitosParaEuIrJunto (generoDoFilme, valorDoIngresso){
  //  if (generoDoFilme && valorDoIngresso){return "Bom filme!"}
   // else {return "Escolha outro filme"}
    
   // }
    
//let genero = prompt("Qual é o gênero do filme que vcs vão assisti:")
//let respostaGenero = genero.toUpperCase()

//let respostaValor = Number(prompt("Quanto custa o ingresso?")) 

//if (respostaGenero === "FANTASIA"){respostaGenero = true}
//else {respostaGenero = false}

//if (respostaValor <= 15){respostaValor = true}
//else{respostaValor = false}

//const respostaFinal = requisitosParaEuIrJunto(respostaGenero, respostaValor)
//console.log(respostaFinal)

//Desafios
//1)
function requisitosParaEuIrJunto (generoDoFilme, valorDoIngresso){
if (generoDoFilme && valorDoIngresso)
    {if (lanche) return "Aproveite seu ${lanche}"}
    else {return "Bom filme!"}
else {return "Escolha outro filme"}
      
     }
      
let genero = prompt("Qual é o gênero do filme que vcs vão assisti:")
let respostaGenero = genero.toUpperCase()
  
let respostaValor = Number(prompt("Quanto custa o ingresso?")) 
  
if (respostaGenero === "FANTASIA"){respostaGenero = true}
else {respostaGenero = false}
  
if (respostaValor <= 15){respostaValor = true}
else{respostaValor = false}

let lanche = prompt('Qual lanche você vai comprar para assistir o filme?')
  
const respostaFinal = requisitosParaEuIrJunto(respostaGenero, respostaValor)
console.log(respostaFinal)
