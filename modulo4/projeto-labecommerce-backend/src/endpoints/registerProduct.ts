import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableName"

export const registerProduct = async (req: Request, res: Response) => {
let errorCode = 400
try {
    const {id, name} = req.body
        const price = Number(req.body.price)

        if (!name || !id || !price) {
            errorCode = 404
            throw new Error("Parameters 'name', 'id', 'price' and/or 'ml' non-existent.")
        }

        if (typeof name !== "string" || typeof id !== "string" ) {
            errorCode = 422
            throw new Error("Parameters 'name' and 'id' must be string.")
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parameters 'price' and 'ml' must be number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("The 'price' parameter must be greater than 0")
        }

        const newProduct = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        await connection(TABLE_PRODUCTS)
            .insert({
                id: newProduct.id,
                name: newProduct.name,
                price: newProduct.price,
            })

        res.status(201).send({message: "New product added."})
res.status(200).send({ message: "Product successfully created." })
} catch (error) {
res.status(errorCode).send({ message: error.message })
}
}