import { Request, Response } from "express"
import connection from "../database/connection"

export const deleteTask = async (req: Request,res: Response) => {
    let errorCode = 400
    try {
      const taskId = req.params.taskId as string

      const [result] = await connection.raw(`
      SELECT * 
      FROM Tasks
      WHERE id = "${taskId}";
      `)
      
      if(!result[0]){
        errorCode = 400
        throw new Error("Non-existent task."); 
      }

      await connection.raw(`
      DELETE FROM Responsibles
      WHERE taskId = "${taskId}";
      `)

      await connection.raw(`
      DELETE FROM Tasks
      WHERE id = "${taskId}";
      `)

      res.status(200).send({message: "Task deleted successfully"})
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }