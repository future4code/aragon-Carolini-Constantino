import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ICreatePostInputDTO } from "../../src/models/Post"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("createPost bem sucedido", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-astrodev",
            content: "Oi mundo!"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toEqual("Post criado com sucesso")
        expect(response.post.getId()).toEqual("id-mock")
        expect(response.post.getContent()).toEqual("Oi mundo!")
        expect(response.post.getUserId()).toEqual("101")
    })

    test("deve retornar erro, caso o usuário não esteja autenticado", async () => {
        expect.assertions(2)
        try {
            const input: ICreatePostInputDTO = {
                token: "fake-token",
                content: "Eaeeeeeeeew!"
            }

            await postBusiness.createPost(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
            expect(error.message).toEqual("Não autenticado")
        }
    })

    test("deve retornar erro, caso o `content´ não seja string", async () => {
        expect.assertions(2)
        try {
            const input = {
                token: "token-mock",
                content: 1234
            } as unknown as ICreatePostInputDTO

            await postBusiness.createPost(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'content' inválido")
        }
    })

    test("deve retornar erro, caso ´content´ não tenha nenhum caracter", async () => {
        expect.assertions(2)
        try {
            const input: ICreatePostInputDTO = {
                token: "token-mock",
                content: ""
            }

            await postBusiness.createPost(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }
    })
})