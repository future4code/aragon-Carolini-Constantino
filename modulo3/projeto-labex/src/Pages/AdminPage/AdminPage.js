import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { api_client, base_url } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToDetailsPage } from "../../routes/coordinator";
import styledComponents from "styled-components";
import { CardTrip } from "./styles"

function AdminPage() {
  const [data, isLoading] = useRequestData(`${base_url}${api_client}/trips`,
  []
);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  return (
    <div>
      <Header
        actualPage={"homePage"} />

      <main>
        <section>
          <h2>Escolha sua nova viagem!</h2>
          <hr />
        </section>

        <section>
          <h2>Lista de viagens:</h2>

          {isLoading ? (
            <p>carregando...</p>
          ) : (
            <ul>
              {data.trips?.map((trip) => {
                return (
                  <li key={trip.id}>
                    <CardTrip>
                    <p><b>Nome:</b> {trip.name}</p>
    <p><b>Descrição:</b> {trip.description}</p>
    <p><b>Planeta:</b> {trip.planet}</p>
    <p><b>Duração:</b> {trip.durationInDays}</p>
    <p><b>Data:</b> {trip.date}</p>
    {token &&
        <>
            <button onClick={() => goToDetailsPage(navigate, trip.id)}>Exibir detalhes</button>
            <button onClick={() => ""}>Excluir viagem</button>
        </>}
    <hr /></CardTrip>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminPage;