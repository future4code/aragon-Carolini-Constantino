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
    try {
        const { name, price } = req.body

        if (name === "" || price === null) {
            res.statusCode = 400
            throw new Error("Request failed. Check that the 'name' and 'price' fields are filled in.");
        }

        if (typeof name !== "string") {
            res.statusCode = 400
            throw new Error("Invalid type, 'name' must be a string.");
        }

        if (typeof price !== "number") {
            res.statusCode = 400
            throw new Error("Invalid type, 'price' must be a number.");
        }

        if (price <= 0) {
            res.statusCode = 400
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
        res.status(500).send({ messagem: error.message })
    }
})
//EXERCÍCIO 5

app.put("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { price } = req.body
        const index = products.findIndex(product => product.id === id)

        const productsUpdatePrice = products.map(product => {
            if (index === -1) {
                res.statusCode = 422
                throw new Error("Error: 'id' does not exist.")
            }
            if (price === null) {
                res.statusCode = 422
                throw new Error("Error: 'id' does not exist.")
            }
            if (price <= 0) {
                res.statusCode = 400
                throw new Error("Invalid request. The price must be greater than zero.");
            }

            product.price = price
            return products
        })
        
        
        res.status(201).send({ messagem: 'Request  successfully executed.', products: productsUpdatePrice})
    } catch (error) {
        res.status(500).send({ messagem: error.message })
    }
})
//EXERCÍCIO 6

app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (id !== "") {
            const index = products.findIndex(product => product.id === id)
            products.splice(index, 1)
            res.status(201).send({ messagem: 'Product successfully deleted' })
        } else {
            res.statusCode = 404
            throw new Error("Non-existent id.")
        }
    } catch (error) {
        res.status(500).send({ messagem: error.message })
    }
})

app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))