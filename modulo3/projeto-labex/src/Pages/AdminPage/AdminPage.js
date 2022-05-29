import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { api_client, base_url } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToDetailsPage } from "../../routes/coordinator";
import styledComponents from "styled-components";
import { CardCreatTrip, CardTrip } from "./styles"
import { useForm } from "../../hooks/useForm";

function AdminPage() {
  const [data, isLoading] = useRequestData(`${base_url}${api_client}/trips`,
  []
);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
const {form, onChange, clear} = useForm({
  name: "",
  planet: "",
  date: "", 
  description: "",
  durationInDays: ""
})

const planets = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Jupiter",
  "Saturno",
  "Urano",
  "Netuno",
  "Plutão"
]

  return (
    <div>
      <Header
        actualPage={"homePage"} />

      <main>
        <section>
          <CardCreatTrip>
          <h2>Crie uma nova vigem:</h2>
          <form onSubmit={ /*onClickCreate*/"" }>
            <label htmlFor="name">Nome:</label>
            <input 
            id={"name"}
            name={"name"}
            // value={form.name}
            onChange={onChange}
            />

            <label htmlFor={"planet"}>Planeta:</label>
            <select 
            id={"planet"}
            name={"planet"}
            // defaultValue={""}
            onChange={onChange}
            >
            <option value={""} disabled>Escolha um Planeta</option>
            {planets.map((planet) => {
                                return <option value={planet} key={planet}>{planet}</option>
                            })}
                            </select>
            <label htmlFor={"date"}>Data de lançamento:</label>
            <input 
            id={"date"}
            name={"date"}
            // value={form.date}
            onChange={onChange}
            required />

            <label htmlFor={"description"}>Descrição:</label>
            <input 
            id={"description"}
            name={"description"}
            // value={form.description}
           onChange={onChange}
            />

            <label htmlFor={"duration"}>Duração (em dias):</label>
            <input 
            id={"duration"}
            name={"durationInDays"}
            // value={form.durationInDays}
            onChange={onChange}
            type={"number"} />

            <button type={"submit"}>Criar</button>
          </form>
          </CardCreatTrip>
        </section>

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
                  <div key={trip.id}>
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
                  </div>
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