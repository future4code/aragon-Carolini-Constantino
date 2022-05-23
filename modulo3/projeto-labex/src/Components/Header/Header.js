import { goToAdminPage, goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();

    const renderHeader = () => {
        switch (props.actualPage) {
            case "homePage":
                return (
                    <button onClick={() => goToAdminPage(navigate)}>Sing in</button>
                );
            case "adminPage":
                return (
                    <button onClick={() => goToHomePage(navigate)}>Logout</button>
                );
            default:
                return;
        };
    };

    return (
        <div>

            <h1>LabeX</h1>
            {renderHeader()}
            <hr />
        </div>
    );
}

export default Header;