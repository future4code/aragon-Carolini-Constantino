import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const [result] = await connection.raw(`
        SELECT
            ${TABLE_USERS}.getEmail,
            ${TABLE_PRODUCTS}.getName AS product_name,
            ${TABLE_PRODUCTS}.getPrice AS product_price,
            ${TABLE_PURCHASES}.getQuantity AS product_quantity,
            ${TABLE_PURCHASES}.getTotal_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.getId
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.getId
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}