import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock() as any,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "carolini@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Login realizado com sucesso")
        expect(response.token).toEqual("token-carol")
    })

    test("deve retornar erro, caso a senha seja inválida", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "carolini@gmail.com",
                password: "bnanainha"
            }

            await userBusiness.login(input)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Password incorreto")
            }
        }
    })

    test("deve retonar erro, caso o email não seja cadastrado", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "carol@gmail.com",
                password: "bananinha"
            }

            await userBusiness.login(input)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Email não cadastrado")
            }
        }
    })

    test("deve retonar erro, caso o email seja inválido", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "carolinivgmail.com",
                password: "bananinha"
            }

            await userBusiness.login(input)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }
        }
    })

})