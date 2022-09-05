import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { BaseError } from "../../src/errors/BaseError"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("searchProduct bem sucedido", async () => {
        const busca = "moletom"

        const response = await productBusiness.searchProduct(busca)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual( [
            {
              "id": "8311",
              "name": "VESTIDO SLIPDRESS CETIM",
              "price": 639,
              "tags": []
            }
          ])
    })

    test("deve retornar erro, caso o campo de busca esteja vazio (undefined)", async () => {
    
        try {
            const busca = ""

            await productBusiness.searchProduct(busca)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Digite na busca qual produto você deseja buscar")
            }
        }
    })
})