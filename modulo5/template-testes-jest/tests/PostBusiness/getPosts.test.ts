import { IGetPostsInputDTO } from "../../src/models/Post"
import { PostBusiness } from "../../src/business/PostBusiness"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { PostDatabase } from "../../src/database/PostDatabase"

describe("Testando PostBusiness", () => {
    const postBussiness = new PostBusiness( 
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )
    
    test("Pegando todos posts",async () => {
        const input: IGetPostsInputDTO = { token: "token-mock"}
    
        const response = await postBussiness.getPosts(input)
    
        expect(response.posts).toEqual([{
            id: "201",
            content: "Olá, sou novo por aqui!",
            user_id: "101"
        },
        {
            id: "202",
            content: "Bom dia, família!",
            user_id: "102"
        },
        {
            id: "203",
            content: "Receba!",
            user_id: "103"
        }])
    })
   
})

