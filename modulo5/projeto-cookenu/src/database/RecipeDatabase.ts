import { describe } from "node:test";
import { IRecipeDB, Recipe } from "../models/Recipe";
import { IUserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public getAllRecipes = async (sort: string, order: string, limit: number, offset: number, recipe?: string) => {
        console.log(recipe)
        if(recipe){
            const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where("title", "LIKE", `%${recipe}%`)
            .orderBy(sort, order)
            .limit(limit)
            .offset(offset)

            return result
        }else{
            const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .orderBy(sort, order)
            .limit(limit)
            .offset(offset)

        return result
        }
        
    }

    public createRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId()
        }
        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .insert(recipeDB)
    }

    public checkIfExistsRecipe = async (id: string) => {
        const result: IUserDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })
        
        return result[0] ? true : false
    }
    
    public findById = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })

        return result[0]
    }

    public editRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId()
        }
        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .update(recipeDB)
            .where({ id: recipeDB.id })
    }

    public deleteRecipe = async (idRecipe: string) => {
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .delete()
        .where({ id: idRecipe })
    }

    public getByTitle = async (recipe: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where( "title", "LIKE", `%${recipe}%` )

        return result[0]
    }

    public findAllRecipeOfCreator = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .select()
        .where({creator_id: id})

        return result[0]? true : false
    }

    public deleteAllRecipeOfCreator = async (idUser: string) => {
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .delete()
        .where({creator_id: idUser})
    }
}