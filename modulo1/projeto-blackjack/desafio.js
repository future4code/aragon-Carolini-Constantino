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
let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()
let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()

if(cartaUsuario1&&cartaUsuario2==="A"){
   let novaCartaUsuario1 = comprarCarta()
   let novaCartaUsuario2 = comprarCarta()
   let cartaUsuario1 = novaCartaUsuario1
   let cartaUsuario2 = novaCartaUsuario2
}

confirm(`Suas cartas são ${cartaUsuario1} e ${cartaUsuario2}. A carta revelada do computador é ${cartaComputador1}`)}