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

console.log(`Bem vindo ao jogo de Blackjack`)

const carta = comprarCarta


if(confirm("Quer iniciar uma nova rodada?")) {
         let cartaUsu1 = comprarCarta()
         let cartaUsu2 = comprarCarta()
         let cartaMaq1 = comprarCarta()
         let cartaMaq2 = comprarCarta()
         
         let pontuacaoUsuario = cartaUsu1.valor + cartaUsu2.valor
         let pontuacaoMaquina = cartaMaq1.valor + cartaMaq2.valor

         console.log(`Usuário - cartas: ${cartaUsu1.texto} ${cartaUsu2.texto} - ${pontuacaoUsuario}`)
         console.log(`Maquina - cartas: ${cartaMaq1.texto} ${cartaMaq2.texto} - ${pontuacaoMaquina}`)
         if (pontuacaoUsuario > pontuacaoMaquina) {
            console.log("O usuário ganhou!")
            }else if (pontuacaoMaquina > pontuacaoUsuario) {
            console.log("O computador ganhou!")
            }  else if (pontuacaoUsuario === pontuacaoComputador) 
            console.log("Empate!")   
} else {
	console.log("O jogo acabou")
}