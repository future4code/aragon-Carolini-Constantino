import { PostBusiness } from "../../src/business/PostBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IDeletePostInputDTO } from "../../src/models/Post"
import { response } from "express"
import { PostDatabase } from "../../src/database/PostDatabase"

describe("Testando PostBusiness", () => {
    const postBussiness = new PostBusiness( 
        new PostDatabaseMock() as PostDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Post deletado", async () => {
            const input: IDeletePostInputDTO = {
                token: "token-mock",
                postId: "id-mock"
            }

            await postBussiness.deletePost(input)

            expect(response).toEqual("Post deletado com sucesso")
    })
})