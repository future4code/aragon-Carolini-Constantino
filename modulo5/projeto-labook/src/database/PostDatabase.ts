import { count } from "console"
import { ICreatePostOutput, IDeletePostInput, IGetPostsDB, IGetPostsInput, ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"
import { UserDatabase } from "./UserDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
            likes: post.getLikes()
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public getPosts = async (input: IGetPostsDB) => {
        const {
            search,
            order,
            sort,
            limit,
            offset
        } = input

    const result: IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        .where("content", "LIKE", `%${search}%`)
        .orderBy(order, sort)
        .limit(limit)
        .offset(offset)

        return result
    }

    
    public deletePost = async (input: string) => {
        const idToDelete = input

    await BaseDatabase
    .connection(PostDatabase.TABLE_POSTS)
    .delete()
    .where("id", "LIKE", `${idToDelete}`)
    }
}