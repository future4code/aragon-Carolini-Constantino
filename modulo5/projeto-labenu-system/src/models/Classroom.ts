export enum MODULE {
    1 = "1",
    2 = "2",
    3 = "3",
    4 = "4",
    5 = "5",
    6 = "6"
}

export interface IClassroomDB {
    id: string,
    name: string,
    module: MODULE
}

export  class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: MODULE,
       ) {}   
}


// export class User {
//     constructor(
//         private id: string,
//         private email: string,
//         private password: string
//     ) {
//         this.id = id
//         this.email = email
//         this.password = password
//     }

//     public getId() {
//         return this.id
//     }

//     public getEmail() {
//         return this.email
//     }

//     public getPassword() {
//         return this.password
//     }

//     public setId(newId: string) {
//         this.id = newId
//     }

//     public setEmail(newEmail: string) {
//         this.email = newEmail
//     }

//     public setPassword(newPassword: string) {
//         this.password = newPassword
//     }
// }