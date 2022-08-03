import { Classroom } from "../models/Classroom"
import { IStudentDB } from "../models/Student"
import { BaseDatabase } from "./BaseDatabase"
import { ClassroomDatabase } from "./ClassroomDatabase"

export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

    public async createStudent(student: IStudentDB){
        await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .insert(student)

    }

    public async getStudentByName(name: string){
        const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()
        .where("name", "=", `${name}`)

        return result
    }

    public async updateClassroomOfStudent(studentId: string, classroom: string ) {
       
        const findStudent = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()
        .where("id", "=", studentId)

        await BaseDatabase
            .connection(StudentDatabase.TABLE_STUDENTS)
            .update({ classroom_id: classroom })
            .where({id: studentId})
    }
  
    public async getAllStudentsByClass(classroom_id: string) {
        const result = await BaseDatabase
            .connection(StudentDatabase.TABLE_STUDENTS)
            .select()
            .where("classroom_id", "=", `${classroom_id}`)
        return result
    }
}
