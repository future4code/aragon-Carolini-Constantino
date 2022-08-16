import { BaseError } from "./BaseError";
//sem token
export class UnauthorizedError extends BaseError {
    constructor(
        message: string = "Credenciais inválidas"
    ) {
        super(401, message)
    }
}