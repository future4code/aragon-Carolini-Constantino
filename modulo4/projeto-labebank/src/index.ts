import express, { Request, Response } from 'express'
import cors from 'cors'
import { PaidAccount, User, users } from './data'

const app = express()

app.use(cors())
app.use(express.json())
//  Endponit 1
app.post('/users', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const { name, CPF, birthday } = req.body;

        const newAccount: User = {
            id: Date.now(),
            name: name,
            CPF: CPF,
            birthday: birthday,
            listaContasPagas: [{valor: 0, description:"",paymentData:""}],
            balance: 0
        };

        users.push(newAccount)

        res.status(201).send({ message: "Account created successfully!", users: users })
    } catch (error) {
        if (error.statusCode !== 200) {
            res.status(500).send(error.message);
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

//  Endponit 2 - Pegar saldo
app.get('/users/:id', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)

        const i = users.findIndex(user => user.id === id)
        const balanceUser = users[i].balance

        res.status(200).send({ message: "Request made successfully.", Balalnce: balanceUser })
    } catch (error) {
        if (error.statusCode !== 200) {
            res.status(500).send(error.message);
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

//  Endponit 3 - Adicionar saldo
app.put('/users/:id', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const { balance } = req.body

        const i = users.findIndex(user => user.id === id)
        users[i].balance = balance

        res.status(201).send({ message: "Account created successfully!", User: users[i] })
    } catch (error) {
        if (error.statusCode !== 200) {
            res.status(500).send(error.message);
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

//  Endponit 4 - Pagar conta
app.put('/users/:id/pay', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = Number(req.params.id)
        const { valor, description } = req.body

        const i = users.findIndex(user => user.id === id)
        const newAccount: PaidAccount = {
            valor: valor,
            description: description,
            paymentData: Date.now().toString()
        }

        users[i].listaContasPagas.push(newAccount)


        res.status(201).send(users[i])
    } catch (error) {
        if (error.statusCode !== 200) {
            res.status(500).send(error.message);
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

app.listen(3003, () => console.log("The server is running on port 3003"))
