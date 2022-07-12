import express, {Request, Response} from 'express'
import cors from 'cors'
import { userInfo } from 'os'
type TypeUser = {id: number, name: string, phone: number, email: string}

let users:TypeUser[] = [
    {id: 1, name: "Carol", phone: 996686878, email: "carol@gmail.com"},
    {id: 2, name: "Bruno", phone: 996689999, email: "bruno@gmail.com"},
    {id: 3, name: "Liani", phone: 999999999, email: "liani@gmail.com"}
]

const app = express()

app.use(cors())
app.use(express.json())

//Exercício 1
app.get('/', (res: Response) => {
    res.send("Servidor funcionando!")
})

//Exercício 3
app.get('/users', (res: Response) => {
    res.send(users)
})
//Exercício 4
app.get('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const user = users.filter(user => user.id === id)

    res.send(user)
})
//Exercício 5
app.put('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const {phone} = req.body

    const updatePhone = users.map( user => {
        if(user.id === id){
            return {...user, phone: phone}
        }else{
            return user
        }  
    })
    users = updatePhone

    const updateUser = users.filter(user => user.id === id)

    res.status(201).send({mensage: "Number updated successfully!", user:updateUser[0]})
})
//Exercício 6
app.delete('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const index = users.findIndex(user => user.id === id)
    users.splice(index, 1)
/*splice: o 1º parâmetro é o index e
o 2º é a quantidade de obj pra deletar
a partir daquele index */
res.send(users)
})




app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))