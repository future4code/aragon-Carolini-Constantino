import Header from "../../Components/Header/Header";

function HomePage() {
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
        </section>
      </main>
    </div>
  );
}

export default HomePage;