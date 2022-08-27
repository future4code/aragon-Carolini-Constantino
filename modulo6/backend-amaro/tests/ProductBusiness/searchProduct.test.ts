import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { IdGenerator } from "../../src/services/IdGenerator"
import { Authenticator } from "../../src/services/Authenticator"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new IdGenerator(),
        new Authenticator()
    )

    test("searchProduct bem sucedido", async () => {
        const busca = "moletom"

        const response = await productBusiness.searchProduct(busca)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual([
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
          ])
    })

    test("deve retornar erro, caso o campo de busca esteja vazio (undefined)", async () => {
        expect.assertions(2)
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