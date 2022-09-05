import { ProductBusiness } from "../../src/business/ProductBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IDeletePostInputDTO } from "../../src/models/Product"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("deleteProduct bem sucedido", async () => {
            const input: IDeletePostInputDTO = {
                token: "token-carol",
                idToDelete: "8311"
            }

            const response = await productBusiness.deleteProduct(input)

            expect(response.message).toEqual("Produto deletado com sucesso")
    })


    test("deve retornar erro, caso o token seja inválido", async () => {

        try {
            const input: IDeletePostInputDTO = {
                token: "fake-token",
                idToDelete: "8311"
            }
            
            const response = await productBusiness.deleteProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar erro, caso o usuário seja cliente", async () => {
  
        try {
            const input: IDeletePostInputDTO = {
                token: "token-mock",
                idToDelete: "8311"
            }
            
            const response = await productBusiness.deleteProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Você não possui autorização para excluir produto")
            }
        }
    })

    test("deve retornar erro, caso o produto não exista", async () => {

        try {
            const input: IDeletePostInputDTO = {
                token: "token-carol",
                idToDelete: ""
            }
            
            const response = await productBusiness.deleteProduct(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Produto não encontrado")
            }
        }
    })
})