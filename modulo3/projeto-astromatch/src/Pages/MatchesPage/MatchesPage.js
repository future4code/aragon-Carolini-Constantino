import { keyAluno, url_base } from "../../constants/url";
import axios from "axios";
import { useState, useEffect } from "react";


export default function MatchesPage() {

    const [matches, setMatches] = useState(undefined)

    const getMatches = () => {
        axios
            .get(`${url_base}${keyAluno}/matches`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        getMatches()
    }, [])

    const allMatches = matches && matches.map((match) => { //pq "matches && matches.map..."?
        return (
            <div key={match.id}>
                <img src={match.photo} alt={`foto de ${match.name}`} height={"50px"}></img>
                <p>{match.name}</p>
                <hr />
            </div>
        )
    })

    return (
        <div>
            <h2>Matches:</h2>
            {allMatches}
            <hr></hr>
        </div>
    )
}