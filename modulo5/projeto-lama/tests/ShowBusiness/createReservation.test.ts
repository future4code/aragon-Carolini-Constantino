import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ICreateReservationInput } from "../../src/models/Show"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("createReservation bem sucedido", async () => {
        const input: ICreateReservationInput = {
            token: "token-astrodev",
            show_id: "202"
        }

        const response = await showBusiness.createReservation(input)

        expect(response.message).toEqual("Reserva realizada com sucesso!")
    })

    test("deve retornar erro, caso o token seja inválido", async () => {
        expect.assertions(2)

        try {
            const input: ICreateReservationInput = {
                token: "fake-token",
                show_id: "202"
            }

            await showBusiness.createReservation(input)
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
            const input: ICreateReservationInput = {
                token: "fake-token",
                show_id: "203"
            }

            await showBusiness.createReservation(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Show não localizado")
            }
        }
    })

    test("deve retornar erro, caso a reserva já esteja realizada", async () => {
        expect.assertions(2)

        try {
            const input: ICreateReservationInput = {
                token: "fake-token",
                show_id: "202"
            }

            await showBusiness.createReservation(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

})