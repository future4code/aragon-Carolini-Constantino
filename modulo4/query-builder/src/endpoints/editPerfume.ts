import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const editPerfume =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const {price} = req.body

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parameter 'price' must be number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("The 'price' parameter must be greater than 0")
        }

        const productExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (productExists.length === 0) {
            errorCode = 404
            throw new Error("Perfume not found.")
        }

        await connection(TABLE_PERFUMES)
        .update({
            price: price
        })
        .where({
            id
        })
        
        res.status(200).send({message: "Price edited"})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}