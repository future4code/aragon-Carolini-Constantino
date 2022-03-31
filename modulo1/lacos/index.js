/*
//1. O comando retorna 5,
// o for faz valor ser incrementado por '1' cada vez que o loop roda
// o loop vai rodar até o 'i' ser 5
let valor=0
for (let i = 0; i < 5; i++) {
    valor += 1
}
console.log(valor)


//2a.Será impresso: 19,21,23,25,27,30
// código provido:
const lista=[10,11,12,15,18,19,21,23,25,27,30]
for (let numero of lista) {
   if (numero > 18){
       console.log(numero)
    }
}
//2b. não é suficiente, para acessar o índice, seria melhor usar:
//for (let i=0; i<lista.length; i++) {console.log(lista[i])}



//3. seria:
*
**
***
****

*/


//Exercício de escrita

let condicao = true

while(condicao) {
    const respostaUsuario = Number(prompt("Quantos pets vc tem?")){
        
        if(respostaUsuario)
        console.log("Que pena! Vc pode adotar um pet!")
    } else{

    }
   
if(respostaUsuario)