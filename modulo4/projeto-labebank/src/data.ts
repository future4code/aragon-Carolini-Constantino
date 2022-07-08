export type PaidAccount = {
    valor:number,
    description:string,
    paymentData:string
}

export type User = {
    id: number,
    name: string,
    CPF: string,
    birthday: string,
    listaContasPagas: PaidAccount[],
    balance: number
}

export const users:User[] = [
    {
        id: 12345678910,
        name: "Carol",
        CPF: "09889098800",
        birthday: "22/06/1990", 
        listaContasPagas: [{valor: 150.00, description: "salão", paymentData: "08/07/2022"}],
        balance: 3500.00 
    }
] 