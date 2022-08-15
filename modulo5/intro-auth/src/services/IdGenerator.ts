import { v4 } from 'uuid'
//AQUI É A FUNÇÃO QUE CRIA O ID ÚNICO UNIVERSAL
export class IdGenerator {
    public generate = (): string => {
        return v4()
    }
}