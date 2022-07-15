import { Request, Response } from "express"
import connection from "../database/connection"

export const updateNickname = async (req: Request,res: Response) => {
    let errorCode = 400
    try {
      const userId = req.params.userId as string
      const nickname = req.body.nickname 

      const [checkTaskId] = await connection.raw(`
      SELECT *
      FROM Users
      WHERE id = "${userId}";
      `)
  
      if(!checkTaskId[0]){
        errorCode = 400
        throw new Error("Non-existent task.");
      }
  
      if(!nickname || nickname.length < 3){
        errorCode = 400
        throw new Error("Nickname must exist and must be 3 or more characters long.");  
      }

      await connection.raw(`
      UPDATE Users
      SET nickname = "${nickname}"
      WHERE id = "${userId}";
     `)

      
      res.status(200).send({message: "Nickname successfully edited."})
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }