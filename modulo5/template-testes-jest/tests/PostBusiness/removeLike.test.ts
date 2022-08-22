import { PostBusiness } from "../../src/business/PostBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IRemoveLikeInputDTO } from "../../src/models/Post"
import { PostDatabase } from "../../src/database/PostDatabase"

describe("Testando PostBusiness", () => {
    const postBussiness = new PostBusiness( 
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Like removido", async () => {
        const input: IRemoveLikeInputDTO = {
            token: "token-mock",
            postId: "id-mock"
        }

        const paylod:string = await getTokenPayload(input.token)
        const response = await postBussiness.removeLike(input, paylod.id )

        expect(response.message).toEqual("Like removido com sucesso")
    })

})