import { Request, Response } from "express"
import connection from "../database/connection"

export const userResponsibleTask = async (req: Request, res: Response) => {
  let errorCode = 400
  try {

    const taskId = req.params.taskId as string

    const [result] = await connection.raw(`
    SELECT
    Users.id,
    Users.nickname
    FROM Users
    JOIN Responsibles
    ON Responsibles.userId = Users.id
    WHERE Responsibles.taskId = ${taskId};
    `)
    

    res.status(200).send({ message: "Request made successfully.", user: result })
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}