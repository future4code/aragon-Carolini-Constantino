import React from "react";

export default class Etapa3 extends React.Component {
    render() {
        return (
            <section>
              <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

              <label> 5. Por que você não terminou um curso de graduação?</label>
                <input name="nome" value={""}></input>

                <label>6. Você fez algum curso complementar?</label>
                <select name="escolaridade">
                    <option value="nenhum">Nenhum</option>
                    <option value="curso téc.">Curso Técnico</option>
                    <option value="ing">Curso de Inglês</option>
                    </select>

               
            </section>
        )
    }
}