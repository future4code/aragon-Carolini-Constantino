import { IShowDB } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public findShow = async (band: string, starts_at: number): Promise < IUserDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({ band: band, starts_at: starts_at })

        return result[0]
    }
}