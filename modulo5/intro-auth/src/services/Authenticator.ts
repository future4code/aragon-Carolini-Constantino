import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

export interface ITokenPayload {
    id: string
}

export class Authenticator {
// Abaixo, método que gera e retorna token com 
// as 3 partes: payload, senha e tempo de expiração.
//Sendo que o métdo recebe o payload por parâmetro
    generateToken = (payload: ITokenPayload): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        try {
            //verifica se há token válido????
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY
            )

            return payload as ITokenPayload
        } catch (error) {
            return null
        }
    }
}