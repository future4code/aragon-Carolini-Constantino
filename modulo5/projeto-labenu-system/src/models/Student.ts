//Abaixo tem tds interfaces relacionadas aos estudantes, D
//por isso foi colocados aqui; elas servem p/ tipar

export interface IStudentDB {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    classroom_id: string | null
}

export interface IHobbiesDB {
    id: string,
    title: string
}

export interface IStudentsHobbiesDB {
    student_id: string,
    hobby_id: string
}

export class Student {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date,
        private classroomId: string | null,
        private hobbies: string[]
    ) {}

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getBirthdate() {
        return this.birthdate
    }

    public getClassroomId() {
        return this.classroomId
    }

    public getHobbies() {
        return this.hobbies
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setBirthdate(newBirthdate: Date) {
        this.birthdate = newBirthdate
    }

    public setClassroomId(newClassroomId: string | null) {
        this.classroomId = newClassroomId
    }

    public setHobbies(newHobbies: string[]) {
        this.hobbies = [...newHobbies]//tomar cuidado pq aqui foi feito uma nova  
        //array com a cópia da lista antiga e add os novos estudantes
       }//é possível remover ou add com outros métodos
}