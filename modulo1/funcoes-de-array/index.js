/*RECAPITULANDO*/

//--------------------MAP--------------------- 
/*const listaNumSorteados = [5,16,20,13,12]
console.log(listaNumSorteados)
const novaListaFrasesCompleta = listaNumSorteados.map((numero, index) => {
    return `O bola que está na posição ${index} é ${numero}` 
})

console.log(novaListaFrasesCompleta)*/

//FILTER
/*const produtosDisponíveisOnline = [
    {nome: "cerveja", categoria: "bebida", preço: 2.80}
    {nome: "morango", categoria: "fruta", preço: 5.00}
    {nome: "Omo", categoria: "limpeza", preço: 14.29}
    {nome: "banana", categoria: "fruta", preço: 6.00}
    {nome: "guaraná", categoria: "bebida", preço: 4.80}
    {nome: "dollny", categoria: "limpeza", preço: 13.00}

    const novaListaProdutosLimpeza = produtosDisponíveisOnline.filter((produto)=>{
        return produto.categoria === "limpeza"
    })*/
// aqui eu vou criar uma nova array onde terei apenas os produtos de limpeza,
//pra isso eu dou uma nome a essa nova array, pego a array com tds os produtos
//e filtro dele o produto, mas ñ é qualquer produto, são todos aqueles que dentro 
//da categoria tenha a info que seja igual a limpeza

//EXERCÍCIOS DE INTERPRETAÇÃO

//1.
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  console.log(usuarios)
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/
  //Resposta:
  //a)Será impresso cada objeto da array usuáios, o index ao lado de cada objeto e
  //a array eu ñ entendi
  
  //2.
 /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/

  //a) vai ser impresso uma lista apenas com os nomes

  //3.
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
*/
  //Resposta:
  //a)vai criar uma nova lista, mas com 2 itens a menos pq ele pede 
  //só pra imprimiri o apelidos diferentes de "Chijo"*/

  //EXERCÍCIOS DE ESCRITA DE CÓDIGO

  //1.
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 console.log(pets)
 
//a)
 const listaNomes = pets.map((pet)=>{
     return pet.nome
 })

console.log(listaNomes)

//b)
/*const listaNomesSalsicha = pets.filter((pet)=>
{
    return pet.raca==="Salsicha"
})

console.log(listaNomesSalsicha)

c)*/
/*const fichasPoodles = pets.filter((pet)=>
{
    return pet.raca==="Poodle"
})
//....................................
const nomesPoodles = fichasPoodles.map((pet)=>
{
    return pet.nome
})
console.log(nomesPoodles)

//....................................
const enviarMsgPoodles = nomesPoodles.map((nome)=>
{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}`
})
console.log(enviarMsgPoodles)

2.
const produtosDisponiveis = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]*/

 //a)
 /*let apenasNomes = produtosDisponiveis.map((produto)=>
 {
     return produto.nome
 })
 console.log(apenasNomes)*/

 //b) nome e preço, aplicando 5%
/*
let listaNomePrecoDesc = produtosDisponiveis.map((produto) =>{
    return{
        nome: produto.nome,
        preco: produto.preco * 0.95
    }
})
console.log(listaNomePrecoDesc)*/

 //c)
 /*const bebidas = produtosDisponiveis.filter((objeto)=>{
     return objeto.categoria === "Bebidas"
 })
 console.log(bebidas)*/

 //d)
/* const produtosYpe = produtosDisponiveis.filter((produto)=>{
return produto.nome !== "Ypê"
     })
     console.log(produtosYpe)

//e)
let frases = produtosYpe.map((produto)=>{
    let nome = produto.nome
    let preco = produto.preco
    return `Compre ${nome} por ${preco} `
})
console.log(frases)*/