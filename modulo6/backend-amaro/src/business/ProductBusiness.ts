import { ProductDatabase } from "../database/ProductDatabase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { IAllGetsOutputDTO, ICreateProductInput, IDeleteProductoInput, IGetAllProductsOutputDTO, IGetProductosDB, IGetProductosInputDTO, IProductDB, ITagsProductsDB, Product } from "../models/Product";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public getAllProducts = async (input: IGetProductosInputDTO): Promise<IGetAllProductsOutputDTO> => {
        const order = input.order || "price"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getProductsInput: IGetProductosDB = {
            order,
            sort,
            limit,
            page,
            offset
        }

        const productsDB: IProductDB[] = await this.productDatabase.getAllProducts(getProductsInput)

        const products = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name,
                productDB.price

            )
        })

        for (let product of products) {
            const id = product.getId()
            const tags: string[] = []
            const tagsDB: any = await this.productDatabase.getTags(id)
 
            for (let tag of tagsDB) {
                tags.push(tag.tag)
            }
            product.setTags(tags)
        }

        const response: IGetAllProductsOutputDTO = {
            message: "Requisição realizada com sucesso!",
            products
        }

        return response
    }

    public searchProduct = async (busca: string | undefined) => {
        const search = busca

        if (!search) {
            throw new RequestError("Digite na busca qual produto você deseja buscar");
        }

        const searchUp = busca.toUpperCase()
        const productsDB = await this.productDatabase.searchProduct(searchUp)

        const products: any = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name,
                productDB.price
            )
        })

        const response: IAllGetsOutputDTO = {
            message: "Requisição realizada com sucesso!",
            products
        }

        return response
    }

    public getProductsByTag = async (tag: string) => {

        if (!tag) {
            throw new RequestError("Seleciona uma tag para buscar produtos");
        }

        const idsProductsDB = await this.productDatabase.getProductsByTag(tag)

        const res = []
        for (let id of idsProductsDB) {

            const productDB = await this.productDatabase.getProductsById(id.product_id)

            res.push(productDB)

        }

        const response: IAllGetsOutputDTO = {
            message: "Requisição realizada com sucesso!",
            products: res
        }

        return response
    }

    public createProduct = async (input: ICreateProductInput) => {
        const {
            token,
            name,
            tags,
            price
        } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new RequestError("Não autenticado");
        }

        if (payload.role === USER_ROLES.CLIENT) {
            throw new UnauthorizedError("Você não tem permissão para criar um novo anúncio")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string")
        }

        const isExistProduct = await this.productDatabase.searchProduct(name)

        if (!isExistProduct) {
            throw new ConflictError("O produto já existe!");
        }

        if (typeof price !== "number") {
            throw new RequestError("Parâmetro 'price' inválido: deve ser um number")
        }

        if (name.length < 2) {
            throw new RequestError("Parâmetro 'name' inválido: deve ter no mínimo 2 letras")
        }

        const idProduct = this.idGenerator.generate()

        const newProduct = {
            id: idProduct,
            name,
            price
        }

        await this.productDatabase.createProduct(newProduct)

        for (let tagId of tags) {
            const inputTags: ITagsProductsDB = {
                id: this.idGenerator.generate(),
                product_id: idProduct,
                tag_id: tagId
            }

            await this.productDatabase.createTagsProduct(inputTags)
        }

        const product = await this.productDatabase.getProductsById(idProduct)

        const response = {
            message: "Produto criado com sucesso!"
        }

        return response
    }

    public deleteProduct = async (input: IDeleteProductoInput) => {
        const { token, idToDelete } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new RequestError("Não autenticado");
        }

        if (payload.role === USER_ROLES.CLIENT) {
            throw new UnauthorizedError("Você não possui autorização para excluir produto")
        }

        const isExistProduct = await this.productDatabase.getProductsById(idToDelete)

        if (!isExistProduct) {
            throw new NotFoundError("Produto não encontrado");
        }

        await this.productDatabase.deleteProduct(idToDelete)

        const response = {
            message: "Produto deletado com sucesso"
        }

        return response
    }
}