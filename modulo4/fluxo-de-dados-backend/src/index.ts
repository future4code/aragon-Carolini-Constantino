import express, { Request, Response } from 'express'
import cors from 'cors'
import { Product, products } from './data'

const app = express()

app.use(cors())
app.use(express.json())

//EXERCÍCIO 1
app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send({ messagem: 'Request  successfully executed' })
    } catch (error) {
        res.status(400).send({ messagem: 'Bad request. The API is not functional.' })
    }
})

//EXERCÍCIO 3
app.get("/products", (req: Request, res: Response) => {
    try {
        res.status(201).send({ messagem: 'Request  successfully executed', products: products })
    } catch (error) {
        res.status(500).send({ messagem: error.message })
    }
})
//EXERCÍCIO 4

app.post("/products", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, price } = req.body

        if (name === "" || price === null) {
            errorCode = 422
            throw new Error("Request failed. Check that the 'name' and 'price' fields are filled in.");
        }

        if (typeof name !== "string") {
            errorCode = 422
            throw new Error("Invalid type, 'name' must be a string.");
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Invalid type, 'price' must be a number.");
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Invalid request. The price must be greater than zero.");
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        products.push(newProduct)

        res.status(201).send({ messagem: 'Request  successfully executed', products })

    } catch (error) {
        if(res.statusCode === 200){
            res.status(500).end();
        }else{
        res.status(500).send({ messagem: error.message })
        }
    }
})
//EXERCÍCIO 5

app.put("/products/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
            const id = req.params.id
            const { price } = req.body
    
                if (!price) {//verifica se o novo preço foi inserido.
                    errorCode = 422
                    throw new Error("Error: 'id' not exist.")
                }
                if (typeof price !== "number") {
                    errorCode = 422;
                    throw new Error("Product price must be a number.");
                };
                if (price <= 0) {
                    errorCode = 422
                    throw new Error("Invalid request. The price must be greater than zero.");
                }
                
                const productIndex = products.findIndex(product => product.id === id)//retorna o index do produt solicitado ex: 2 = id2
                
                if (productIndex === -1) {
                    errorCode = 422
                    throw new Error("Error: 'id' does not exist.")
                }

                products[productIndex].price = price
                res.status(201).send({ messagem: 'Request  successfully executed.', product: products[productIndex]})

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(error.message);
        };
    }
})
//EXERCÍCIO 6

app.delete("/products/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const {id} = req.params

        const indexProduct = products.findIndex(product => product.id === id)
        
        if (indexProduct < 0){
            errorCode = 422
            throw new Error("Id doesnt match a valid product");
            
        }

        products.splice(indexProduct, 1)
        
    res.status(201).send({ messagem: 'Product successfully deleted' })
    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(error.message);
        };
    }
})

app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))