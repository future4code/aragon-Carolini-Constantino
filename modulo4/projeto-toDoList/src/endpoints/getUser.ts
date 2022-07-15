
import { Request, Response } from "express"
import connection from "../database/connection"

export const getUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const search = req.query.search as string
      
      if(search){
        const [result] = await connection.raw(`
        SELECT * FROM Users
        WHERE LOWER(name) LIKE "%${search.toLowerCase()}%"
        OR LOWER(nickname) LIKE "%${search.toLowerCase()}%";
        `)
       return res.status(200).send({message: "Request made successfully.", users: result})
      }
  
      const [result] = await connection.raw(`
      SELECT * FROM Users;
      `)
  
      res.status(200).send({message: "Request made successfully.", users: result})
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
  }