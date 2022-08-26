import { IProduct, IProductDB, ICreateTagsProdInput } from "../../src/models/Product";
import { BaseDatabase } from "../../src/database/BaseDatabase";

export class ProductDatabaseMock extends BaseDatabase {
    public getAllProducts = async (): Promise<IProduct[]> => {
        return [
            {
                "id": "8311",
                "name": "VESTIDO SLIPDRESS CETIM",
                "price": 639
            },
            {
                "id": "8110",
                "name": "VESTIDO CUT OUT TRICOT",
                "price": 586
            },
            {
                "id": "8363",
                "name": "VESTIDO CURTO MANGA LONGA LUREX",
                "price": 522
            },
            {
                "id": "8314",
                "name": "VESTIDO PLISSADO ACINTURADO",
                "price": 500
            },
            {
                "id": "7533",
                "name": "VESTIDO COTTON DOUBLE",
                "price": 491
            },
            {
                "id": "8109",
                "name": "VESTIDO BABADOS HORIZONTAIS",
                "price": 425
            },
            {
                "id": "8119",
                "name": "VESTIDO BABADOS KNIT",
                "price": 386
            },
            {
                "id": "8104",
                "name": "VESTIDO BABADO TURTLENECK",
                "price": 386
            },
            {
                "id": "8367",
                "name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
                "price": 359
            },
            {
                "id": "8301",
                "name": "VESTIDO LONGO CREPE MANGA COMPRIDA",
                "price": 321
            }
        ] as IProduct[]
    }

    public getTags = async (idProduct: string) => {
    switch (idProduct) {
        case "8311":
            return [
                { tag: 'balada' },
                { tag: 'metal' },
                { tag: 'boho' },
                { tag: 'descolado' },
                { tag: 'passeio' }
            ]
            case "8310":
                return []
                default:
                    return undefined
    }
}
  
    public searchProduct = async (search: string): Promise<IProductDB[] | undefined> => {
    switch(search){
        case "moletom":
            return [
                {
                  "id": "8309",
                  "name": "VESTIDO MOLETOM COM CAPUZ",
                  "price": 180
                },
                {
                  "id": "8367",
                  "name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
                  "price": 359
                }
              ]
              case "8311":
                return [
                    {
                      "id": "8311",
                      "name": "VESTIDO SLIPDRESS CETIM",
                      "price": 639
                    }
                  ]
                  case "VESTIDO MOLETOM COM CAPUZ":
                    return [
                        {
                          "id": "8309",
                          "name": "VESTIDO MOLETOM COM CAPUZ",
                          "price": 180
                        }]
                default:
                    return undefined
            
    }
}
    
    public getProductsById = async (id: string): Promise<IProductDB | undefined> => {
        switch(id){
            case "8311":
                return {
                      "id": "8311",
                      "name": "VESTIDO SLIPDRESS CETIM",
                      "price": 639
                    }
                    case "8110":
                    return {
                        "id": "8110",
                        "name": "VESTIDO CUT OUT TRICOT",
                        "price": 586
                      }
                      default:
                    return undefined
        }
} 

    public getProductsByTag = async (tag: string) => {
        switch(tag){
            case "neutro":
                return [
                    { product_id: '8371' },
                    { product_id: '334c6ccf-9755-4ff1-90b9-b4ab87e71e49' },
                    { product_id: '88ce2faa-a575-44c7-92dc-d8fe43b52db9' }
                  ]
        }
}

    public createProduct = async (input: IProductDB) => {
    
}

    public createTagsProduct = async (input: ICreateTagsProdInput) => {
    
}

    public deleteProduct = async (idToDelete: string) => {

}
}