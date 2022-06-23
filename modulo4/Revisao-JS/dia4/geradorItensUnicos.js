const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
];

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

const geradorItensUnicos = (lista1, lista2) => {
	const listaConcatenada = lista1.concat(lista2) //uni as duas listas em uma só
	const listaFinal = []
//Abaixo no for, vai passar todos os itens da listaConcatenada,
//um de cada x pra verificar se se passam da condição abaixo
	for (let itemListaConc of listaConcatenada) {
		const itemListaFinal = listaFinal.find(item => item.nome === itemListaConc.nome) 
//Acima o find retorna o objeto que é = ou undefined quando não é encontrado. 
//Considerando que o if abaixo só executa se for true, e undefined é false e significa que realmente 
//aquele item é único pra ñ encontrou outro =, então é necessário negar o undefined pra ficar true e 
//executar o push
		if(!itemListaFinal){
			listaFinal.push(itemListaConc)
		}
	}
	return listaFinal
}

console.log(geradorItensUnicos(primeiraLista, segundaLista))
