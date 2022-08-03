import { Console } from "console"
import { IClassroomDB } from "../models/Classroom"
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async createClassroom(classroom: IClassroomDB){
        const result = await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .insert(classroom)

        return result
    }

    public async getActiveClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
            .where("module", "!=", "0")
        
        return result
    }

    public async updateModuleClassroom(classroomId: string, module: string ) {
        const findClass = await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select()
        .where("id", "=", `${classroomId}`)

        console.log(findClass)
        if(findClass.length === 0){
            throw new Error("Classroom not found!");
        }

        await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .update({ module })
            .where({id: classroomId})
    }
}
