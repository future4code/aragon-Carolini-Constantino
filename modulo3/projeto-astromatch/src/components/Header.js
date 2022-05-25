import styled from "styled-components"

const StyledHeader = styled.div`
button{
    border-color: white;
    box-shadow: 0 0 2em gray;  
}
`

export default function Header(props) {

    return (
        <div>
            <h1> AstroMatch</h1>
            <StyledHeader>
            {props.page === "ProfilesPage" ?
                <button onClick={props.changeToMatchesPage}>Veja seu matches</button>
                : <button onClick={props.changeToProfilesPage}>Voltar para o início</button>
            }</StyledHeader>
            <hr></hr>
        </div>
    )

}