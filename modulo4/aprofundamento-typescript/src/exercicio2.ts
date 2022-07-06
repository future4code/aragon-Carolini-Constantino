enum COR_FAVORITA {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ROXO = "roxo"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: COR_FAVORITA
}
const carol: pessoa = {
    nome: "Carol",
    idade: 32,
    corFavorita: COR_FAVORITA.VERMELHO
}

console.log(`Resposta: `, carol)
