import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreteShowInput, IShowDB } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreteShowInput = {
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
        }
    }

}