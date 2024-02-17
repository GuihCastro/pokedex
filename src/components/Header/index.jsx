import logo from "../../assets/img/logo.png";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Pokédex logo" />
    </Container>
  );
};