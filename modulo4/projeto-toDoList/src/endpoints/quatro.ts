import { Request, Response } from "express"

export const quatro = async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    
    res.status(200).send({message: "..."})
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}