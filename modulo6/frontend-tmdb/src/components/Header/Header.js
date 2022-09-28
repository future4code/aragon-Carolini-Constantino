import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";
import { StyleHeader } from "./styles";

export default function Header() {

  const navigate = useNavigate();

  return (
    <StyleHeader>
      <img
        onClick={() => goToHome(navigate)}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
      />
    </StyleHeader>
  )
}

