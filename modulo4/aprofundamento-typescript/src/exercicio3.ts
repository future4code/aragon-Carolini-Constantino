
type Calculo = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros:number[]):Calculo  {

    const numerosOrdenados = numeros.sort(
        (a:number,b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}

console.log(`Resposta: `, obterEstatisticas([6, 8, 6, 5 , 9]))
