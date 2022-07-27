import { BaseDatabase } from "./BaseDatabase";
import { classrooms, students, hobbies } from "./data";
import { ClassroomDatabase } from "./ClassroomDatabase";
import { StudentDatabase } from "./StudentDatabase";
import { HobbyDatabase } from "./HobbyDatabase";


class Migrations extends BaseDatabase {
    protected TABLE_NAME = ""

    public async execute() {
        try {
            await this.createTables()
            console.log("Tables created successfully")
            await this.insertData()
            console.log("Tables populated successfully")
        } catch (error) {
            console.log(error.sql || error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Migrations completed.")
        }
    }

    private async createTables() {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS 
            ${TABLE_STUDENTS_HOBBIES}
            ${HobbyDatabase.TABLE_HOBBIES},
            ${StudentDatabase.TABLE_STUDENTS},
            ${ClassroomDatabase.TABLE_CLASSROOMS};
        
        CREATE TABLE IF NOT EXISTS ${ClassroomDatabase.TABLE_CLASSROOMS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            module VARCHAR(255)
        );
        
        CREATE TABLE IF NOT EXISTS ${StudentDatabase.TABLE_STUDENTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            birthdate VARCHAR(255) NOT NULL,
            classroom_id VARCHAR(255),
            FOREIGN KEY (classroom_id) REFERENCES  ${ClassroomDatabase.TABLE_CLASSROOMS}(id)
        );
        
        CREATE TABLE IF NOT EXISTS ${HobbyDatabase.TABLE_HOBBIES}(
            id VARCHAR(255) PRIMARY KEY,
            TITLE VARCHAR(255) UNIQUE
        );

        CREATE TABLE IF NOT EXISTS Studentes_Hobbies(
            student_id VARCHAR(255),
            hobby_id VARCHAR(255),
            FOREIGN KEY (student_id) REFERENCES ${StudentDatabase.TABLE_STUDENTS}(id),
            FOREIGN KEY (hobby_id) REFERENCES ${HobbyDatabase.TABLE_HOBBIES}(id),
        );
        `)
    } 

    private async insertData() {
        await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .insert(classrooms)

        await BaseDatabase
            .connection(StudentDatabase.TABLE_STUDENTS)
            .insert(students)

        await BaseDatabase
            .connection(HobbyDatabase.TABLE_HOBBIES)
            .insert(hobbies)
    }
}

const migrations = new Migrations()
migrations.execute()