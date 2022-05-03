import React from "react";

export default class Etapa2 extends React.Component {
    render() {
        return (
            <section>
              <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

                <label>3. Qual curso?</label>
                <input name="curso" value={""}></input>

                <label>4. Qual a unidade de ensino?</label>
                <input name="unidadeens" value={""}></input>

            </section>
        )
    }
}