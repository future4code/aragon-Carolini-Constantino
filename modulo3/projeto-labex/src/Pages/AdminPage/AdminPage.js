import Header from "../../Components/Header/Header";
import { base_url, api_client } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";

function AdminPage() {
    const [data, isLoading] = useRequestData(`${base_url}${api_client}/trips`,
    []
  );

  const navigate = useNavigate();

  const listTrip = data?.map((trip) => {
      const butTons = (
          <section>
              <button onClick={() => goToDetailsPage(navigate, id)}>Detalhes</button>
              <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
          </section>
      )
  })

  const renderButton = () => {
      if(token !== null) return <butTons/>;
  }

    return (
        <div>
            <Header
                actualPage={"adminPage"} />

            <main>
                <section>
                    <h1>Crie uma nova viagem</h1>
                    <hr />
                </section>

                <section>
                    <h2>Lista de viagens:</h2>
                    <h3>Nome:<p>{data.name} </p></h3>
                    <h3>Descrição:<p>{data.description} </p></h3>
                    <h3>Planeta:<p>{data.planet} </p></h3>
                    <h3>Duração:<p>{data.durationInDays} </p></h3>
                    <h3>Data:<p>{data}.....</p></h3>
                    <renderButton/>
                </section>
            </main>
        </div>
    );
}

export default AdminPage;