import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { api_client, base_url } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToDetailsPage } from "../../routes/coordinator";

function HomePage() {
  const [data, isLoading] = useRequestData(`${base_url}${api_client}/trips`,
    []
  );
  const navigate = useNavigate();

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
                    <button
                      onClick={() => goToDetailsPage(navigate, trip.id)}
                    >{trip.name}</button>
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

export default HomePage;