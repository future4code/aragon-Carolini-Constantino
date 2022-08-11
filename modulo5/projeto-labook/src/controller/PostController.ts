import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInput, IDeletePostInput, IGetPostsInput, IPostDB } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            const input: ICreatePostInput = {
                token: req.headers.authorization,
                content: req.body.content
            }

            await this.postBusiness.createPost(input)

            const response = {
                message: "Post criado com sucesso",
                content: input.content
            }
            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: IGetPostsInput = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }
    
            const posts = await this.postBusiness.getPosts(input)
console.log(posts)
            res.status(201).send(posts)
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }

    public deletePost = async (req: Request, res: Response) => {
        try {
            const input: IDeletePostInput = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }
    
            const posts = await this.postBusiness.deletePost(input)

            res.status(201).send("Post deletado com sucesso")
        } catch (error) {
            res.status(400).send({ message: error.message })

        }
    }

}