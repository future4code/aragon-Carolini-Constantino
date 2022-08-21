import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ICreateShowInput } from "../../src/models/Show"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("createShow bem sucedido", async () => {
        const input: ICreateShowInput = {
            token: "token-astrodev",
            band: "band-mock",
            starts_at: "2022/12/06"
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toEqual("Show criado com sucesso")
    })

    test("deve retornar erro, caso o token seja inválido", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInput = {
                token: "fake-token",
                band: "band-mock",
                starts_at: "2022/12/06"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    // test("deve retornar erro, caso o usuário não seja admin", async () => {
    //     expect.assertions(2)

    //     try {
    //         const input: ICreateShowInput = {
    //             token: "normal-token",
    //             band: "band-mock",
    //             starts_at: "2022/12/06"
    //         }

    //         await showBusiness.createShow(input)
    //     } catch (error: unknown) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toEqual(403)
    //             expect(error.message).toEqual("Usuário cadastrado, mas sem permissão")
    //         }
    //     }
    // })

    test("deve retornar erro, caso a data inferior ao início do evento", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInput = {
                token: "token-astrodev",
                band: "band-mock",
                starts_at: "2022/12/04"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Data inferior ao início do evento")
            }
        }
    })

    test("deve retornar erro, caso a data seja superior ao limite do evento", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInput = {
                token: "token-astrodev",
                band: "band-mock",
                starts_at: "2022/12/12"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Data superior ao limite do evento")
            }
        }
    })

    test("deve retornar erro, caso o show já exista", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInput = {
                token: "token-astrodev",
                band: "band-mock",
                starts_at: "2022/12/05"
            }

            await showBusiness.createShow(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("O show já existe")
            }
        }
    })
})