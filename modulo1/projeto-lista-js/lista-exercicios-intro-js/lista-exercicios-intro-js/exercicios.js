// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura de seu retangulo:')
  const largura = prompt('Digite a largura de seu retangulo:')
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = prompt('Em que ano você está?')
const anoNascimento = prompt('Em que ano vc nasceu?')
console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let calculo = peso/(altura*altura)
return calculo

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Qual seu email?") 
  let fraseFinal = console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let primeiraCor = prompt("Qual sua primeira cor preferida?")
  let segundaCor = prompt("Qual sua segunda cor preferida?")
  let terceiraCor = prompt("Qual sua terceira cor preferida?")
  console.log([primeiraCor, segundaCor, terceiraCor])
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 let letrasMaiusc = string.toUpperCase()
 return letrasMaiusc

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamString1 = string1.length
  let tamString2 = string2.length
  return tamString1 === tamString2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()
}

// EXERCÍCIO 11 Escreva uma função que recebe um array e retorna um array com o primeiro e o último elemento trocados.
function trocaPrimeiroEUltimo(array) {
  let last = array[array.length - 1];

  array.splice(0, 1)
  array.splice(-1,1);

  array = [last,...array,first]
    return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let string = string
let verificando1 = string1.length 
let verificando2 = string2.length
  return Number(verificando1) === Number(verificando2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}