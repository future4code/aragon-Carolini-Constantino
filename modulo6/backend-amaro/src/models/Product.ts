export interface IProductDB {
    id: string,
    name: string,
    price: number
}

export interface IProduct {
    id: string,
    name: string,
    price: number,
    tags: string[]
}

export interface ITagsProductsDB {
    id: string,
    product_id: string,
    tag_id: string
}

export interface ITagDB {
    id: string,
    tag: string
}


export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private tags: string[] = []
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price 
    }

    public getTags = () => {
        return this.price 
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setPrice = (newPrice: number) => {
        this.price = newPrice
    }

    public setTags = (newTags: string[]) => {
        this.tags = [...newTags]
    }

}

export interface IGetProductosInputDTO {
    order: string,
    sort:  string,
    limit: string,
    page: string
}

export interface IGetProductosDB {
    order: string,
    sort:  string,
    limit: number,
    page: number,
    offset: number
}

export interface ISearchProductosDB {
    search: string
    order: string,
    sort:  string,
    limit: number,
    page: number,
    offset: number
}
export interface ISearchProductosInputDB {
    busca: string,
    order: string,
    sort:  string,
    limit: string,
    page: string
}

export interface ICreateTagsProdInput {
    id: string,
    product_id: string,
    tag_id: string
}
export interface ICreateProductInput {
    token: string
    name: string,
    tags: string[],
    price: number
}

export interface IDeleteProductoInput {
    token: string,
    idToDelete: string
}


export interface IGetAllProductsOutputDTO {
    message: string
    products: any
}

export interface IAllGetsOutputDTO {
    message: string
    products: any
}

export interface IDeletePostInputDTO {
    token: string,
    idToDelete: string
}