import { Request, Response } from "express"
import connection from "../database/connection"

export const addResponsibleTask = async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    const taskId = req.params.taskId as string
    const userId = req.body.userId as string

    const [checkTaskId] = await connection.raw(`
    SELECT *
    FROM Responsibles
    WHERE taskId = "${taskId}";
    `)
 
    if(checkTaskId[0]){
      errorCode = 400
      throw new Error("There is already a person responsible for this task, choose another one."); 
    }

    const [checkUserId] = await connection.raw(`
    SELECT *
    FROM Users
    WHERE id = "${userId}";
    `)
  
    if(!checkUserId[0]){
      errorCode = 400
      throw new Error("Non-existent user.");
    }

    await connection.raw(`
    INSERT INTO Responsibles
    VALUES ("${userId}", "${taskId}");
    `)

    res.status(201).send({message: "Responsible for successful add task."})
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}