import { ICreateTagsProdInput, IGetProductosDB, IProductDB, ITagDB, ITagsProductsDB } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"

    public getAllProducts = async (input: IGetProductosDB): Promise <IProductDB[] | undefined> => {
        const {
            order,
            sort,
            limit,
            offset
        } = input

        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)

        return result   
    }

    public getTags = async (idProduct: string) => {
        const id = idProduct

        const result = await BaseDatabase
        .connection.raw(`
        SELECT Amaro_Tags.tag
        FROM Amaro_Tags
        JOIN Amaro_Tags_Products
        ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
        WHERE Amaro_Tags_Products.product_id = ${id};`)
 
        return result[0]
    }
  
    public searchProduct = async (search: string): Promise <IProductDB[] | undefined> => {
        const busca = search 

        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .whereLike("name", `%${busca}%`)
        .orWhereLike("id", `%${busca}`) 

        return result
    }
    
    public getProductsById = async (id: string): Promise <IProductDB | undefined> => {

        const [result] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where("id", "=", `${id}`)

        return result
    } 

    public getProductsByTag = async (tag: string)  => {
   
        const [idTag]: ITagDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select("id")
        .whereLike("tag", `%${tag}%`)
        
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
        .select("product_id")
        .where({tag_id: idTag.id})

        return result 
    }

    public createProduct = async (input: IProductDB) => {
        const {
            id,
            name,
            price
        } = input

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert({
            id, 
            name,
            price
        })
    }

    public createTagsProduct = async (input: ICreateTagsProdInput) => {
        const {
            id,
            product_id,
            tag_id
        } = input
 
        await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
        .insert({
            id,
            product_id,
            tag_id
        })
    }

    public deleteProduct = async (idToDelete: string) => {
        const id = idToDelete

        await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
        .delete()
        .whereLike("product_id", `${id}`)

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .delete()
        .where({ id })
    }
}