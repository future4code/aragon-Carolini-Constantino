import React, { useState, useEffect } from "react";
import axios from "axios";
import { goToHome } from "../../routes/coordinator";
import { CentralContainer, Modal, StyleGamePage } from "./style";
import { useNavigate } from "react-router-dom"
import { BACK_CARD_URL, BASE_URL } from "../../constants/url";

const GamePage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [frontCard, setFrontCard] = useState(true) //-------------------------------------------
    const [selectedCard, setSelectedCard] = useState(false)
    const [open, setOpen] = useState(false);

    const getData = () => {
        axios.get('./tarot.json')
            .then((res) => {
                setIsLoading(false)
                setCards(res.data.cards)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, []);

    const flipCard = () => {
        setFrontCard(!frontCard)
        shuffleCards()
    }

    const shuffleCards = () => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        setCards(cards)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectCard = (card) => {
        setSelectedCard(card)
        handleClickOpen(card)
    }

    const showTarot = cards && cards.map((card) => {

        return (
            <div onClick={() => { selectCard(card) }}>
                <img src={frontCard ? `${BASE_URL}${card.image}` : `${BACK_CARD_URL}`} />
            </div>
        )
    })
    console.log( selectedCard.interpretation)

    const close = () => {
        selectCard(false)
    }

    return (
        <StyleGamePage>
            <button onClick={flipCard}>{frontCard ? <p>Embaralhar</p> : <p>Reiniciar</p>}</button>
            <CentralContainer>
                {isLoading ? <p>Carregando...</p> : showTarot}
            </CentralContainer>

            {selectedCard ?
                <div className="ContainerModal">
                    <Modal>
                        <button className="close" onClick={() => close()}>X</button>
                        <h2>{selectedCard.name}</h2>
                        <div className="littleFild">
                        {<img src={`${BASE_URL}${selectedCard.image}`} />}
                        <p>{selectedCard.interpretation}</p>
                        </div>
                    </Modal>
                </div>
                : ("")}

        </StyleGamePage>
        
    )
}
export default GamePage