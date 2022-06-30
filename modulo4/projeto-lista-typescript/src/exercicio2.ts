function imprimeFrase (nome:string, data:string):string{
    const dia = data.slice(0,2)
    const mes = data.slice(3, 5)
    const ano = data.slice(6, 10)

    return `Olá, me chamo ${nome}, nasci no dia ${dia}, no mês de ${mes} e ano de ${ano}.`
}

console.log(imprimeFrase("Carol", "22/06/1990"))
