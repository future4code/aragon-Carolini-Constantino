import express, { Request, Response } from "express"
import cors from "cors"
import { ToDos, to_dos } from "./to_dos"

const app = express()

app.use(cors())//respovel para liberar o acesso 
app.use(express.json())// responsável por transformar em json

//Exercício 1
app.get("/ping", (req: Request, res: Response) => {
    try {
        res.status(200).send({ messagem: "Pong" })
    } catch (error) {
        res.status(500).send({ mesage: error.message })
    }
})

//Exercício 3
app.get("/toDos/:userId", (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId)

        const toDosUser = to_dos.filter(toDo => toDo.userId === userId)
        if(toDosUser.length === 0){
            res.statusCode = 404
            throw new Error("Erro: usuário não existente.");
        }
        res.status(200).send({ toDos: toDosUser })
    } catch (error) {
        res.send({ mesage: error.message })
    }
})

//Exercício 4
app.post("/toDos", (req: Request, res: Response) => {
    try {
        const { userId, title } = req.body

        if(typeof userId !== "number"){
            res.statusCode = 422
            throw new Error("Erro: Invalid type, 'userId' must be a number");
            
        }
        if(typeof title !== "string"){
            res.statusCode = 422
            throw new Error("Erro: Invalid type, 'title' must be a string");
            
        }
        const lastToDo = to_dos[to_dos.length - 1]

        const newToDo: ToDos = {
            userId: userId,
            id: lastToDo.id + 1,
            title: title,
            completed: false
        }

        to_dos.push(newToDo)

        res.status(201).send({ Mensage: "To-do successfully added!", to_dos })
    } catch (error) {
        res.send({ mesage: error.message })
    }
})

//Exercício 5
app.put("/toDos/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { completed } = req.body

        const changeStatusCompleted = to_dos.map(toDo => {
            if (toDo.id === id) {
                toDo.completed = completed
            }
            return toDo
        })

        res.send({ Message: "Property successfully changed.", to_dos: changeStatusCompleted })
    } catch (error) {
        res.send({ mesage: error.message })
    }
})


//Exercício 6
app.delete("/toDos/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const index = to_dos.findIndex((toDo => toDo.id === id))

        to_dos.splice(index, 1)

        res.send({ Message: "To-do successfully deleted" })
    } catch (error) {
        res.send({ mesage: error.message })
    }
})

//Exercício 7
app.get("/toDos", (req: Request, res: Response) => {
    const completed = req.query.completed
    try {

        if (completed !== "true" && completed !== "false") {
            return res.send({
                completed: completed,
                to_dos: to_dos
            })
        }

        if (completed === "true") {
            const result = to_dos.filter(toDo => toDo.completed === true)
            return res.send({
                to_dos: result
            })
        } else {
            const result = to_dos.filter(toDo => toDo.completed === false)
            return res.send({
                to_dos: result
            })
        }
    } catch (error) {
        res.send({ mesage: error.message })
    }
})


app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))