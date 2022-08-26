import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { IdGenerator } from "../../src/services/IdGenerator"
import { Authenticator } from "../../src/services/Authenticator"
import { ICreateProductInput, IGetProductosInputDTO } from "../../src/models/Product"
import { BaseError } from "../../src/errors/BaseError"
import { response } from "express"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGenerator(),
        new Authenticator()
    )

    test("createProduct bem sucedido", async () => {
        const input = {
            token: "token-carol",
            name: "Jaqueta de Couro",
            tags: ["101"],
            price: 380
        }

       const response =  await productBusiness.createProduct(input)

        expect(response.message).toEqual("Produto criado com sucesso!")
    })

    test("deve retornar erro, caso o usuário não esteja autenticado", async () => {
        expect.assertions(2)
        try {
            const input: ICreateProductInput = {
                token: "fake-token",
                name: "Jaqueta de Couro",
                tags: ["101"],
                price: 380
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
            expect(error.message).toEqual("Não autenticado")
        }
    })

    test("deve retornar erro, caso o usuário seja cliente e não admin", async () => {
        expect.assertions(2)
        try {
            const input: ICreateProductInput = {
                token: "token-mock",
                name: "Jaqueta de Couro",
                tags: ["101"],
                price: 380
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
            expect(error.message).toEqual("Você não tem permissão para criar um novo anúncio")
        }
    })

    test("deve retornar erro, caso o produto já exista", async () => {
        expect.assertions(2)
        try {
            const input = {
                token: "token-carol",
                name: "VESTIDO MOLETOM COM CAPUZ",
                tags: ["101"],
                price: 380
            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(409)
            expect(error.message).toEqual("O produto já existe!")
        }
    })

    test("deve retornar erro, caso o `price´ não seja number", async () => {
        expect.assertions(2)
        try {
            const input = {
                token: "token-carol",
                name: "Jaqueta de Couro",
                tags: ["101"],
                price: "380"
            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'price' inválido: deve ser um number")
        }
    })

    test("deve retornar erro, caso o `name´ não seja string", async () => {
        expect.assertions(2)
        try {
            const input = {
                token: "token-carol",
                name: 1234,
                tags: ["101"],
                price: 380
            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
        }
    })

    test("deve retornar erro, caso o `name´ não seja string", async () => {
        expect.assertions(2)
        try {
            const input = {
                token: "token-carol",
                name: "O",
                tags: ["101"],
                price: 380
            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'name' inválido: deve ter no mínimo 2 letras")
        }
    })
})