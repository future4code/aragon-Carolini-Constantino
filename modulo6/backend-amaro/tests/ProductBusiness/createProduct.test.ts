import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { ICreateProductInput} from "../../src/models/Product"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"


describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("createProduct bem sucedido", async () => {
        const input: ICreateProductInput = {
            token: "token-carol",
            name: "Jaqueta de Couro",
            price: 380,
            tags: ["101"]
        }

       const response =  await productBusiness.createProduct(input)

        expect(response.message).toEqual("Produto criado com sucesso!")
    })

    test("deve retornar erro, caso o usuário não esteja autenticado", async () => {

        try {
            const input: ICreateProductInput = {
                token: "token-mock",
                name: "Jaqueta de Couro",
                price: 380,
                tags: ["101"]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Não autenticado")
        }
    })

    test("deve retornar erro, caso o usuário seja cliente e não admin", async () => {

        try {
            const input: ICreateProductInput = {
                token: "token-alice",
                name: "Jaqueta de Couro",
                price: 380,
                tags: ["101"]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
            expect(error.message).toEqual("Não autenticado")
        }
    })

    test("deve retornar erro, caso o produto já exista", async () => {

        try {
            const input = {
                token: "token-carol",
                name: "VESTIDO MOLETOM COM CAPUZ",
                price: 380,
                tags: ["101"]
            }  

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(409)
            expect(error.message).toEqual("O produto já existe!")
        }
    })

    test("deve retornar erro, caso o `price´ não seja number", async () => {

        try {
            const input = {
                token: "token-carol",
                name: "Jaqueta de Couro",
                price: "380",
                tags: ["101"]

            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'price' inválido: deve ser um number")
        }
    })

    test("deve retornar erro, caso o `name´ não seja string", async () => {

        try {
            const input = {
                token: "token-carol",
                name: 1234,
                price: 380,
                tags: ["101"]

            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
        }
    })

    test("deve retornar erro, caso o `name´ não seja string", async () => {

        try {
            const input = {
                token: "token-carol",
                name: "O",
                price: 380,
                tags: ["101"]
            } as unknown as ICreateProductInput

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
            expect(error.message).toEqual("Parâmetro 'name' inválido: deve ter no mínimo 2 letras")
        }
    })

    test(`retorna erro caso o name tenha menos que 3 caracteres`, async () => {
        try {
            const input = {
                token: "token-carol",
                name: "Ca",
                price: 380,
                tags: ["115"]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'name' inválido: deve ter no mínimo 2 letras")
        }
    })
})