import { Request, Response } from "express";
import { StudentDatabase } from "../database/StudentDatabase";
import { IStudentDB } from "../models/Student";

export class StudentController {
    public async createStudent(req: Request, res: Response) {
        let errorCode = 400

        try {
            const { name, email, birthdate, classroomId } = req.body
            
            const student = {
                id: Date.now().toString(),
                name: name,
                email: email,
                birthdate: new Date(birthdate),
                classroom_id: classroomId
            }

            const studentDatabase = new StudentDatabase()
            await studentDatabase.createStudent(student)

            res.status(200).send({ message: "Student successfully add!" })
        } catch (error) {
            res.status(errorCode).send({ error: error.message })
        }
    }

    public async getStudentByName(req: Request, res: Response) {
        let errorCode = 400
        
        try {
            const name = req.params.name
            
            const studentsDatabase = new StudentDatabase
            const result = await studentsDatabase.getStudentByName(name)

            res.status(200).send({ student: result })
        } catch (error) {
            res.status(errorCode).send({ error: error.message })
        }
    }


    public async updateClassroomOfStudent(req: Request, res: Response) {
        let errorCode = 400

        try {
            const studentId = req.params.studentId
            const { classroom } = req.body
            
            const studentDatabase = new StudentDatabase()
            await studentDatabase.updateClassroomOfStudent(studentId, classroom)

            res.status(200).send({ classrooms: "Success!" })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getAllStudentsByClass(req: Request, res: Response) {
        let errorCode = 400

        try {
            let classroom_id = req.params.classroom_id
          
            const studentDatabase = new StudentDatabase()
            const result = await studentDatabase.getAllStudentsByClass(classroom_id)

            res.status(200).send({ students: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}