import App from "../App"
import { keyAluno, url_base } from "../constants/url";
import axios from "axios";
import { useState, useEffect } from "react";


export default function MatchesPage() {
    
    const [matches, setMatches] =useState({})

    useEffect(() => {
        getMatches()
    }, [])
    
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

    
    const allMatches = matches && matches.map((match) => {
        return(
            <div key={match.id}>
            <img src={match.photo} alt={`foto de ${match.name}`} height={"3%"}></img>
            <h4>{match.name}</h4>
            <hr />
            </div>
        )
    }) 
 
    return(
        <div>
            <h2>Matches:</h2>
          {allMatches}
            <hr></hr>
        </div>
    )
}