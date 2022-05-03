import React from "react";

export default class Etapa1 extends React.Component {
    render() {
        return (
            <section>
                <h3>ETAPA 1 - DADOS GERAIS</h3>

                <label>1. Qual o seu nome?</label>
                <input name="nome" value={""}></input>

                <label>2. Qual sua idade?</label>
                <input name="idade" value={""}></input>

                <label>3. Qual o seu e-mail?</label>
                <input name="nome" value={""}></input>

                <label>4. Qual sua escolaridade?</label>
                <select name="escolaridade">
                    <option value="ens. méd. incompleto">Ensino médio incompleto</option>
                    <option value="ens. méd. completo">Ensino médio completo</option>
                    <option value="ens. sup. incompleto">Ensino superior incompleto</option>
                    <option value="ens. sup. completo">Ensino superior</option>
                    </select>
                    
            </section>
        )
    }
}