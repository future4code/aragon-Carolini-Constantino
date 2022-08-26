import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { IdGenerator } from "../../src/services/IdGenerator"
import { Authenticator } from "../../src/services/Authenticator"
import { IGetProductosInputDTO } from "../../src/models/Product"

describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGenerator(),
        new Authenticator()
    )

    test("login bem sucedido", async () => {
        const input: IGetProductosInputDTO = {
            order: "price",
            sort: "ASC",
            limit: "10",
            page: "1"
        }

        const response = await productBusiness.getAllProducts(input)

        expect(response.message).toEqual("Requisição realizada com sucesso!")
        expect(response.products).toEqual([
            {
                "id": "8311",
                "name": "VESTIDO SLIPDRESS CETIM",
                "price": 639
            },
            {
                "id": "8110",
                "name": "VESTIDO CUT OUT TRICOT",
                "price": 586
            },
            {
                "id": "8363",
                "name": "VESTIDO CURTO MANGA LONGA LUREX",
                "price": 522
            },
            {
                "id": "8314",
                "name": "VESTIDO PLISSADO ACINTURADO",
                "price": 500
            },
            {
                "id": "7533",
                "name": "VESTIDO COTTON DOUBLE",
                "price": 491
            },
            {
                "id": "8109",
                "name": "VESTIDO BABADOS HORIZONTAIS",
                "price": 425
            },
            {
                "id": "8119",
                "name": "VESTIDO BABADOS KNIT",
                "price": 386
            },
            {
                "id": "8104",
                "name": "VESTIDO BABADO TURTLENECK",
                "price": 386
            },
            {
                "id": "8367",
                "name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
                "price": 359
            },
            {
                "id": "8301",
                "name": "VESTIDO LONGO CREPE MANGA COMPRIDA",
                "price": 321
            }
        ])
    })
})