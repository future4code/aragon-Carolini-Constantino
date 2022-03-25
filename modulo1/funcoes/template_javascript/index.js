//Interpretação:
//1)
//function minhaFuncao(variavel) {
//	return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))
//Resposta:
//a)Vai ser impresso no console:
//10
//50

//b)Se retirasse os dois console.log não iria aparecer nada no terminal, apenas iriamos conseguir utilizar essa função outras vezes dentro do cód apenas

//2)
//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
//	return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)

//a. ela pega a frase que vai chegar pela prompt e vai transf td em minúscolo e depois vai ver se tem a palavra cenoura, se tiver o resultado vai aparecer no console como true ou, se ñ tiver, false
//b. i- true ii-true iii-true

//Exercício de escrita
//function infosCarol(){
//'Eu sou Carol, tenho 31 anos, moro em RS e sou assistente social.'
//}
//console.log(infosCarol)

//let frase = function(nome,idade,cidade,profissao){
//const fraseCompleta = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
//return fraseCompleta
//}

//let carol = frase("Carol", 31, "Campo Bom", "assistente social")
//console.log(carol)

//let lua = frase("Lua", 20, "Novo Hamburgo", "professora")
//console.log(lua)

//2.
//a.
//let funA = function (num1, num2){
  //  let soma = num1+num2
    //return soma
//}
//console.log(funA(5,2))
//console.log(funA(10,5))
//console.log(funA(6,6))

//b.
//function funB (num1, num2){
//let resposta = num1 >= num2
//return resposta
//}

//console.log(funB(3, 2))

//c.
//fuction funC(num){
//let calculo = num % 2 === 0 
//return calculo}


//let resp1 = funC(3)
//console.log(resp1)

//d.
 function funD(msg){
 let calculo1 = msg.toUpperCase() 
  let calculo2 = msg.length
     return calculo1+calculo2
  }
 let primeiraMsg = funD("Olá mundo")
 console.log(primeiraMsg)