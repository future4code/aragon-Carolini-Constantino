export interface IStudent = {
    id: string
    name: string
    email: string
    birthdate: Date
    classroomId: string
}

export class Student {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date(),
        private classeroom_id: string,
        private hobbies: string[]
    ){}

}
// export class Product {
//     // private id: string
//     // private name: string
//     // private price: number

//     constructor(
//         private id: string,
//         private name: string,
//         private price: number
//     ) {
//         this.id = id
//         this.name = name
//         this.price = price
//     }

//     public getId() {
//         return this.id
//     }

//     public getName() {
//         return this.name
//     }

//     public getPrice() {
//         return this.price
//     }

//     public setId(newId: string) {
//         this.id = newId
//     }

//     public setName(newName: string) {
//         this.name = newName
//     }

//     public setPrice(newPrice: number) {
//         this.price = newPrice
//     }
// }