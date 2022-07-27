// export type Product = {
//     id: string,
//     name: string,
//     price: number
// }

export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number
    ){
        this.id = id,
        this.name = name,
        this.price = price
    }

    getId(){
        return this.id
    }

    setId(newId: string){
        this.id = newId
    }

    getName(){
        return this.name
    }

    setName(newName: string){
        this.name = newName
    }

    getPrice(){
        return this.price
    }

    setPrice(newPrice: number){
        this.price = newPrice
    }
}