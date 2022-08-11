import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public findByEmail = async (email: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

        return usersDB[0]
    }
//abaixo,como um novo usuário está sendo criado, ele precisa seguir a estrutura da classe User.
//Dentro do método, para destrutura, tbm devemos seguir o padrão da classe, por isso q para pegar
//cada atributo, devemos utilizar os gets q são padrões da classe
    public createUser = async (user: User) => {
//Pq é necessário desfragmentar o user???????????????????????????????????????????????????????????????????????????
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }
}