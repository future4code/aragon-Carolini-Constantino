import { PostBusiness } from "../../src/business/PostBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IAddLikeInputDTO, IDeletePostInputDTO, IRemoveLikeInputDTO } from "../../src/models/Post"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("dislike bem sucedido", async () => {
        const input: IRemoveLikeInputDTO = {
            token: "token-astrodev",
            postId: "201"
        }

        const response = await postBusiness.removeLike(input)

        expect(response.message).toEqual("Like removido com sucesso")
    })

    test("deve retornar erro, caso o token seja inválido", async () => {
        expect.assertions(2)
        try {
            const input: IDeletePostInputDTO = {
                token: "fake-token",
                postId: "201"
            }
            
            await postBusiness.removeLike(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")
            }
        }
    })

    test("deve retornar erro, caso o post não exista", async () => {
        expect.assertions(2)
        try {
            const input: IDeletePostInputDTO = {
                token: "token-astrodev",
                postId: "199"
            }
            
            await postBusiness.removeLike(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Post não encontrado")
            }
        }
    })

    test("deve retornar erro, caso o usuário ainda não curtiu o post", async () => {
        expect.assertions(2)
        try {
            const input: IRemoveLikeInputDTO = {
                token: "token-mock",
                postId: "201"
            }
            
            await postBusiness.removeLike(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Ainda não deu like")
            }
        }
    })

})