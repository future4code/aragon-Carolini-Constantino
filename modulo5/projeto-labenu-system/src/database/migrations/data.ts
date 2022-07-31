import { IClassroomDB } from "../../models/Classroom"
import { IHobbiesDB, IStudentDB, IStudentsHobbiesDB } from "../../models/Student"

export const classrooms: IClassroomDB[] = [
    {
        id: "101",
        name: "Sirius",
        module: "5"
    },
    {
        id: "102",
        name: "Canopus",
        module: "6"
    },
    {
        id: "103",
        name: "Arcturus",
        module: "0"
    }
]

export const students: IStudentDB[] = [
    {
        id: "201",
        name: "Pedro",
        email: "pedro@gmail.com",
        birthdate: new Date("1990/06/22"),
        classroom_id: "102"
    },
    {
        id: "202",
        name: "Raquel",
        email: "raquel@gmail.com",
        birthdate: new Date("1980/02/12"),
        classroom_id: "103"
    },
    {
        id: "203",
        name: "Bruno",
        email: "bruno@gmail.com",
        birthdate: new Date ("1999/07/21"),
        classroom_id: "101"
    },
    {
        id: "204",
        name: "Ana",
        email: "ana@gmail.com",
        birthdate: new Date("1992/03/15"),
        classroom_id: "101"
    },
    {
        id: "205",
        name: "Lucas",
        email: "lulu@gmail.com",
        birthdate: new Date("1989/11/07"),
        classroom_id: "102"
    },
    {
        id: "206",
        name: "Alice",
        email: "alice@gmail.com",
        birthdate: new Date("1995/09/12"),
        classroom_id: "102"
    },
    {
        id: "207",
        name: "Bob",
        email: "bob@gmail.com",
        birthdate: new Date("2001/12/25"),
        classroom_id: "103"
    },
    {
        id: "208",
        name: "João",
        email: "joao@gmail.com",
        birthdate: new Date("1992/02/11"),
        classroom_id: "103"
    },
    {
        id: "209",
        name: "Maria",
        email: "maria@gmail.com",
        birthdate: new Date("1994/06/15"),
        classroom_id: "103"
    },
    {
        id: "210",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        birthdate: new Date("1980/01/01"),
        classroom_id: null
    }
]

export const hobbies: IHobbiesDB[] = [
    {
        id: "301",
        title: "Andar de bicicleta"
    },
    {
        id: "302",
        title: "Assistir filmes e séries"
    },
    {
        id: "303",
        title: "Codar"
    },
    {
        id: "304",
        title: "Academia"
    },
    {
        id: "305",
        title: "Correr"
    },
    {
        id: "306",
        title: "Cinema"
    },
    {
        id: "307",
        title: "Games"
    },
    {
        id: "308",
        title: "Cantar"
    },
    {
        id: "309",
        title: "Esportes"
    },
    {
        id: "310",
        title: "Praia"
    }
]

export const studentsHobbies: IStudentsHobbiesDB[] = [
    {
        student_id: "201",
        hobby_id: "301"
    },
    {
        student_id: "202",
        hobby_id: "302"
    },
    {
        student_id: "203",
        hobby_id: "303"
    },
    {
        student_id: "204",
        hobby_id: "304"
    },
    {
        student_id: "205",
        hobby_id: "305"
    },
    {
        student_id: "206",
        hobby_id: "306"
    },
    {
        student_id: "207",
        hobby_id: "307"
    },
    {
        student_id: "208",
        hobby_id: "308"
    },
    {
        student_id: "209",
        hobby_id: "309"
    },
    {
        student_id: "210",
        hobby_id: "310"
    }
]