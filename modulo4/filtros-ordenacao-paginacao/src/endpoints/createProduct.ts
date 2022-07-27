import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const createProduct = async(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const name = req.body.name
        const price = Number(req.body.price)

        if (!id || !name || !price){
            errorCode = 204
            throw new Error("'id', 'name' and 'price' are required.");    
        }

        if(typeof id !== "string" || typeof name !== "string"){
            errorCode = 400
            throw new Error("'id' and 'name' must be of type 'string'");    
        }

        if(typeof price !== "number" || price <= 0){
            errorCode = 406
            throw new Error("'price' must be of type 'number' and be greater than zero.")
        }

        await connection.raw(`
        INSERT INTO ${TABLE_PRODUCTS} (id, name, price)
        VALUES ("${id}", "${name}", ${price});
        `)
       
        const [ result ] = await connection.raw(`
        SELECT name FROM ${TABLE_PRODUCTS} WHERE id = "${id}";`)

        return res.status(201).send({message: "Producto created", newProduct: result})
        //corrigir o retorno, quero que volte o product created
    } catch (error) {
        res.status(errorCode).send({ message: error.message }) 
    }
}