import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IUserDB, User } from "../../src/models/User"


export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string) => {
        switch(email) {
            case "carolini@gmail.com":
                return  {
                    id: "101",
                    name: "Carol",
                    email: "carolini@gmail.com",
                    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
                }  
            default:
                return undefined
        }
    }

    public createUser = async (user: User) => {

    }
}