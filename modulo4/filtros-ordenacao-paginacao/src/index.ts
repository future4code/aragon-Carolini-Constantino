import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getProducts } from "./endpoints/getProducts";
import { createProduct } from "./endpoints/createProduct";
import { deleteProduct } from "./endpoints/deleteProduct";
import { updateProduct } from "./endpoints/updateProduct";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

//Get products
app.get("/products", getProducts)

//Post new product
app.post("/products", createProduct)

//Delete product
app.delete("/products/:id", deleteProduct)

//Update product
app.put("/products/:id", updateProduct)