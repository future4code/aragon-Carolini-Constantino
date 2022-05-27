import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { api_client, base_url } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToDetailsPage } from "../../routes/coordinator";
import styledComponents from "styled-components";

const StyledButton = styledComponents.div`
li{
  
}
button{
      align-items: center;
      background-color: #fff;
      border: 2px solid #FF1493;
      box-sizing: border-box;
      color: #0000FF;
      cursor: pointer;
      display: inline-flex;
      fill: #000;
      font-family: Inter,sans-serif;
      font-size: 16px;
      font-weight: 600;
      height: 48px;
      justify-content: center;
      letter-spacing: -.8px;
      line-height: 24px;
      min-width: 140px;
      outline: 0;
      padding: 0 37px;
      text-align: center;
      text-decoration: none;
      transition: all .3s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    
    .button-59:focus {
      color: #171e29;
    }
    
    .button-59:hover {
      border-color: #06f;
      color: #06f;
      fill: #06f;
    }
    
    .button-59:active {
      border-color: #06f;
      color: #06f;
      fill: #06f;
    }
    
    @media (min-width: 768px) {
      .button-59 {
        min-width: 170px;
      }

}
`
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
                  <StyledButton>
                  <li key={trip.id}>
                     <button
                      onClick={() => goToDetailsPage(navigate, trip.id)}
                    >{trip.name}</button>
                  </li>
                  </StyledButton>
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