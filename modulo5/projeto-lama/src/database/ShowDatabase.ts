import { IFindResInput, IShowDB, ITicketDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"


export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"


    public findShow = async (date: Date): Promise < IShowDB | undefined> => {
        
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({ starts_at: date })

        return result[0]
    }

    public findShowById = async (show_id: string): Promise < IShowDB | undefined> => {
        
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({ id: show_id })

        return result[0]
    }

    public createShow = async (newShow: Show) => {
       const showDB: IShowDB = {
            id: newShow.getId(),
            band: newShow.getBand(),
            starts_at: newShow.getStartsAt()
        }

        await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .insert(showDB)
    }

    public findReservation = async (reservation: IFindResInput): Promise < ITicketDB | undefined > => {
        const { show_id, user_id } = reservation

        const result: any = await BaseDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .select()
        .where({ show_id: show_id, user_id: user_id })

        return result[0] as ITicketDB
    }

    public createReservation = async (input: ITicketDB) => {
        const reservetion: ITicketDB = {
            id: input.id,
            show_id: input.show_id,
            user_id: input.user_id
        }

        await BaseDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .insert(reservetion)
    }

    public deleteReservation = async (id_reservation: string) => {
        const  id = id_reservation

        await BaseDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .delete()
        .where({ id: id })
    }
}