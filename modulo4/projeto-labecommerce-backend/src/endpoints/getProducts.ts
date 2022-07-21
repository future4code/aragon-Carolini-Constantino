import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableName"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { id } = req.body
        const sort = req.query.sort || "id"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if (!id) {
            errorCode = 404
            throw new Error("`id` non-exisits.");
        }

        const result = await connection(TABLE_PRODUCTS)
            .select()
            .where(id)
            .orderBy(`${sort}`, `${order}`)
            .orderBy(`${sort}`, `${order}`)
            .limit(limit)
            .offset(offset);


        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}