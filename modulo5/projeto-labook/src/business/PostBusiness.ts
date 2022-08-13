import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInput, IDeletePostInput, IDeslikeInput, IGetPostsDB, IGetPostsInput, ILikeInput, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private postDatabase: PostDatabase
    ) { }

    public createPost = async (input: ICreatePostInput) => {
        const { token, content } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido");
        }

        if (!content) {
            throw new Error("Conteúdo do post faltando.");
        }

        if (typeof content !== "string" || content.length < 5) {
            throw new Error("Parâmetro 'content' inválido.");
        }

        const id = this.idGenerator.generate()
        const userId = payload.id
        const likes = 0

        const post = new Post(
            id,
            content,
            userId,
            likes
        )

        const response = await this.postDatabase.createPost(post)

    }

    public getPosts = async (input: IGetPostsInput) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "likes"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido");
        }

        const getPostsInputDB: IGetPostsDB = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const postsDB = await this.postDatabase.getPosts(getPostsInputDB)

        const response = postsDB.map( postDB => {
            const post = new Post(
                postDB.id,
                postDB.content,
                postDB.user_id,
                postDB.likes
            )

            return post
        })

        return response    
    }

    public deletePost = async (input: IDeletePostInput) => {
        const { token, idToDelete } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido");
        }

        if(payload.role !== USER_ROLES.ADMIN){
            if(payload.id !== idToDelete){
                throw new Error("Você só pode excluir posts de sua autoria")                
            }

            await this.postDatabase.deletePost(input.idToDelete)

            const response = {
                message: "Usuário deletado com sucesso"
            }
    
            return response
        }

        await this.postDatabase.deletePost(idToDelete)

        const response = {
            message: "Usuário deletado com sucesso"
        }

        return response
    }

    public likePost = async (input: ILikeInput) => {
        const { token, post_id } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido");
        }

        const isExistPost = await this.postDatabase.findPostById(post_id)

        if (!isExistPost) {
            throw new Error("Post não existe.");
        }

        const userId = payload.id
        const findInput = { post_id, userId}

        const isExistLike = await this.postDatabase.findLike(findInput)

        if (isExistLike) {
            throw new Error("Você já curtiu esta postagem");            
        }

        const user_id = payload.id
        const inputLikePost = { user_id, post_id }
        await this.postDatabase.likePost(inputLikePost)

        const response = {
            message: "Post curtido com sucesso"
        }

        return response
    }

    public dislikePost = async (input: IDeslikeInput) => {
        const { token, post_id } = input
    

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido");
        }

        const isExistPost = await this.postDatabase.findPostById(post_id)

        if (!isExistPost) {
            throw new Error("Post não existe.");
        }

        const userId = payload.id
        const findInput = { post_id, userId}
        const isExistLike = await this.postDatabase.findLike(findInput)
 
        if (!isExistLike) {
            throw new Error("Você não curtiu esta postagem");            
        }

        const user_id = payload.id
        const inputLikePost = { user_id, post_id }
        await this.postDatabase.dislikePost(inputLikePost)
    }
}