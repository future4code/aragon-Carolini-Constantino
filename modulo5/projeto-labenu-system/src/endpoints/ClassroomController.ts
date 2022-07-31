import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { IClassroomDB } from "../models/Classroom";

export class ClassroomController {

    public async createClassroom(req: Request, res: Response) {
        let errorCode = 400

        try {
            const { name, module } = req.body
            
            const classromm: IClassroomDB = {
                id: Date.now().toString(),
                name: name,
                module: module
            }

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.createClassroom(classromm)

            res.status(200).send({ message: "Classroom successfully created!" })
        } catch (error) {
            res.status(errorCode).send({ error: error.message })
        }
    }

    public async getActiveClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getActiveClassrooms()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async updateModuleClassroom(req: Request, res: Response) {
        let errorCode = 400

        try {
            const classroomId = req.params.classroomId
            const { module } = req.body

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.updateModuleClassroom(classroomId, module)

            res.status(200).send({ message: "Success!" })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

}