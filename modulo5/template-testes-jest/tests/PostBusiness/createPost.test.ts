import { PostBusiness } from "../../src/business/PostBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { ICreatePostInputDTO } from "../../src/models/Post"
import { PostDatabase } from "../../src/database/PostDatabase"

describe("Testando PostBusiness", () => {
    const postBussiness = new PostBusiness( 
        new PostDatabaseMock() as PostDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Post criado", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock",
            content: "Eaeeew!"
        }

        const response = await postBussiness.createPost(input)

        expect(response.message).toEqual("Post criado com sucesso")
        expect(response.post).toEqual([{
            id: "id-mock",
            post_id: "id-mock",
            user_id: "id-mock"
        }])
    })

})