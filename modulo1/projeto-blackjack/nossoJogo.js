/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/*console.log(`Bem vindo ao jogo de Blackjack`)

const carta = comprarCarta


if(confirm("Quer iniciar uma nova rodada?")) {
         let cartaUsu1 = comprarCarta()
         let cartaUsu2 = comprarCarta()
         let cartaMaq1 = comprarCarta()
         let cartaMaq2 = comprarCarta()
         
         let pontuacaoUsuario = cartaUsu1.valor + cartaUsu2.valor
         let pontuacaoMaquina = cartaMaq1.valor + cartaMaq2.valor

         console.log(`Usuário - cartas: ${cartaUsu1.texto} ${cartaUsu2.texto} = ${pontuacaoUsuario}`)
         console.log(`Maquina - cartas: ${cartaMaq1.texto} ${cartaMaq2.texto} = ${pontuacaoMaquina}`)
         if (pontuacaoUsuario > pontuacaoMaquina) {
            console.log("O usuário ganhou!")
            }else if (pontuacaoMaquina > pontuacaoUsuario) {
            console.log("O computador ganhou!")
            }  else if (pontuacaoUsuario === pontuacaoComputador) 
            console.log("Empate!")   
} else {
	console.log("O jogo acabou")
}*/
/*
console.log(`Bem vindo ao jogo de Blackjack`)

if(confirm("Quer iniciar uma nova rodada?"))
{let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let somaCartasUsuario = carta1Usuario.valor+carta2Usuario.valor

let carta1Computador = comprarCarta()
let carta2Computador = comprarCarta()
let somaCartasComputador = carta1Computador.valor+carta2Computador.valor

console.log(`Cartas do Usuário: ${carta1Usuario.texto} e ${carta2Usuario.texto} = pontuação ${somaCartasUsuario}
Cartas do Computador: ${carta1Computador.texto} e ${carta2Computador.texto} = pontuação ${somaCartasComputador}`)

if(somaCartasUsuario===somaCartasComputador){console.log(`Empate!`)}
   else if(somaCartasUsuario>21){console.log(`O computador ganhou!`)}
   else if(somaCartasUsuario>somaCartasComputador){console.log(`O usuário ganhou!`)}
   else if(somaCartasComputador>somaCartasUsuario){console.log(`O computador ganhou!`)}
else{console.log("O jogo acabou!")}
}

*/

