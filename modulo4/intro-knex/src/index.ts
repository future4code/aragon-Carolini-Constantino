import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { User } from "./types";

// aqui devem ser construídos os endpoints (get put, post...)
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//Exercício 1
app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search as string // de onde vem o "search"

    if(search){
      const [result] = await connection.raw(`
      SELECT * FROM Users_List
      WHERE LOWER(name) LIKE "%${search}%"; 
      `)
      return res.status(200).send({user: result})
    }

    const [result] = await connection.raw(`
    SELECT * FROM Users_List;
    `)

    res.status(200).send({users: result})
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

//Exercício 2
app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const {name, email} = req.body
   

    if(!name || !email){
      throw new Error("Invalid parameters");
    }

    if(typeof name !== "string" || typeof email !== "string"){
      errorCode = 422
      throw new Error("name and email must be of type string"); 
    }

    if(!email.includes("@")){
      throw new Error("Invalid email");
    }

    const [checkEmail] = await connection.raw (`
    SELECT * FROM Users_List
    WHERE email = "${email}";
    `)

    if(checkEmail[0]){
      errorCode = 400
      throw new Error("E-mail already registered"); 
    }

    const newUser: User = {
      id: Number(Date.now()),
      name: name,
      email: email
    }

    await connection.raw(`
    INSERT INTO Users_List (id, name, email)
    VALUES (${newUser.id}, "${newUser.name}", "${newUser.email}");
    `)
    res.status(201).send({mensage: "User created successfully", user: newUser})
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

//Exercício 3
app.put("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const { email } = req.body //qual a diferença entre id pelo params e pelo body?
    console.log(email)

/*
    if(!id || !email){
      throw new Error("Invalid parameters");
    }

    if(typeof id !== "number" || typeof email !== "string"){
      errorCode = 422
      throw new Error("name and email must be of type string"); 
    }

    if(!email.includes("@")){
      throw new Error("Invalid email");
    }
*/
   await connection.raw(`
   UPDATE Users_List
   SET email = ${email}
   WHERE id = ${id}
   `)
    
    res.status(202).send({message: 'email updated successfully'})
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

//Exercício 4
app.delete("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    const [users] = await connection.raw(`
    SELECT * FROM Users_List
    WHERE id = ${id};
    `)

    const selectedUser = users[0]

    await connection.raw(`
    DELETE FROM Users_List
    WHERE id = ${id}
    `)
    
    res.status(200).send({message: "deleted user"})
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})