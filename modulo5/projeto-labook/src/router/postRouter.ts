import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'


export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new Authenticator(),
        new PostDatabase()
    )
)

postRouter.post("", postController.createPost)
postRouter.get("", postController.getPosts)
postRouter.delete("/:id", postController.deletePost)
postRouter.put("/likes", postController.likePost)
postRouter.delete("", postController.dislikePost)
