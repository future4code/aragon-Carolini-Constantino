import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const updateProduct = async(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id as string
        const price = Number(req.body.price)

        if(!id){
            errorCode = 400
            throw new Error("'id' is requised.")
        }

        if(typeof id !== "string"){
            errorCode = 400
            throw new Error("'id' must be of type 'string'.");    
        }
        
        const [checkId] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS} WHERE id = "${id}";
        `)

        if(!checkId[0]){
            errorCode = 400
            throw new Error("'product' not found.") 
        }

        if(typeof price !== "number" || price < 0){
            errorCode = 400
            throw new Error("'price' must be of type 'number' and be greater than zero.")
        }

        await connection.raw(`
        UPDATE ${TABLE_PRODUCTS}
        SET price = ${price}
        WHERE id = "${id}";
        `)

        return res.status(200).send({message: "Producto sucessfully edited."})
    } catch (error) {
        res.status(errorCode).send({ message: error.message }) 
    }
}