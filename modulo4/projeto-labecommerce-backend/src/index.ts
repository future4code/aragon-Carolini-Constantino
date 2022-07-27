import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { getPurchases } from './endpoints/getPurchases'
import { registerUser } from './endpoints/registerUser'
import { getUsers } from './endpoints/getUsers'
import { registerProduct } from './endpoints/registerProduct'
import { getProducts } from './endpoints/getProducts'
import { newPurchaseOfProduct } from './endpoints/newPurchaseOfProduct'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)
app.post("/users", registerUser)
app.get("/users", getUsers)
app.post("/products", registerProduct)
app.get("/products", getProducts)
app.post("/purchases", newPurchaseOfProduct)
app.get("/users/:user_id/purchases", getPurchases)