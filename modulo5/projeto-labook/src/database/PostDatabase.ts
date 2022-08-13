import { IFindInputDB, IGetPostsDB, ILikePostDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

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

    
    public findPostById = async (id: string) => {
        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        .where("id", "LIKE", `%${id}%`)

        return result
    }
    
    public deletePost = async (input: string) => {
        const idToDelete = input

    await BaseDatabase
    .connection(PostDatabase.TABLE_POSTS)
    .delete()
    .where("id", "LIKE", `${idToDelete}`)
    }

    public findLike = async (input: IFindInputDB) => {
        const { post_id, userId }= input

        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .select()
        .where({post_id: post_id, user_id: userId})

        return result[0]
    }

    public likePost = async(input: ILikePostDB) => {
        const { post_id, user_id } = input 
        const likeDB: ILikePostDB = {
            post_id,
            user_id
        }

        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .insert(likeDB);

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .increment("likes", 1)
        .where("id", "LIKE", `${post_id}`);
    }

    public dislikePost = async(input: ILikePostDB) => {
        const dislikeDB: ILikePostDB = {
            post_id: input.post_id,
            user_id: input.user_id
        }

        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where({ post_id: dislikeDB.post_id, user_id: dislikeDB.user_id });

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .decrement("likes", 1)
        .where("id", "=", `${dislikeDB.post_id}`);
    }
}