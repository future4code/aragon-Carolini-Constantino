import { PaidAccount } from "./data"

export type New_Account = {
    id: number,
    name: string,
    CPF: string,
    birthday: string,
    listaConstasPagas: PaidAccount[]
    balance: number
}