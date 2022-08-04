import { Router } from 'express'
import { RecipeController } from '../controller/RecipeController'
import { UserController } from '../controller/UserController'

export const recipeRouter = Router()

const userController = new UserController()

const recipeController = new RecipeController()

recipeRouter.get("/", recipeController.getAllRecipes)

recipeRouter.post("/", recipeController.createRecipe)

recipeRouter.put("/:idRecipe", recipeController.editRecipe)

recipeRouter.delete("/:idRecipe", recipeController.deleteRecipe)

recipeRouter.get("", recipeController.getRecipe)

recipeRouter.delete("/", userController.deleteUser)