import { IUserDB, User } from "../models/User"
import { ITokenPayload } from "../services/Authenticator"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Auth_Users"

    public createUser = async (user: User) => {

        const userDB: IUserDB = {
            id: user.getId(),
            nickname: user.getNickname(),
            email: user.getEmail(),
            password: user.getPassword()
        }
        await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .insert(userDB)
    }

    public findByEmail = async (email: string) => {
        const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })
        console.log(result)
        console.log(result[0])
        return result[0]
    }

    public getAllUsers = async () => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
        
        return result
    }
    
    public updateUser = async (nickname: string, email: string, password: string, id: string) => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert({
                id,
                nickname,
                email,
                password
            })
    }

    public findById = async (idUser: string) => {
        const result = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select("id")
        .where({ id: idUser })
        
        return result
    }

    public deleteUser = async (id: string) => {
        const result = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .delete("id")
        .where({ id })
        
        return result
    }
}