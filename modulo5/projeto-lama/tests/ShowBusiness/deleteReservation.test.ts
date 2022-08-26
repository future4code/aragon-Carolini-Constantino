import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ICreateShowInput, IDeleteReservationInput } from "../../src/models/Show"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("deleteReservation bem sucedido", async () => {
        const input: IDeleteReservationInput = {
            token: "token-astrodev",
            show_id: "201"
        }

        const response = await showBusiness.deleteReservation(input)

        expect(response.message).toEqual("Reserva deletada com sucesso!")
    })

    test("deve retornar erro, caso o token seja inválido", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteReservationInput = {
                token: "fake-token",
                show_id: "201"
            }

            await showBusiness.deleteReservation(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar erro, caso o show não exista", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteReservationInput = {
                token: "token-astrodev",
                show_id: "221"
            }

            await showBusiness.deleteReservation(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Show não localizado")
            }
        }
    })

    test("deve retornar erro, caso a reserva não exista", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteReservationInput = {
                token: "token-astrodev",
                show_id: "203"
            }

            await showBusiness.deleteReservation(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Reserva não existente")
            }
        }
    })

    
    test("deve retornar erro, caso a reserva não seja do próprio usuário", async () => {
        expect.assertions(2)

        try {
            const input: IDeleteReservationInput = {
                token: "token-mock",
                show_id: "202"
            }

            await showBusiness.deleteReservation(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não é possível deletar reserva de outro usuário")
            }
        }
    })
})