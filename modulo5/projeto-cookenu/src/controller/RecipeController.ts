import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public createRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const { title, description } = req.body
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            if (typeof title !== "string" || typeof description !== "string") {
                errorCode = 400
                throw new Error("Os atributos 'title' e 'description' devem ser dotipo string.");
            }

            if (title.length < 3 || description.length < 10) {
                errorCode = 400
                throw new Error("Title deve possuir ao menos 3 caracteres, enquanto description ao menos 10 caracteres");
            }

            const userDatabase = new UserDatabase()
            const isUserExists = await userDatabase.checkIfExistsById(payload.id)

            if (!isUserExists) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const today = new Date()
            const year = today.getFullYear
            const month = String(today.getMonth()).padStart(2, '0')
            const day = String(today.getDate()).padStart(2, '0')
            const currentDate = year + "/" + month + "/" + day

            const creatorId = payload.id
            const recipe = new Recipe(
                id,
                title,
                description,
                new Date(currentDate),
                new Date(currentDate),
                creatorId
            )

            const recipeDatabase = new RecipeDatabase()
            await recipeDatabase.createRecipe(recipe)


            res.status(201).send({
                message: "Receita cadastrada com sucesso",
                recipe
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const { title, description } = req.body
            const idRecipe = req.params.idRecipe

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const isRecipeExists = await recipeDatabase.checkIfExistsRecipe(idRecipe)

            if (typeof title !== "string" || typeof description !== "string") {
                errorCode = 400
                throw new Error("Os atributos 'title' e 'description' devem ser dotipo string.");
            }

            if (title.length < 3 || description.length < 10) {
                errorCode = 400
                throw new Error("Title deve possuir ao menos 3 caracteres, enquanto description ao menos 10 caracteres");
            }

            if (!isRecipeExists) {
                errorCode = 401
                throw new Error("Receita inexistente")
            }

            const recipeDB = await recipeDatabase.findById(idRecipe)

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== recipeDB.creator_id) {
                    throw new Error("Não é possível editar receita de outro usuário")
                } else {
                    const recipeDB = await recipeDatabase.findById(idRecipe)
                    const recipe = new Recipe(
                        recipeDB.id,
                        recipeDB.title,
                        recipeDB.description,
                        recipeDB.created_at,
                        recipeDB.updated_at,
                        recipeDB.creator_id
                    )

                    title && recipe.setTitle(title)
                    description && recipe.setDescription(description)

                    await recipeDatabase.editRecipe(recipe)

                    return res.status(201).send({
                        message: "Edição realizada com sucesso",
                        recipe
                    })
                }
            }

            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                recipeDB.updated_at,
                recipeDB.creator_id
            )

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)

            await recipeDatabase.editRecipe(recipe)

            res.status(201).send({
                message: "Edição realizada com sucesso",
                recipe
            })
        } catch (error) {
            if (
                typeof error.message === "string"
                && error.message.includes("Duplicate entry")
            ) {
                return res.status(400).send("Email already taken")
            }
            res.status(errorCode).send({ message: error.message })
        }
    }
    
    public deleteRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const idRecipe = req.params.idRecipe
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const isRecipeExists = await recipeDatabase.checkIfExistsRecipe(idRecipe)

            if (!isRecipeExists) {
                errorCode = 401
                throw new Error("Receita inexistente")
            }

            const recipeDB = await recipeDatabase.findById(idRecipe)

            if (payload.role === USER_ROLES.NORMAL) {

                if (payload.id !== recipeDB.creator_id) {
                    throw new Error("Não é possível deletar receita de outro usuário")
                } else {
                    const recipeDatabase = new RecipeDatabase()
                    await recipeDatabase.deleteRecipe(idRecipe)
                }
            }
 
            await recipeDatabase.deleteRecipe(idRecipe)

            res.status(200).send("Recipe deletada com sucesso!")
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public getRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const recipe = req.query.recipe as string
            const sort = req.query.sort as string || "updated_at"
            const order = req.query.order as string || "asc"
            const limit = Number(req.query.limit) 
            const page = Number(req.query.page)
            const offset = limit * (page - 1)

            const authenticator = new Authenticator
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

             const recipeDatabase = new RecipeDatabase()

            if (!recipe){
               const recipeDB = await recipeDatabase.getAllRecipes(sort, order, limit, offset)
                 res.status(200).send({ recipeDB })
            }

            const recipeDB = await recipeDatabase.getAllRecipes(sort, order, limit, offset, recipe)
            
            res.status(200).send({ recipeDB })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}