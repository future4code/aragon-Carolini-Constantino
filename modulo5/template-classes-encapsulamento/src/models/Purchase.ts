// type para tipar no typescript com camelCase
// export type Purchase = {
//     id: string,
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
// }

export class Purchase {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity: number,
        private totalPrice: number
    ){
        this.userId = userId,
        this.productId = productId,
        this.quantity = quantity,
        this.totalPrice = totalPrice
    }

    getId(){
        return this.id
    }

    setId(newId: string){
        this.id = newId
    }

    getUserId(){
        return this.userId
    }

    setUserId(newUserId: string){
        this.userId = newUserId
    }

    getProductId(){
        return this.productId
    }

    setProductId(newProductId: string){
        this.id = newProductId
    }

    getQuantity(){
        return this.quantity
    }

    setQuantity(newQuantity: number){
        this.quantity = newQuantity
    }

    getTotalPrice(){
        return this.totalPrice
    }

    setTotalPrice(newTotalPrice: number){
        this.totalPrice = newTotalPrice
    }
}

// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}