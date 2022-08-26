import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateReservationInput, ICreateShowInput, IDeleteReservationInput, IGetShowsInput } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInput = {
                token: req.headers.authorization,
                band: req.body.band,
                starts_at: req.body.starts_at
            }

            const response = await this.showBusiness.createShow(input)
            
            res.status(201).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({ message: "Erro inesperado ao criar show" })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {
            const input: IGetShowsInput = {
                band: req.body.band,
                starts_at: req.body.starts_at,
                tickets: req.body.tickets,
            }

            const response = await this.showBusiness.getShows(input)
            
            res.status(200).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({ message: "Erro inesperado ao criar show" })
        }
    }

    public createReservation = async (req: Request, res: Response) => {
        try {
            const input: ICreateReservationInput = {
                token: req.headers.authorization,
                show_id: req.params.show_id
            }

            const response = await this.showBusiness.createReservation(input)
            
            res.status(201).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({ message: "Erro inesperado ao reservar show" })
        }
    }

    public deleteReservation = async (req: Request, res: Response) => {
        try {
            const input: IDeleteReservationInput = {
                token: req.headers.authorization,
                show_id: req.params.show_id
            }
         
            const response = await this.showBusiness.deleteReservation(input)
  
            res.status(201).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({message: error.message})
            }
            res.status(500).send({ message: "Erro inesperado ao deletar reserva de show" })
        }
    }

}