import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {

    public signup = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { nickname, email, password } = req.body

            if (!nickname || !email || !password) {
                throw new Error("Parâmetros faltando")
            }
            //Para gerar um id para o novo usuário, faz-se:
            const idGenerator = new IdGenerator
            const id = idGenerator.generate()

            const user = new User(
                id,
                nickname,
                email,
                password
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId()   
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({
                message: "Successfully registered",
                token
            })
            
        } catch (error) {
            if (
                typeof error.message === "string"
                && error.message.includes("Duplicate entry")
            ) {
                return res.status(400).send("Email already taken")
            }
            res.status(errorCode).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { email, password } = req.body

            if (!email || !password) {
                errorCode = 401
                throw new Error("Email or password not found")
            }
            //verificar se o e-mail/cadastro já existe 
            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if (!userDB) {
                errorCode = 401
                throw new Error("Email not found")
            }
//abaixo, cada atributo vem da função que procurou o user pelo email e retornou com todos
//os dados do usuário. 
            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password
            )
//função abaixo verifica se a senha passada via body é a mesma encontrada/ retornada
//do findByEmail (q faz um select da lista de users já cadastrados)
            if (user.getPassword() !== password) {
                errorCode = 401
                throw new Error("Senha inválida")
            }
//é puxado o id do usuário cadastrado para ser passado abaixo na hora de 
//criar um novo token a cada novo acesso.
            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(200).send({
                message: "Login realizado com sucesso",
                token
            })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Missing or invalid token.")
            }
            
            const userDatabase = new UserDatabase()
            const usersDB = await userDatabase.getAllUsers()

            const users = usersDB.map((user) => {
                new User(
                    user.id,
                    user.nickname,
                    user.email,
                    user.password
                )
            })

            res.status(200).send({ users })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public updateUser = async (req: Request, res: Response) =>{
        let errorCode = 400
        try {
            const { nickname, email, password } = req.body
            const id = req.params.id

            const token = req.headers.authorization
            
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Missing or invalid token.")
            }
            
            const userDatabase = new UserDatabase()
            await userDatabase.updateUser(nickname, email, password, id)

            


            res.status(200).send("success!") 
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) =>{
        let errorCode = 400
        try {
            const id = req.params.id

            const token = req.headers.authorization
            
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Missing or invalid token.")
            }
            
            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(id)

            res.status(200).send("success!") 
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}