import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IGetProductosInputDTO } from "../models/Product";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public getProducts = async (req: Request, res: Response) => {
        try {
            const input: IGetProductosInputDTO = {
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.productBusiness.getAllProducts(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Unexpected error fetching products" })
        }
    }

    public searchProduct = async (req: Request, res: Response) => {
        try {
            const busca = req.query.q as string || undefined

            const response = await this.productBusiness.searchProduct(busca)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error fetching products" })
        }
    }

    public getProductsByTag = async (req: Request, res: Response) => {
        try {
            const tag = req.params.tag as string
            
            const response = await this.productBusiness.getProductsByTag(tag)

            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error fetching products" })
        }
    }

    public createProduct = async (req: Request, res: Response) => {
        try {
            const input = {
                token: req.headers.authorization,
                name: req.body.name,
                tags: req.body.tags,
                price: req.body.price
            }

            const response = await this.productBusiness.createProduct(input)

            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error creating products" })
        }
    }

    public deleteProduct = async (req: Request, res: Response) => {
        try {
            const input = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.productBusiness.deleteProduct(input)

            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Unexpected error deleting products" })
        }
    }
}