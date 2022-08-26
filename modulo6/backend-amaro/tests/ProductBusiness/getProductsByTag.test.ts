import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { IdGenerator } from "../../src/services/IdGenerator"
import { Authenticator } from "../../src/services/Authenticator"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGenerator(),
        new Authenticator()
    )

    test("getProductsByTag bem sucedido", async () => {
        const tag = "neutro"

        const response = await productBusiness.searchProduct(tag)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual([
            { product_id: '8371' },
            { product_id: '334c6ccf-9755-4ff1-90b9-b4ab87e71e49' },
            { product_id: '88ce2faa-a575-44c7-92dc-d8fe43b52db9' }
          ])
    })

    test("deve retornar erro, caso não seja enviado nenhuma tag", async () => {
        expect.assertions(2)
        try {
            const tag = ""

            await productBusiness.getProductsByTag(tag)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Seleciona uma tag para buscar produtos")
            }
        }
    })
})