enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type TypeFilme = {
    nome:string,
    anoLancamento:number,
    genero:string,
    pontuacao ?:number
}

function imprimeFilme(nomeInput:string, anoLancamentoInput:number, generoInput:GENERO, pontuacaoInput?:number):TypeFilme {

    if(pontuacaoInput){
   return {
    nome: nomeInput,
    anoLancamento: anoLancamentoInput,
    genero: generoInput,
    pontuacao: pontuacaoInput
    }
} else {
    return {
        nome: nomeInput,
        anoLancamento: anoLancamentoInput,
        genero: generoInput,   
    }
}
}

console.log(imprimeFilme("Duna", 2021, GENERO.ACAO))
