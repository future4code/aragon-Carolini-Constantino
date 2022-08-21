import { ShowDatabase } from "../database/ShowDatabase"
import { ConflictError } from "../errors/ConflictError"
import { ForbiddenError } from "../errors/Forbidden"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import {ICreateReservationInput, ICreateShowInput, IDeleteReservationInput, IFindResInput, IGetShowsInput, IMessageOutput, ITicketDB, Show } from "../models/Show"
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

    public createShow = async (input: ICreateShowInput) => {
        const { token, band, starts_at } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const role = payload.role

        if ( role === "NORMAL") {
            throw new ForbiddenError("Usuário cadastrado, mas sem permissão");
        }

       const day = new Date(starts_at).getDate()
       const month = new Date(starts_at).getMonth() + 1
       const year = new Date(starts_at).getFullYear()

       if (day < 5 || month < 12 || year < 2022) {
        throw new RequestError("Data inferior ao início do evento");
       }

       if (day > 11 || month > 12 || year > 2022) {
        throw new RequestError("Data superior ao limite do evento");
       }

       const date = new Date(starts_at)

        const isExistShow = await this.showDatabase.findShow(date)

        if (isExistShow) {
            throw new ConflictError("O show já existe"); 
        }

        const id = this.idGenerator.generate()
        const startsAt = new Date(starts_at)
        const tickets = 5000

        const newShow = new Show (
            id,
            band,
            startsAt,
            tickets
        )

        await this.showDatabase.createShow(newShow)

        const response: IMessageOutput = {
            message: "Show criado com sucesso"
        }

        return response
    }

    public getShows = async (input: IGetShowsInput) => {
        const { band, starts_at, tickets } = input
    }

    public createReservation = async (input: ICreateReservationInput) => {
        const { token, show_id } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const isExistShow = await this.showDatabase.findShowById(show_id)

        if (!isExistShow) {
            throw new NotFoundError("Show não localizado");
        }

        const user_id = payload.id

        const reservation: IFindResInput = { show_id, user_id}

        const isReserved = await this.showDatabase.findReservation(reservation)

        if (isReserved) {
            throw new ConflictError("Reserva já realizada");
        }

        const id = this.idGenerator.generate()
        
        const newReservation: ITicketDB = {
            id,
            show_id,
            user_id
        }

        await this.showDatabase.createReservation(newReservation)

        const response: IMessageOutput = {
            message: "Reserva realizada com sucesso!"
        }

        return response
    }

    public deleteReservation = async (input : IDeleteReservationInput) => {
        const { token, show_id } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const isExistShow = await this.showDatabase.findShowById(show_id)

        if (!isExistShow) {
            throw new NotFoundError("Show não localizado");
        }

        const user_id = payload.id

        const reservation: IFindResInput = { show_id, user_id}

        const isReserved = await this.showDatabase.findReservation(reservation)

        if (!isReserved) {
            throw new RequestError("Reserva não existente");
        }

        const isReservationOfUser = user_id === isReserved.user_id

        if (!isReservationOfUser) {
            throw new UnauthorizedError("Não é possível deletar reserva de outro usuário");
            
        }

        const id_reservation = isReserved.id

        await this.showDatabase.deleteReservation(id_reservation)

        const response: IMessageOutput = {
            message: "Reserva deletada com sucesso!"
        }

        return response

    }
}