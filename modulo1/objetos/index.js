//Exercícos de Interpretação de códigos
//1)
//const filme = {
//	nome: "Auto da Compadecida", 
//	ano: 2000, 
//	elenco: [
//		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//		"Virginia Cavendish"
//		], 
//	transmissoesHoje: [
//		{canal: "Telecine", horario: "21h"}, 
//		{canal: "Canal Brasil", horario: "19h"}, 
//		{canal: "Globo", horario: "14h"}
//		]
//}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])

//Resposta:
//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Canal Brasil", horario: "19h"

//2)
//const cachorro = {
//	nome: "Juca", 
//	idade: 3, 
//	raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

//Resposta:
//a)
//{nome: Juca, idade: 3, raca: SRD}
//{nome: Juba, idade: 3, raca: SRD}
//{nome: Jubo, idade: 3, raca: SRD}
//b)
// cola o objeto gato, reutiliza

//3)
//function minhaFuncao(objeto, propriedade) {
//	return objeto[propriedade]
//}

//const pessoa = {
 // nome: "Caio", 
 // idade: 23, 
//  backender: false
//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))

//a)
//false
//undefined

// Exercícios de escrita de código

//1)
//const pessoa1 = {
 //nome: 'Carol',
//apelidos: ['Carol ', ' Lóu', ' mana']}

//function frase(objeto){
//let frasePadrao = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`
//return frasePadrao
//}
//const primeiraTentativa = frase(pessoa1)
//console.log(primeiraTentativa)

 //2)

 //function lista(objeto){
 //const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
 //return array
 //}
//const pessoa1 = {
//nome: `Carol`,
//idade: 31,
//profissao: `auxiliar de tecnologia`}

//const pessoa2 = {
//nome: `Bruno`,
//idade: 22,
//profissao: `callcenter`
//}
//const listaPessoa1 = lista(pessoa1)
//console.log(lista(pessoa1))

//3)
const carrinho = []

const fruta1 = {
nome: `uva`, 
disponibilidade: true
}

const fruta2 = {
nome: `morango`, 
disponibilidade: true
}

const fruta3 = {
nome: `melancia`, 
disponibilidade: true
}

function compras(frutasEscolhidas){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    return frutasEscolhidas
}

console.log(compras(carrinho))




