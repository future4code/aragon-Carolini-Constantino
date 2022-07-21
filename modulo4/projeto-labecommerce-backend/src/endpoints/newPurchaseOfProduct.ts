import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableName"
import { Purchase } from "../models/Purchase"

export const newPurchaseOfProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { user_id, product_id } = req.body
        const quantity = Number(req.body.quantity)

        if (!user_id || !product_id || !quantity) {
            errorCode = 404
            throw new Error("Parameters 'id', ùser_id`, quantity and/or `product_id` non-existent.")
        }

        if (typeof user_id !== "string" || typeof product_id !== "string") {
            errorCode = 422
            throw new Error("Parameters 'id', 'user_id' and 'product_id' must be string.")
        }

        if (typeof quantity !== "number") {
            errorCode = 422
            throw new Error("Parameters 'quantity' must be number.")
        }

        if (quantity <= 0) {
            errorCode = 422
            throw new Error("The 'quantity' parameter must be greater than 0")
        }

        const checkProduct = await connection(TABLE_PRODUCTS)
            .select()
            .where("id", "=", `${product_id}`);

        if (!checkProduct[0]) {
            errorCode = 404
            throw new Error("Erro: `product_id` not found.");
        }

        const total_price = checkProduct[0].price * quantity

        const newId = await connection(TABLE_PURCHASES)
            .select()

        const lastPurchase = newId[newId.length - 1]
        const lastId = Number(lastPurchase.id)

        const newPurchase: Purchase = {
            id: (lastId + 1).toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        }

        await connection(TABLE_PURCHASES)
            .insert({
                id: newPurchase.id,
                user_id: newPurchase.user_id,
                product_id: newPurchase.product_id,
                quantity: newPurchase.quantity,
                total_price: newPurchase.total_price
            })

        res.status(200).send({ message: "User successfully created." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}