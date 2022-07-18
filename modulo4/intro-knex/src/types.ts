export enum ROLE {
FRONT = "front",
BACK = "back"
}

export type User = {
    id: number,
    name: string,
    email: string,
    "role"?: ROLE
}