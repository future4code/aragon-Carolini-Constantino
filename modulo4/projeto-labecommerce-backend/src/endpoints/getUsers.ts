import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableName"

export const getUsers = async (req: Request, res: Response) => {
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

        const result = await connection(TABLE_USERS)
            .select()
            .where("id", "=", `${id}`)
            .orderBy(`${sort}`, `${order}`)
            .limit(limit)
            .offset(offset);

      return  res.status(200).send({ User: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}