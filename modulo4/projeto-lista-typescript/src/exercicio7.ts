type TypeProd = {
	nome: string,
	quantidade: number,
	valorUnitario: any 
}
const produtos:TypeProd[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]
function geraListaOrdenada(lista:TypeProd[]):TypeProd[]{
	return lista.map(produto =>{
		const valorAjustado:any = produto.valorUnitario.toFixed(2).replace('.', ',')
//Não soube como tipar a const acima sem utilizar o any

	const produtoAtulizado:TypeProd = {
		nome: produto.nome,
		quantidade: produto.quantidade,
		valorUnitario: "R$ " + valorAjustado
	}
	return produtoAtulizado
	}).sort((a, b) => {
		if (a.quantidade < b.quantidade)
		  return -1;
		if (a.quantidade > b.quantidade)
		    return 1;
	})
}

console.log(geraListaOrdenada(produtos))