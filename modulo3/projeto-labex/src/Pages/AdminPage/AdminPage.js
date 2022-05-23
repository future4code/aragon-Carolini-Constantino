import Header from "../../Components/Header/Header";

function AdminPage() {
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
                </section>
            </main>
        </div>
    );
}

export default AdminPage;