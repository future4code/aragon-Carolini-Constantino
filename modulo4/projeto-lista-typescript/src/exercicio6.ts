type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function pessoasEmDebito(lista:Cliente[]):Cliente[] {

   return lista.map(pessoa => {
    for(let debito of pessoa.debitos){ //pega o arr debitos da elemento.debitos
        pessoa.saldoTotal = pessoa.saldoTotal - debito //aqui ele vai passando de debito em debito e
                                                           //vai subtraindo do saldo atal                                 
    }
    return pessoa //retorna tds pessoas(por causa do map), mas cm o saldoTotal atualizado(por causa do for of)
   }).filter(pessoa => pessoa.saldoTotal <= 0)//filtra e retorna apena as pessoas com saltoTotal menor q zero
} //o filter está sendo feito na lista mapeada(atualizada) anteriormente

console.log(pessoasEmDebito(clientes)) 