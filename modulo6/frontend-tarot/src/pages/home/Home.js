import { useNavigate } from "react-router-dom";
import { goToGame } from "../../routes/coordinator";
import { ContainerCentral, StylesHome } from "./styled";

export const Home = () => {
    const navigate = useNavigate()
    
    return (
        <StylesHome>
            <ContainerCentral>
            <h1>Bem Vinde ao Tarot Online...</h1>
            <h3>Jogue as cartas e descubra o que os arcanos reservam para você!<br/>
            Mas lembre-se: as cartas não te darão as respostas, pois quem escolhe seu futuro é você!
            </h3>
            <h2>Como jogar:</h2>
            <h3>
                Ao iniciar o jogo, clique em "Embaralhar" e escolha uma carta.
            </h3>

            <button onClick={() => goToGame(navigate)}>Começar</button>
            </ContainerCentral>
        </StylesHome>
    );
};

