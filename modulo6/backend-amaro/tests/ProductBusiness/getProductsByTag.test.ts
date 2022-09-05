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

    test("getProductsByTag bem sucedido", async () => {
        const tag = "neutro"

        const response = await productBusiness.searchProduct(tag)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual([
            {
              "id": "8371",
              "name": "VESTIDO TRICOT CHEVRON",
              "price": 296
            },
            {
              "id": "8311",
              "name": "VESTIDO SLIPDRESS CETIM",
              "price": 639
            },
            {
              "id": "7441ec2d-9a01-4e7e-82ed-c55a39bfc9ae",
              "name": "SHORT",
              "price": 150
            }
          ])
    })

    test("deve retornar erro, caso não seja enviado nenhuma tag", async () => {

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