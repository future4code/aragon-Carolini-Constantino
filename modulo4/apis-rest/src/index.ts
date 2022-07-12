import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users, USER_ROLE } from './data'
import { throws } from 'assert'
import { Console } from 'console'

const app = express()

app.use(cors())
app.use(express.json())

//Exercício 2
app.get("/users/", (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const {role} = req.query
      
        if(!role){
           res.status(202).send(users)   
        }

        if(role !== 'admin' && role !== 'normal'){
            errorCode = 444
            throw new Error("The 'role' property must be 'admin' or 'normal'");
        }
    
        const userRole = users.filter(user => user.role === role)
        
        res.status(200).send({users: userRole})
    } catch (error) {
        if(error.statusCode !== 200){
            res.status(500).send(error.message);
        }else{
            res.status(errorCode).send(error.message)
        }
    }
})

//Exercício 3

app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const {name, email, role, age} = req.body
     
        console.log(role)
        if(!name && !email && !age && !role){
            errorCode = 204
            throw new Error("Error:'name', 'email', 'age' or 'role' are mandatory. Make sure you are passing all the necessary data."); 
        }
        if(typeof name !== "string" || typeof email !== "string"){
            errorCode = 206
            throw new Error("Error: 'name' and 'email' must be of type string.");  
        }
        if(typeof age !== "number"){
            errorCode = 206
            throw new Error("Error: 'age' must be of type number.");
        }
       
    const indexEmail = users.findIndex(user => user.email === email)
        if(indexEmail > 0){
            errorCode = 400
            throw new Error("Error: 'email' already registered.");  
        }

        if(role !== "admin" && role !== "normal"){
            errorCode = 400
            throw new Error("Error: Role property must be 'admin' or 'normal'. Try again.");
        }

        const newUser:User = {
            id: Date.now(),
            name: name,
            email: email,
            role: role, 
            age: Number(age)
        } 

        users.push(newUser)

        res.status(201).send({messagem: "User created successfully", Users: users})
    } catch (error) {
       if(error.statusCode === 200){
        res.status(500).send({a: "Deu certo"});
       }else{
        res.status(errorCode).send(error.message)
       }
    }
})

//Exercício 4

app.put("/users", (req) => {
    let errorCode = 400

    try {
        const id = Number(req.body.id)
        const {email} = req.body

        if(!id){
            errorCode = 206
            throw new Error("Error: Non-existent 'id'.");
        }

        if(!email){
            errorCode = 206
            throw new Error("Error: Non-existent 'email'");
        }

        const emailIdex = users.findIndex(user => user.id === id)

        if(emailIdex < 0){
            errorCode = 400
            throw new Error("Error: Non-existent user");            
        }

        users[emailIdex].email = email

    

    } catch (error) {
      
            error.status(errorCode).send(error.message)
    }
})

app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if(!id){
            errorCode = 444
            throw new Error("Error: Non-existent 'id'.");
        }
        if(typeof id !== "number" ){
            errorCode = 206
            throw new Error("Error: 'id' must be of type number.");   
        }

        const idNum:number = Number(id)

        const iUser = users.findIndex(user => user.id === idNum)
        users.splice(iUser, 1)
        
        res.status(200).send({Message: "User successuly delete."})
    } catch (error) {
        
    }
})

app.listen(3003,() => console.log("The server is running on port 3003"))