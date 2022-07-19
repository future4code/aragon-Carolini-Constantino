import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const createdPerfume =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {name, brand} = req.body
        const price = Number(req.body.price)
        const ml = Number(req.body.ml)

        if (!name || !brand || !price || !ml) {
            errorCode = 404
            throw new Error("Parameters 'name', 'brand', 'price' and/or 'ml' non-existent.")
        }

        if (typeof name !== "string" || typeof brand !== "string" ) {
            errorCode = 422
            throw new Error("Parameters 'name' and 'brand' must be string.")
        }

        if (typeof price !== "number" || typeof ml !== "number") {
            errorCode = 422
            throw new Error("Parameters 'price' and 'ml' must be number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("The 'price' parameter must be greater than 0")
        }

        const newPerfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml
        }

        await connection(TABLE_PERFUMES)
            .insert({
                id: newPerfume.id,
                name: newPerfume.name,
                brand: newPerfume.brand,
                price: newPerfume.price,
                ml: newPerfume.ml
            })
        
        res.status(201).send({message: "Perfume created."})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}