import express, { Request, Response } from "express"
import cors from "cors"
import { ToDos, to_dos } from "./to_dos"

const app = express()

app.use(cors())
app.use(express.json())

//Exercício 1
app.get("/ping", (req: Request, res: Response) => { 
    res.send({messagem: "Pong"})
})

//Exercício 3
app.get("/toDos/:userId",(req: Request, res: Response) => {
    const userId = Number(req.params.userId)

    const toDosUser = to_dos.filter(toDo => toDo.userId === userId)

    res.send({toDos: toDosUser})
})

//Exercício 4
app.post("/toDos", (req: Request, res: Response) => {
    const {userId, title} = req.body

    const lastToDo = to_dos[to_dos.length -1]

    const newToDo:ToDos = {
        userId: userId,
        id: lastToDo.id + 1,
        title: title,
        completed: true
    }

    to_dos.push(newToDo)

    res.send({Mensage: "To-do successfully added!", to_dos})
})

//Exercício 5
app.put("/toDos/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {completed} = req.body
    
    const changeStatusCompleted = to_dos.map(toDo => {
        if(toDo.id === id){
                toDo.completed = completed
        }
            return toDo
    })

    res.send({Message: "Property successfully changed.", to_dos: changeStatusCompleted})
})


//Exercício 6
app.delete("/toDos/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = to_dos.findIndex((toDo => toDo.id === id))

    to_dos.splice(index, 1)

    res.send({Message: "To-do successfully deleted"})
})

//Exercício 7
app.get("/toDos", (req: Request, res: Response) => {
    const completed = req.query.completed

    if(completed !== "true" && completed !== "false") {
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
    }else {
        const result = to_dos.filter(toDo => toDo.completed === false)
        return res.send({
            to_dos: result
        })
    }
})


app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))