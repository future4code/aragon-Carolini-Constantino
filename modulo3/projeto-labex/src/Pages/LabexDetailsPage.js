import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { api_client, base_url } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import { goToHomePage } from "../routes/coordinator";


function LabexDetailsPage() {
const navigate = useNavigate();
const {id} = useParams()

const [data, isLoading] = useRequestData(
    `${base_url}${api_client}/trip/${id}`,
    {}
);

useEffect(() => {
    if(!localStorage.getItem("token-labex")) {
        alert("Você precisa se logar para acessar a página!");
        goToHomePage(navigate);
    }
}, []);

    return (
        <main>
            <Header/>
            <h2>Detalhes:</h2>
            <hr/>

            {isLoading? (
                <p>carregando...</p>
            ) : (
                <div>
                    <h3>{data.trip?.name}</h3>
                    <p>{data.trip?.description}</p>

                    <h2>{data.trip?.candidates.lenght} pessoas escritas.</h2>
                    <ul>
                    {data.trip?.candidates.map((candidate) => {
                        return <li key={candidate.id}>{candidate.name}</li>
                    })}
                    </ul>
                    <h3>{data.trip?.approved.lenght} pessoas aprovadas.</h3>
                    <ul>
                    {data.trip?.approved.map((candidate) => {
                        return <li key={candidate.id}>{candidate.name}</li>
                    })}
                    </ul>
                </div>
            )}
        </main>
    )
}

export default LabexDetailsPage;
