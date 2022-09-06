// import { useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";
import { StyleGamePage } from "./style";


export const GamePage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(undefined);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [frontCard, setFrontCard] = useState(true)
   
    // const getData = () => {
    //     axios
    //         .get("./tarot.json")
    //         .then((response) => {
    //             setData(response.data);
    //             setCards(response.data.cards);
    //             setIsLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    // console.log(cards)
    useEffect(() => {
        // getData()
        axios.get("./tarot.json")
        .then((res) => {
            setCards(res.data.cards)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, []);
    
console.log(cards)
    const showTarot = cards && cards.map((card) => {
        return (
          <div>
            <img src={`${data.imagesUrl}${card.image}`}/>
          </div>
        )
    })
 
    return (
        <StyleGamePage>
        <button onClick={() => goToHome(navigate)}>Sair</button>
        {/* <button>{cardSide ? <p>Embaralhar</p> : <p>Reiniciar</p>}</button> */}
        {/* {isLoading ? <p>Carregando...</p> : showTarot}      */}
        {showTarot}
        </StyleGamePage>
    )
}