import { TClassroom } from "../models/Classroom";
import { TStudent } from "../models/Student";
import { THobby } from "../models/Hobby"

export const classrooms: IClassroom[] = [
    {
        id: "101",
        name: "Sirius",
        module: MODULE.1
    },
    {
        id: "102",
        name: "Canopus",
        module: MODULE.2
    },
    {
        id: "103",
        name: "Arcturus",
        module: MODULE.5
    }
]

export const students: TStudent[] = [
    {
        id: "201",
        name: "Pedro",
        email: "pedro@gmail.com",
        birthdate: new Date("1990/06/22"),
        classeroom_id: "102"
    },
    {
        id: "202",
        name: "Raquel",
        email: "raquel@gmail.com",
        birthdate: new Date("1980/02/12"),
        classeroom_id: "103",
        hobbies: ["Academia"]
    },
    {
        id: "203",
        name: "Bruno",
        email: "bruno@gmail.com",
        birthdate: new Date ("1999/07/21"),
        classeroom_id: "101",
        hobbies: ["Passear"]
    },
    {
        id: "204",
        name: "Ana",
        email: "ana@gmail.com",
        birthdate: new Date("1992/03/15"),
        classeroom_id: "101",
        hobbies: ["Andar de moto"]
    },
    {
        id: "205",
        name: "Lucas",
        email: "lulu@gmail.com",
        birthdate: new Date("1989/11/07"),
        classeroom_id: "102",
        hobbies: ["Correr"]
    }
]

export const hobbies: THobby [] = [
    {
        id: "301",
        title: "Ler"
    },
    {
        id: "302",
        title: "Assistir filmes e séries"
    },
    {
        id: "303",
        title: "Fazer caminhadas"
    }
]