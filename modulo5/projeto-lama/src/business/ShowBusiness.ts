import { ShowDatabase } from "../database/ShowDatabase"
import { ConflictError } from "../errors/ConflictError"
import { ForbiddenError } from "../errors/Forbidden"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreteShowInput, IShowDB, Show } from "../models/Show"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreteShowInput) => {
        const { token, band, starts_at } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const role = payload.role

        if ( role === "NORMAL") {
            throw new ForbiddenError();
        }

           // const invalidShow = new Date(starts_at) < 
        // if ()

        const isExistShow = await this.showDatabase.findShow(band, starts_at)

        if (isExistShow) {
            throw new ConflictError("Show já existe"); 
        }
console.log(new Date(starts_at))
        const newShow: IShowDB = {
            id: this.idGenerator.generate(),
            band: band,
            starts_at: new Date(starts_at)
        }
    }
}