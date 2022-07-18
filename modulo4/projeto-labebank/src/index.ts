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

        if(!name || !CPF || !birthday){
            errorCode = 204 //-------
            throw new Error("Error: 'name', 'CPF' ou 'birthday' non-existente. Try again.");    
        
        }

        if(typeof name !== "string" || name.length < 3){
            errorCode = 406
            throw new Error("The 'name' property must be of type string and contain more than 3 letters");
            
        }

        if(typeof CPF !== "string" || CPF.length < 11){
            errorCode = 406
            throw new Error("The 'CPF' property must be of type string and contain more than 11 characters");
            
        }

        const i = users.findIndex(user => user.CPF === CPF);
        if(i >= 0){
            errorCode = 400
            throw new Error("Error: CPF already exists.")

        }

        const yearBirth = birthday.substr(6)
        const date = new Date() //2022-07-09T17:22:29.376Z
        const currentYear = date.getFullYear()//2022
        const age = currentYear - yearBirth  

        if(age < 18){
            errorCode = 401
            throw new Error("Error: User must be over 18 years old.")
        }

        const newAccount: User = {
            id: Date.now(),
            name: name,
            CPF: CPF,
            birthday: birthday,
            listaContasPagas: [{valor: null, description:null,paymentData:null}],
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

        if(!id){
            errorCode = 204
            throw new Error("Error: 'id' non-existe. Try again.");
            
        }

        const iId = users.findIndex(user => user.id === id)

        if(iId < 0){
            errorCode = 404
            throw new Error("Error: 'id' not found");
        }

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
        const balance = Number(req.body.balance)

        if(typeof balance !== "number" || balance <= 0){
            errorCode = 406
            throw new Error("Error: 'balance' must be of type number and greater than zero.");
            
        }

        if(!balance || !id){
            errorCode = 204
            throw new Error("Error: 'id' and 'balance' are mandatory. Try again.");
            
        }
       
        const i = users.findIndex(user => user.id === id)
        if (i < 0){
            errorCode = 404
            throw new Error("Error: 'id' non-existente.");
            
        }

        users[i].balance = balance

        res.status(202).send({ message: "Account created successfully!", User: users[i] })
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
        if (i < 0){
            errorCode = 400
            throw new Error("Error: 'id' non-existente in the list of registered accounts.");
            
        }

        if (!id || !valor || !description){
            errorCode = 204
            throw new Error("Error: 'id', 'valor' or 'descriptio' non-existent. Try again.");
            
        }

        if(typeof valor !== "number" || typeof description !== "string"){
            errorCode = 406
            throw new Error("Error: 'valor' must be of type number and 'description' must be of type string.");
            
        }

        if(valor < 0){
            errorCode = 406
            throw new Error("Error: 'valor' must be greater than zero.");
            
        }

        const balance = users[i].balance

        if(valor > balance){
            errorCode = 402
            throw new Error("Error: Account value cannot be greater than the user's total balance.");
            
        }

        const today = new Date()//2022-07-09T17:22:29.376Z
        const day = String(today.getDate()).padStart(2, '0')//09 (chegar a 2 letras, preenchendo com 0)
        const month = String(today.getMonth()).padStart(2, '0')
        const year = today.getFullYear()//2022
        const currentDate = day + "/" + month + "/" + year // 09/07/2022

        const newAccount: PaidAccount = {
            valor: valor,
            description: description,
            paymentData: currentDate
        }

        users[i].listaContasPagas.push(newAccount)
        users[i].balance  = users[i].balance - valor

        res.status(202).send(users[i])
    } catch (error) {
        if (error.statusCode !== 200) {
            res.status(500).send(error.message);
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

app.listen(3003, () => console.log("The server is running on port 3003"))
