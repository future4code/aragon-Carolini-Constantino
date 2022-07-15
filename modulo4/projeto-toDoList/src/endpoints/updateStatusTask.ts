import { Request, Response } from "express"
import connection from "../database/connection"

export const updateStatusTask = async (req: Request,res: Response) => {
    let errorCode = 400
    try {
      const taskId = req.params.taskId as string

      const [result] = await connection.raw(`
      SELECT status 
      FROM Tasks
      WHERE id = "${taskId}";
      `)
      
      if(!result[0]){
        errorCode = 400
        throw new Error("Non-existent task."); 
      }

      if(result === "TO_DO"){
      await connection.raw(`
      UPDATE Tasks
      SET status = "DOING
      WHERE id = "${taskId}";
     `)
      }
      
     if(result === "DOING"){
      await connection.raw(`
      UPDATE Tasks
      SET status = "DONE"
      WHERE id = "${taskId}";
     `)
    }

      res.status(200).send({message: "Status changed successfully"})
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }