import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api_client, base_url } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToHomePage, goToAdminPage } from "../../routes/coordinator";
import { CardDetails } from "./styled";

function LabexDetailsPage() {
  const navigate = useNavigate();
    const { id } = useParams()

    const [data, isLoading] = useRequestData(`${base_url}${api_client}/trip/${id}`,
    {}
    );

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            alert("Erro de requisição!");
            goToHomePage(navigate);
        }
    }, [])


    return (
        <main>
          <CardDetails>
           <button onClick={() => goToAdminPage(navigate)}>Sair de detalhes</button>
           <h2>Detalhes daviagem:</h2>
           <hr/>
           {isLoading ? (
        <p>carregando...</p>
      ) : (
        <div>
          <h2>{data.trip?.name}</h2>
          <p>{data.trip?.description}</p>

          <h2>{data.trip?.candidates.length} Pessoas inscritas</h2>
            {data.trip?.candidates.map((candidate) => {
              return <li key={candidate.id}>{candidate.name}</li>;
            })}

          <h2>{data.trip?.approved.length} Pessoas aprovadas</h2>
            {data.trip?.approved.map((candidate) => {
              return <li key={candidate.id}>{candidate.name}</li>;
            })}
        </div>
      )}
      </CardDetails>
        </main>
    )
}

export default LabexDetailsPage;
