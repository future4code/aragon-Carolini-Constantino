import React from "react"
import './CardPequeno.css'

function CardPequeno(props){
    return (
    <div className="ItemCardMenor">
        <img src={props.icone} />
        <p>{props.texto}</p>
    </div>
    )
}

export default CardPequeno;