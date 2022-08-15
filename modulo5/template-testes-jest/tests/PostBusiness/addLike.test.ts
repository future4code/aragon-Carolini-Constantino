import { PostBusiness } from "../../src/business/PostBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IAddLikeInputDTO } from "../../src/models/Post"
import { PostDatabase } from "../../src/database/PostDatabase"

describe("Testando PostBusiness", () => {
    const postBussiness = new PostBusiness( 
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Like adicionado", async () => {
        const input: IAddLikeInputDTO = {
            token: "token-mock",
            postId: "id-mock"
        }

        const response = await postBussiness.addLike(input)

        expect(response.message).toEqual("Like realizado com sucesso")
    })

})