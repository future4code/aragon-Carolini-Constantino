import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { IFindResInput, IShowDB, ITicketDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public findShow = async (date: Date): Promise < IShowDB | undefined> => {
        switch(date.getDate()) {
            case 5:
                return {
                    id: "id-astrodev",
                    band: "band-mock",
                    starts_at: new Date("2022/12/05")
                }
            default:
                return undefined
        }
    }

    public findShowById = async (show_id: string): Promise < IShowDB | undefined> => {
        switch(show_id) {
            case "201":
                return {
                    id: "201",
                    band: "band-mock",
                    starts_at: new Date("2022/12/05")
                } 
                default: 
                return undefined
        }
    }

    public createShow = async (newShow: Show) => {
        
    }

    public findReservation = async (reservation: IFindResInput): Promise < ITicketDB | undefined > => {
       const { show_id, user_id } = reservation

       switch(show_id && user_id) {
        case "202" && "101":
            return {
                id: "302",
                show_id: "202",
                user_id: "101"
            }
        default:
            return undefined
    }
        
    }

    public createReservation = async (input: ITicketDB) => {
       
    }

    public deleteReservation = async (id_reservation: string) => {
        
    }
    
}