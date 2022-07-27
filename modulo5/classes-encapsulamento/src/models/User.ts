// export type User = {
//     id: string,
//     email: string,
//     password: string
// }


export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string
    ){
        this.id = id,
        this.email = email,
        this.password = password
    }

    getId(){
        return this.id
    }

    setId(newId: string){
        this.id = newId
    }

    getEmail(){
        return this.email
    }

    setEmail(newEmail: string){
        this.email = newEmail
    }

    getPassword(){
        return this.password
    }

    setPassword(newPassword: string){
        this.password = newPassword
    }

}