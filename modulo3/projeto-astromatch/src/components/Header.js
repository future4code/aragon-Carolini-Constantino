import App from "../App"

export default function Header(props) {

return (
    <div>
<h1>AstroMatch</h1>
{props.page === "ProfilesPage" ? 
<button onClick={props.changeToProfilesPage}>Voltar para o início</button>
: <button onClick={props.changeToMatches}>Ir para matches</button>
}
<hr></hr>
    </div>
)

}